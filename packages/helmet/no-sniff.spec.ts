import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetNoSniffMiddleware } from './no-sniff';

describe('HelmetNoSniffMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetNoSniffMiddleware;
    let ProxiedHelmetNoSniffMiddleware;
    let helmetNoSniffStub: sinon.SinonStub;
    beforeEach(() => {
        helmetNoSniffStub = stub();
        ProxiedHelmetNoSniffMiddleware = proxyquire('./no-sniff', {
            helmet: { noSniff: helmetNoSniffStub },
        }).HelmetNoSniffMiddleware;
        helmetNoSniffStub.returns(stub());
        middleware = new ProxiedHelmetNoSniffMiddleware();
    });

    it('should be defined', () => {
        expect(middleware).to.not.be.undefined;
    });

    it('should have a function called use', () => {
        expect(middleware.use).to.be.instanceof(Function);
    });

    it('should call middleware from calling use', () => {
        middleware.use(mockRequest, mockResponse, stub());
        expect(helmetNoSniffStub.called).to.be.true;
    });
});
