import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ServeStaticMiddleware } from './index';

describe('ServeStaticMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ServeStaticMiddleware;
    let ProxiedServeStaticMiddleware;
    let serverStaticStub: sinon.SinonStub;
    beforeEach(() => {
        serverStaticStub = stub();
        ProxiedServeStaticMiddleware = proxyquire('./index', {
            'serve-static': serverStaticStub,
        }).ServeStaticMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            serverStaticStub.returns(stub());
            ProxiedServeStaticMiddleware.configure('./lerna.json', {});
            middleware = new ProxiedServeStaticMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(serverStaticStub.called).to.be.true;
        });

        afterEach(() => {
            ProxiedServeStaticMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            serverStaticStub.returns(stub());
            middleware = new ProxiedServeStaticMiddleware();
        });

        it('should throw if a path is not specified', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });
});
