import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetXssFilterMiddleware } from './xss-filter';

describe('HelmetXssFilterMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetXssFilterMiddleware;
    let ProxiedHelmetXssFilterMiddleware;
    let helmetXssFilterStub: sinon.SinonStub;
    beforeEach(() => {
        helmetXssFilterStub = stub();
        ProxiedHelmetXssFilterMiddleware = proxyquire('./xss-filter', {
            helmet: { xssFilter: helmetXssFilterStub },
        }).HelmetXssFilterMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            helmetXssFilterStub.returns(stub());
            ProxiedHelmetXssFilterMiddleware.configure({
                setOnOldIE: true,
            });
            middleware = new ProxiedHelmetXssFilterMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetXssFilterStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetXssFilterMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetXssFilterStub.returns(stub());
            middleware = new ProxiedHelmetXssFilterMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetXssFilterStub.called).to.be.true;
        });
    });
});
