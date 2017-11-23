import { ConnectTimeoutMiddleware } from './index';
import { expect } from 'chai';

describe('ConnectTimeoutMiddleware', () => {
    let middleware: ConnectTimeoutMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ConnectTimeoutMiddleware.configure('5s', {});
            middleware = new ConnectTimeoutMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called resolve', () => {
            expect(middleware.resolve).to.be.instanceof(Function);
        });

        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
        afterEach(() => {
            ConnectTimeoutMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ConnectTimeoutMiddleware();
        it('should throw if improperly configured', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });
});
