import { ConnectRidMiddleware } from './index';
import { expect } from 'chai';

describe('ConnectRidMiddleware', () => {
    let middleware: ConnectRidMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ConnectRidMiddleware.configure({});
            middleware = new ConnectRidMiddleware();
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
            ConnectRidMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ConnectRidMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
