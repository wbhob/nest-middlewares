import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { CookieParserMiddleware } from './index';

describe('CookieParserMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: CookieParserMiddleware;
    let ProxiedCookieParserMiddleware;
    let cookieParserStub: sinon.SinonStub;
    beforeEach(() => {
        cookieParserStub = stub();
        ProxiedCookieParserMiddleware = proxyquire('./index', {
            'cookie-parser': cookieParserStub,
        }).CookieParserMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            cookieParserStub.returns(stub());
            ProxiedCookieParserMiddleware.configure('hello', {
                decode: (val: string) => {
                    return val;
                },
            });
            middleware = new ProxiedCookieParserMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(cookieParserStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedCookieParserMiddleware.configure(undefined);
        });
    });

    describe('properly configured with only secret', () => {
        beforeEach(() => {
            cookieParserStub.returns(stub());
            ProxiedCookieParserMiddleware.configure('hello');
            middleware = new ProxiedCookieParserMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(cookieParserStub.called).to.be.true;
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            cookieParserStub.returns(stub());
            middleware = new ProxiedCookieParserMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(cookieParserStub.called).to.be.true;
        });
    });

    afterEach(() => {
        CookieParserMiddleware.configure(undefined);
    });
});
