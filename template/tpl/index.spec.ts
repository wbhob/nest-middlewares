import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { MiddlewareMiddleware } from './index';

describe('MiddlewareMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: MiddlewareMiddleware;
    let ProxiedMiddlewareMiddleware;
    let middlewareStub: sinon.SinonStub;
    beforeEach(() => {
        middlewareStub = stub();
        ProxiedMiddlewareMiddleware = proxyquire('./index', {
            middleware: middlewareStub,
        }).MiddlewareMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            middlewareStub.returns(stub());
            ProxiedMiddlewareMiddleware.configure({});
            middleware = new ProxiedMiddlewareMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(middlewareStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedMiddlewareMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middlewareStub.returns(stub());
            middleware = new ProxiedMiddlewareMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(middlewareStub.called).to.be.true;
        });
    });
});
