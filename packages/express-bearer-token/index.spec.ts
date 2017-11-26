import { ExpressBearerTokenMiddleware } from './index';
import { expect } from 'chai';

describe('ExpressBearerTokenMiddleware', () => {
    let middleware: ExpressBearerTokenMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ExpressBearerTokenMiddleware.configure({});
            middleware = new ExpressBearerTokenMiddleware();
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
            ExpressBearerTokenMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ExpressBearerTokenMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
