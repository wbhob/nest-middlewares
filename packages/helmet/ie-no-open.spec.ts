import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetIeNoOpenMiddleware } from './ie-no-open';

describe('HelmetIeNoOpenMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetIeNoOpenMiddleware;
    let ProxiedHelmetIeNoOpenMiddleware;
    let helmetIeNoOpenStub: sinon.SinonStub;
    beforeEach(() => {
        helmetIeNoOpenStub = stub();
        ProxiedHelmetIeNoOpenMiddleware = proxyquire('./ie-no-open', {
            helmet: { ieNoOpen: helmetIeNoOpenStub },
        }).HelmetIeNoOpenMiddleware;
        helmetIeNoOpenStub.returns(stub());
        middleware = new ProxiedHelmetIeNoOpenMiddleware();
    });

    it('should be defined', () => {
        expect(middleware).to.not.be.undefined;
    });

    it('should have a function called use', () => {
        expect(middleware.use).to.be.instanceof(Function);
    });

    it('should call middleware from calling use', () => {
        middleware.use(mockRequest, mockResponse, stub());
        expect(helmetIeNoOpenStub.called).to.be.true;
    });
});
