import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetFrameguardMiddleware } from './frameguard';

describe('HelmetFrameguardMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetFrameguardMiddleware;
    let ProxiedHelmetFrameguardMiddleware;
    let helmetFrameguardStub: sinon.SinonStub;
    beforeEach(() => {
        helmetFrameguardStub = stub();
        ProxiedHelmetFrameguardMiddleware = proxyquire('./frameguard', {
            helmet: { frameguard: helmetFrameguardStub },
        }).HelmetFrameguardMiddleware;
    });

    describe('middleware configured', () => {
        beforeEach(() => {
            helmetFrameguardStub.returns(stub());
            ProxiedHelmetFrameguardMiddleware.configure({
                action: 'SAMEORIGIN',
            });
            middleware = new ProxiedHelmetFrameguardMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetFrameguardStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetFrameguardMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetFrameguardStub.returns(stub());
            middleware = new ProxiedHelmetFrameguardMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetFrameguardStub.called).to.be.true;
        });
    });
});
