import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';

import { CompressionMiddleware } from './index';

describe('CompressionMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: CompressionMiddleware;
    let ProxiedCompressionMiddleware;
    let compressionStub: sinon.SinonStub;
    beforeEach(() => {
        compressionStub = stub();
        ProxiedCompressionMiddleware = proxyquire('./index', {
            compression: compressionStub,
        }).CompressionMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            compressionStub.returns(stub());
            ProxiedCompressionMiddleware.configure({
                windowBits: 8,
            });
            middleware = new ProxiedCompressionMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(compressionStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedCompressionMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            compressionStub.returns(stub());
            middleware = new ProxiedCompressionMiddleware();
        });

        it('should call middleware for not being configured', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(compressionStub.called).to.be.true;
        });
    });
});
