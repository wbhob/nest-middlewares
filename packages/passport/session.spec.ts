import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { PassportSessionMiddleware } from './session';

describe('PassportSessionMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: PassportSessionMiddleware;
    let ProxiedPassportSessionMiddleware;
    let passportSessionStub: sinon.SinonStub;
    beforeEach(() => {
        passportSessionStub = stub();
        ProxiedPassportSessionMiddleware = proxyquire('./session', {
            passport: { session: passportSessionStub },
        }).PassportSessionMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            passportSessionStub.returns(stub());
            middleware = new ProxiedPassportSessionMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(passportSessionStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedPassportSessionMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            passportSessionStub.returns(stub());
            middleware = new ProxiedPassportSessionMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(passportSessionStub.called).to.be.true;
        });
    });
});
