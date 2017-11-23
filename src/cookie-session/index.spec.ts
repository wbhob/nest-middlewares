import { MiddlewareMiddleware } from './index';
import { expect } from 'chai';

describe('MiddlewareMiddleware', () => {
    let middleware: MiddlewareMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            MiddlewareMiddleware.configure({});
            middleware = new MiddlewareMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called resolve', () => {
            expect(middleware.resolve).to.be.instanceof(Function);
        });

        it('should should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
        afterEach(() => {
            MiddlewareMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new MiddlewareMiddleware();
        it('should should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
