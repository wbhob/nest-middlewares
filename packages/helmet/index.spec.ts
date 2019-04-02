import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetMiddleware } from './index';

describe('HelmetMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetMiddleware;
    let ProxiedHelmetMiddleware;
    let helmetStub: sinon.SinonStub;
    beforeEach(() => {
        helmetStub = stub();
        ProxiedHelmetMiddleware = proxyquire('./index', {
            helmet: helmetStub,
        }).HelmetMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            helmetStub.returns(stub());
            ProxiedHelmetMiddleware.configure({
                xssFilter: true,
            });
            middleware = new ProxiedHelmetMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetStub.returns(stub());
            middleware = new ProxiedHelmetMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetStub.called).to.be.true;
        });
    });
});
