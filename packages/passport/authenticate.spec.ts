import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { PassportAuthenticateMiddleware } from './authenticate';

describe('PassportAuthenticateMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: PassportAuthenticateMiddleware;
    let ProxiedPassportAuthenticateMiddleware;
    let passportAuthenticateStub: sinon.SinonStub;
    beforeEach(() => {
        passportAuthenticateStub = stub();
        ProxiedPassportAuthenticateMiddleware = proxyquire('./authenticate', {
            passport: { authenticate: passportAuthenticateStub },
        }).PassportAuthenticateMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            passportAuthenticateStub.returns(stub());
            middleware = new ProxiedPassportAuthenticateMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            ProxiedPassportAuthenticateMiddleware.configure('bearer', { session: false });
            middleware.use(mockRequest, mockResponse, stub());
            expect(passportAuthenticateStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedPassportAuthenticateMiddleware.configure(undefined, undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            passportAuthenticateStub.returns(stub());
            middleware = new ProxiedPassportAuthenticateMiddleware();
        });

        it('should call middleware from calling use', () => {
            ProxiedPassportAuthenticateMiddleware.configure('bearer', { session: false });
            middleware.use(mockRequest, mockResponse, stub());
            expect(passportAuthenticateStub.called).to.be.true;
        });
    });
});
