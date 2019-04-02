import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';
import { HelmetExpectCtMiddleware } from './expect-ct';

describe('HelmetExpectCtMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: HelmetExpectCtMiddleware;
    let ProxiedHelmetExpectCtMiddleware;
    let helmetExpectCtStub: sinon.SinonStub;
    beforeEach(() => {
        helmetExpectCtStub = stub();
        ProxiedHelmetExpectCtMiddleware = proxyquire('./expect-ct', {
            helmet: { expectCt : helmetExpectCtStub },
        }).HelmetExpectCtMiddleware;
    });
    describe('middleware configured', () => {
        beforeEach(() => {
            helmetExpectCtStub.returns(stub());
            ProxiedHelmetExpectCtMiddleware.configure({
                maxAge: 13432,
            });
            middleware = new ProxiedHelmetExpectCtMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetExpectCtStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedHelmetExpectCtMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            helmetExpectCtStub.returns(stub());
            middleware = new ProxiedHelmetExpectCtMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(helmetExpectCtStub.called).to.be.true;
        });
    });
});
