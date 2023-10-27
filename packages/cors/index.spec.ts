import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { CorsMiddleware } from './index';

describe('CorsMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: CorsMiddleware;
    let ProxiedCorsMiddleware;
    let corsStub: sinon.SinonStub;
    beforeEach(() => {
        corsStub = stub();
        ProxiedCorsMiddleware = proxyquire('./index', {
            cors: corsStub,
        }).CorsMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            corsStub.returns(stub());
            ProxiedCorsMiddleware.configure({
                maxAge: 4354,
            });
            middleware = new ProxiedCorsMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(corsStub.called).to.be.true;
        });
        afterEach(() => {
            CorsMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            corsStub.returns(stub());
            middleware = new ProxiedCorsMiddleware();
        });

        it('should throw an error for not being configured', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(corsStub.called).to.be.true;
        });
    });
});
