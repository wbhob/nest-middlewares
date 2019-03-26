import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ServeIndexMiddleware } from './index';

describe('ServeIndexMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ServeIndexMiddleware;
    let ProxiedServeIndexMiddleware;
    let serverIndexStub: sinon.SinonStub;
    beforeEach(() => {
        serverIndexStub = stub();
        ProxiedServeIndexMiddleware = proxyquire('./index', {
            'serve-index': serverIndexStub,
        }).ServeIndexMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            serverIndexStub.returns(stub());
            ProxiedServeIndexMiddleware.configure('./lerna.json', {});
            middleware = new ProxiedServeIndexMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(serverIndexStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedServeIndexMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            serverIndexStub.returns(stub());
            middleware = new ProxiedServeIndexMiddleware();
        });

        it('should throw for being improperly configured', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });
});
