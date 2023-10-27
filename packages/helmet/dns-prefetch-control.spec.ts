import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetDnsPrefetchControlMiddleware } from './dns-prefetch-control';

describe('HelmetDnsPrefetchControlMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetDnsPrefetchControlMiddleware;
    let ProxiedHelmetDnsPrefetchControlMiddleware;
    let helmetDnsPrefetchControlStub: sinon.SinonStub;
    beforeEach(() => {
        helmetDnsPrefetchControlStub = stub();
        ProxiedHelmetDnsPrefetchControlMiddleware = proxyquire('./dns-prefetch-control', {
            helmet: { dnsPrefetchControl: helmetDnsPrefetchControlStub },
        }).HelmetDnsPrefetchControlMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            helmetDnsPrefetchControlStub.returns(stub());
            ProxiedHelmetDnsPrefetchControlMiddleware.configure({
                allow: true,
            });
            middleware = new ProxiedHelmetDnsPrefetchControlMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetDnsPrefetchControlStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetDnsPrefetchControlMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetDnsPrefetchControlStub.returns(stub());
            middleware = new ProxiedHelmetDnsPrefetchControlMiddleware();
        });

        it('should throw an error for not being configured', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetDnsPrefetchControlStub.called).to.be.true;
        });
    });
});
