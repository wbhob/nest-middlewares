import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { MorganMiddleware } from './index';

describe('MorganMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: MorganMiddleware;
    let ProxiedMorganMiddleware;
    let morganStub: sinon.SinonStub;
    beforeEach(() => {
        morganStub = stub();
        ProxiedMorganMiddleware = proxyquire('./index', {
            morgan: morganStub,
        }).MorganMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            morganStub.returns(stub());
            ProxiedMorganMiddleware.configure('tiny');
            middleware = new ProxiedMorganMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(morganStub.called).to.be.true;
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            morganStub.returns(stub());
            middleware = new ProxiedMorganMiddleware();
        });

        it('should throw when not passed a format', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });
    afterEach(() => {
        MorganMiddleware.configure(undefined as any);
    });

    describe('token generation', () => {
        it('should create a token when calling token()', () => {
            morganStub.returns(stub());
            ProxiedMorganMiddleware.configure(':type');
            ProxiedMorganMiddleware.token('type', () => {
                return 'hello';
            });
            middleware = new ProxiedMorganMiddleware();
            expect(middleware.use.bind(middleware)).to.not.throw();
        });
    });
});
