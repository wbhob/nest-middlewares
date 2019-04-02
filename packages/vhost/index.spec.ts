import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { VhostMiddleware } from './index';

describe('VhostMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: VhostMiddleware;
    let ProxiedVhostMiddleware;
    let vHostStub: sinon.SinonStub;
    beforeEach(() => {
        vHostStub = stub();
        ProxiedVhostMiddleware = proxyquire('./index', {
            vhost: vHostStub,
        }).VhostMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            vHostStub.returns(stub());
            ProxiedVhostMiddleware.configure('hello.com', () => {
                return;
            });
            middleware = new ProxiedVhostMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(vHostStub.called).to.be.true;
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            vHostStub.returns(stub());
            middleware = new ProxiedVhostMiddleware();
        });

        it('should throw if a path and handler are not specified', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });

    afterEach(() => {
        ProxiedVhostMiddleware.configure(undefined, undefined);
    });
});
