import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetHidePoweredByMiddleware } from './hide-powered-by';

describe('HelmetHidePoweredByMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetHidePoweredByMiddleware;
    let ProxiedHelmetHidePoweredByMiddleware;
    let helmetHidePoweredStub: sinon.SinonStub;
    beforeEach(() => {
        helmetHidePoweredStub = stub();
        ProxiedHelmetHidePoweredByMiddleware = proxyquire('./hide-powered-by', {
            helmet: { hidePoweredBy: helmetHidePoweredStub },
        }).HelmetHidePoweredByMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            helmetHidePoweredStub.returns(stub());
            ProxiedHelmetHidePoweredByMiddleware.configure({
                setTo: 'foo',
            });
            middleware = new ProxiedHelmetHidePoweredByMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetHidePoweredStub.called).to.be.true;
        });

        afterEach(() => {
            ProxiedHelmetHidePoweredByMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetHidePoweredStub.returns(stub());
            middleware = new ProxiedHelmetHidePoweredByMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetHidePoweredStub.called).to.be.true;
        });
    });
});
