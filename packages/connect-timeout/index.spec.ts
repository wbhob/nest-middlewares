import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ConnectTimeoutMiddleware } from './index';

describe('ConnectTimeoutMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ConnectTimeoutMiddleware;
    let ProxiedConnectTimeoutMiddleware;
    let connectTimeoutStub: sinon.SinonStub;
    beforeEach(() => {
        connectTimeoutStub = stub();
        ProxiedConnectTimeoutMiddleware = proxyquire('./index', {
            'connect-timeout': connectTimeoutStub,
        }).ConnectTimeoutMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            connectTimeoutStub.returns(stub());
            ProxiedConnectTimeoutMiddleware.configure('5s', {});
            middleware = new ProxiedConnectTimeoutMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(connectTimeoutStub.called).to.be.true;
        });
        afterEach(() => {
            ConnectTimeoutMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            connectTimeoutStub.returns(stub());
            middleware = new ProxiedConnectTimeoutMiddleware();
        });

        it('should throw if improperly configured', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });
});
