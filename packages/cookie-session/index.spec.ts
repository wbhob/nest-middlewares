import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { CookieSessionMiddleware } from './index';

describe('CookieSessionMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: CookieSessionMiddleware;
    let ProxiedCookieSessionMiddleware;
    let cookieSessionStub: sinon.SinonStub;
    beforeEach(() => {
        cookieSessionStub = stub();
        ProxiedCookieSessionMiddleware = proxyquire('./index', {
            'cookie-session': cookieSessionStub,
        }).CookieSessionMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            cookieSessionStub.returns(stub());
            ProxiedCookieSessionMiddleware.configure({
                keys: ['hello'],
                name: 'CookieSession',
            });
            middleware = new ProxiedCookieSessionMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(cookieSessionStub.called).to.be.true;
        });
    });

    describe('not configured', () => {

        beforeEach(() => {
            cookieSessionStub.returns(stub());
            middleware = new ProxiedCookieSessionMiddleware();
        });

        it('should throw error when not given keys', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });

    afterEach(() => {
        CookieSessionMiddleware.configure(undefined);
    });
});
