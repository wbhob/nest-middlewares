import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetContentSecurityPolicyMiddleware } from './content-security-policy';

describe('HelmetContentSecurityPolicyMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetContentSecurityPolicyMiddleware;
    let ProxiedHelmetContentSecurityPolicyMiddleware;
    let helmetContentSecurityPolicyStub: sinon.SinonStub;
    beforeEach(() => {
        helmetContentSecurityPolicyStub = stub();
        ProxiedHelmetContentSecurityPolicyMiddleware = proxyquire('./content-security-policy', {
            helmet: { contentSecurityPolicy: helmetContentSecurityPolicyStub },
        }).HelmetContentSecurityPolicyMiddleware;
    });
    describe('middleware properly configured', () => {
        beforeEach(() => {
            helmetContentSecurityPolicyStub.returns(stub());
            ProxiedHelmetContentSecurityPolicyMiddleware.configure({
                directives: {
                    defaultSrc: ['"self"'],
                },
            });
            middleware = new ProxiedHelmetContentSecurityPolicyMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetContentSecurityPolicyStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetContentSecurityPolicyMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetContentSecurityPolicyStub.returns(stub());
            middleware = new ProxiedHelmetContentSecurityPolicyMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.use.bind(middleware)).to.throw(Error);
        });
    });
});
