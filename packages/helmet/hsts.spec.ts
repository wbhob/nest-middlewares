import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetHstsMiddleware } from './hsts';

describe('HelmetHstsMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetHstsMiddleware;
    let ProxiedHelmetHstsMiddleware;
    let helmetHstsStub: sinon.SinonStub;
    beforeEach(() => {
        helmetHstsStub = stub();
        ProxiedHelmetHstsMiddleware = proxyquire('./hsts', {
            helmet: { hsts: helmetHstsStub },
        }).HelmetHstsMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            helmetHstsStub.returns(stub());
            ProxiedHelmetHstsMiddleware.configure({
                maxAge: 3423,
            });
            middleware = new ProxiedHelmetHstsMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetHstsStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetHstsMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetHstsStub.returns(stub());
            middleware = new ProxiedHelmetHstsMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetHstsStub.called).to.be.true;
        });
    });
});
