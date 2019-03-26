import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetHpkpMiddleware } from './hpkp';

describe('HelmetHpkpMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetHpkpMiddleware;
    let ProxiedHelmetHpkpMiddleware;
    let helmetHpkpStub: sinon.SinonStub;
    beforeEach(() => {
        helmetHpkpStub = stub();
        ProxiedHelmetHpkpMiddleware = proxyquire('./hpkp', {
            helmet: { hpkp: helmetHpkpStub },
        }).HelmetHpkpMiddleware;
    });
    describe('properly configured', () => {
        beforeEach(() => {
            helmetHpkpStub.returns(stub());
            ProxiedHelmetHpkpMiddleware.configure({
                maxAge: 14353,
                sha256s: ['hello', 'goodbye'],
            });
            middleware = new ProxiedHelmetHpkpMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetHpkpStub.called).to.be.true;
        });

        afterEach(() => {
            ProxiedHelmetHpkpMiddleware.configure(undefined);
        });
    });

    describe('improperly configured', () => {
        beforeEach(() => {
            helmetHpkpStub.returns(stub());
            middleware = new ProxiedHelmetHpkpMiddleware();
        });

        it('should throw if improperly configured', () => {
            expect(middleware.use.bind(middleware)).to.be.throw(Error);
        });
    });
});
