import { expect } from 'chai';
import proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetXssFilterMiddleware } from './xss-filter';

describe('HelmetXssFilterMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetXssFilterMiddleware;
    let ProxiedHelmetXssFilterMiddleware;
    let helmetXssFilterStub: sinon.SinonStub;
    beforeEach(() => {
        helmetXssFilterStub = stub();
        ProxiedHelmetXssFilterMiddleware = proxyquire('./xss-filter', {
            helmet: { xssFilter: helmetXssFilterStub },
        }).HelmetXssFilterMiddleware;
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetXssFilterStub.returns(stub());
            middleware = new ProxiedHelmetXssFilterMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetXssFilterStub.called).to.be.true;
        });
    });
});
