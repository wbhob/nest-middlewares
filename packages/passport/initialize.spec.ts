import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { PassportInitializeMiddleware } from './initialize';

describe('PassportInitializeMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: PassportInitializeMiddleware;
    let ProxiedPassportInitializeMiddleware;
    let passportInitializeStub: sinon.SinonStub;
    beforeEach(() => {
        passportInitializeStub = stub();
        ProxiedPassportInitializeMiddleware = proxyquire('./initialize', {
            passport: { initialize: passportInitializeStub },
        }).PassportInitializeMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            passportInitializeStub.returns(stub());
            middleware = new ProxiedPassportInitializeMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(passportInitializeStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedPassportInitializeMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            passportInitializeStub.returns(stub());
            middleware = new ProxiedPassportInitializeMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(passportInitializeStub.called).to.be.true;
        });
    });
});
