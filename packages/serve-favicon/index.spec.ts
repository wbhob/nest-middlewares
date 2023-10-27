import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { ServeFaviconMiddleware } from './index';

describe('ServeFaviconMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ServeFaviconMiddleware;
    let ProxiedServeFaviconMiddleware;
    let serveFaviconStub: sinon.SinonStub;
    beforeEach(() => {
        serveFaviconStub = stub();
        ProxiedServeFaviconMiddleware = proxyquire('./index', {
            'serve-favicon': serveFaviconStub,
        }).ServeFaviconMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            serveFaviconStub.returns(stub());
            ProxiedServeFaviconMiddleware.configure('./lerna.json', {});
            middleware = new ProxiedServeFaviconMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(serveFaviconStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedServeFaviconMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            serveFaviconStub.returns(stub());
            middleware = new ProxiedServeFaviconMiddleware();
        });

        it('should throw for being improperly configured', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });
});
