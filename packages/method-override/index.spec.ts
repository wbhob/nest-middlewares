import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { MethodOverrideMiddleware } from './index';

describe('MethodOverrideMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: MethodOverrideMiddleware;
    let ProxiedMethodOverrideMiddleware;
    let methodOverrideStub: sinon.SinonStub;
    beforeEach(() => {
        methodOverrideStub = stub();
        ProxiedMethodOverrideMiddleware = proxyquire('./index', {
            'method-override': methodOverrideStub,
        }).MethodOverrideMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            methodOverrideStub.returns(stub());
            ProxiedMethodOverrideMiddleware.configure('X-HTTP-Method-Override', {
                methods: ['POST'],
            });
            middleware = new ProxiedMethodOverrideMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(methodOverrideStub.called).to.be.true;
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            methodOverrideStub.returns(stub());
            middleware = new ProxiedMethodOverrideMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(methodOverrideStub.called).to.be.true;
        });
    });
    afterEach(() => {
        ProxiedMethodOverrideMiddleware.configure(undefined);
    });
});
