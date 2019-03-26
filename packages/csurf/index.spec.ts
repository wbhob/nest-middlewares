import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { CsurfMiddleware } from './index';

describe('CsurfMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: CsurfMiddleware;
    let ProxiedCsurfMiddleware;
    let csurfStub: sinon.SinonStub;
    beforeEach(() => {
        csurfStub = stub();
        ProxiedCsurfMiddleware = proxyquire('./index', {
            csurf: csurfStub,
        }).CsurfMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            csurfStub.returns(stub());
            ProxiedCsurfMiddleware.configure({
                cookie: true,
            });
            middleware = new ProxiedCsurfMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(csurfStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedCsurfMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            csurfStub.returns(stub());
            middleware = new ProxiedCsurfMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(csurfStub.called).to.be.true;
        });
    });
});
