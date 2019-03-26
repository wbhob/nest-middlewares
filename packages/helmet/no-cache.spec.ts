import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetNoCacheMiddleware } from './no-cache';

describe('HelmetNoCacheMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetNoCacheMiddleware;
    let ProxiedHelmetNoCacheMiddleware;
    let helmetNoCacheStub: sinon.SinonStub;
    beforeEach(() => {
        helmetNoCacheStub = stub();
        ProxiedHelmetNoCacheMiddleware = proxyquire('./no-cache', {
            helmet: { noCache: helmetNoCacheStub },
        }).HelmetNoCacheMiddleware;
        helmetNoCacheStub.returns(stub());
        middleware = new ProxiedHelmetNoCacheMiddleware();
    });

    it('should be defined', () => {
        expect(middleware).to.not.be.undefined;
    });

    it('should have a function called use', () => {
        expect(middleware.use).to.be.instanceof(Function);
    });

    it('should call middleware from calling use', () => {
        middleware.use(mockRequest, mockResponse, stub());
        expect(helmetNoCacheStub.called).to.be.true;
    });
});
