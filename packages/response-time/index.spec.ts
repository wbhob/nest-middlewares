import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ResponseTimeMiddleware } from './index';

describe('ResponseTimeMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ResponseTimeMiddleware;
    let ProxiedResponseTimeMiddleware;
    let responseTimeStub: sinon.SinonStub;
    beforeEach(() => {
        responseTimeStub = stub();
        ProxiedResponseTimeMiddleware = proxyquire('./index', {
            'response-time': responseTimeStub,
        }).ResponseTimeMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            responseTimeStub.returns(stub());
            ProxiedResponseTimeMiddleware.configure({});
            middleware = new ProxiedResponseTimeMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(responseTimeStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedResponseTimeMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            responseTimeStub.returns(stub());
            middleware = new ProxiedResponseTimeMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(responseTimeStub.called).to.be.true;
        });
    });
});
