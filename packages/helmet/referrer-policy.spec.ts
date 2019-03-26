import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetReferrerPolicyMiddleware } from './referrer-policy';

describe('HelmetReferrerPolicyMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetReferrerPolicyMiddleware;
    let ProxiedHelmetReferrerPolicyMiddleware;
    let helmetReferrerPolicyStub: sinon.SinonStub;
    beforeEach(() => {
        helmetReferrerPolicyStub = stub();
        ProxiedHelmetReferrerPolicyMiddleware = proxyquire('./referrer-policy', {
            helmet: { referrerPolicy: helmetReferrerPolicyStub},
        }).HelmetReferrerPolicyMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            helmetReferrerPolicyStub.returns(stub());
            ProxiedHelmetReferrerPolicyMiddleware.configure({
                policy: 'no-referrer',
            });
            middleware = new ProxiedHelmetReferrerPolicyMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetReferrerPolicyStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetReferrerPolicyMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetReferrerPolicyStub.returns(stub());
            middleware = new ProxiedHelmetReferrerPolicyMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetReferrerPolicyStub.called).to.be.true;
        });
    });
});
