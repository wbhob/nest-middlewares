import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ExpressBearerTokenMiddleware } from './index';

describe('ExpressBearerTokenMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ExpressBearerTokenMiddleware;
    let ProxiedExpressBearerTokenMiddleware;
    let expressBearerStub: sinon.SinonStub;
    beforeEach(() => {
        expressBearerStub = stub();
        ProxiedExpressBearerTokenMiddleware = proxyquire('./index', {
            'express-bearer-token': expressBearerStub,
        }).ExpressBearerTokenMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            expressBearerStub.returns(stub());
            ProxiedExpressBearerTokenMiddleware.configure({});
            middleware = new ProxiedExpressBearerTokenMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(expressBearerStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedExpressBearerTokenMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            expressBearerStub.returns(stub());
            middleware = new ProxiedExpressBearerTokenMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(expressBearerStub.called).to.be.true;
        });
    });
});
