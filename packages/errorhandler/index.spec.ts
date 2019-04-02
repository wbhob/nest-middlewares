import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ErrorHandlerMiddleware } from './index';

describe('ErrorHandlerMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ErrorHandlerMiddleware;
    let ProxiedErrorHandlerMiddleware;
    let errorHandlerStub: sinon.SinonStub;
    beforeEach(() => {
        errorHandlerStub = stub();
        ProxiedErrorHandlerMiddleware = proxyquire('./index', {
            errorhandler: errorHandlerStub,
        }).ErrorHandlerMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            errorHandlerStub.returns(stub());
            ProxiedErrorHandlerMiddleware.configure({
                log: true,
            });
            middleware = new ProxiedErrorHandlerMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(errorHandlerStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedErrorHandlerMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            errorHandlerStub.returns(stub());
            middleware = new ProxiedErrorHandlerMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(errorHandlerStub.called).to.be.true;
        });
    });
});
