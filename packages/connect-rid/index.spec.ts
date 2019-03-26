import { expect } from 'chai';
import * as proxyquire from 'proxyquire';
import { stub } from 'sinon';

import { ConnectRidMiddleware } from './index';

describe('ConnectRidMiddleware', () => {
    const mockRequest = {};
    const mockResponse = {};
    let middleware: ConnectRidMiddleware;
    let ProxiedConnectRidMiddleware;
    let ridStub: sinon.SinonStub;
    beforeEach(() => {
        ridStub = stub();
        ProxiedConnectRidMiddleware = proxyquire('./index', {
            'connect-rid': ridStub,
        }).ConnectRidMiddleware;
    });

    describe('properly configured', () => {
        beforeEach(() => {
            ridStub.returns(stub());
            ProxiedConnectRidMiddleware.configure({});
            middleware = new ProxiedConnectRidMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called use', () => {
            expect(middleware.use).to.be.instanceof(Function);
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(ridStub.called).to.be.true;
        });
        afterEach(() => {
            ProxiedConnectRidMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            ridStub.returns(stub());
            middleware = new ProxiedConnectRidMiddleware();
        });

        it('should call middleware from calling use', () => {
            middleware.use(mockRequest, mockResponse, stub());
            expect(ridStub.called).to.be.true;
        });
    });
});
