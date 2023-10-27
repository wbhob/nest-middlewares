import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ExpressSessionMiddleware } from './index';

describe('ExpressSessionMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ExpressSessionMiddleware;
    let ProxiedExpressSessionMiddleware;
    let expressSessionStub: sinon.SinonStub;
    beforeEach(() => {
        expressSessionStub = stub();
        ProxiedExpressSessionMiddleware = proxyquire('./index', {
            'express-session': expressSessionStub,
        }).ExpressSessionMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            expressSessionStub.returns(stub());
            ProxiedExpressSessionMiddleware.configure({
                secret: 'hi',
            });
            middleware = new ProxiedExpressSessionMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(expressSessionStub.called).to.be.true;
        });
        afterEach(() => {
            ExpressSessionMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            expressSessionStub.returns(stub());
            middleware = new ProxiedExpressSessionMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(expressSessionStub.called).to.be.true;
        });
    });
});
