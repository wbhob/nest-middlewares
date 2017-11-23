import { CookieParserMiddleware } from './index';
import { expect } from 'chai';

describe('CookieParserMiddleware', () => {
    let middleware: CookieParserMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            CookieParserMiddleware.configure('hello', {
                decode: (val: string) => {
                    return val;
                },
            });
            middleware = new CookieParserMiddleware();
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
            CookieParserMiddleware.configure(undefined);
        });
    });

    describe('properly configured with only secret', () => {
        beforeEach(() => {
            CookieParserMiddleware.configure('hello');
            middleware = new CookieParserMiddleware();
        });

        it('should should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });

    describe('not configured', () => {
        middleware = new CookieParserMiddleware();
        it('should should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });

    afterEach(() => {
        CookieParserMiddleware.configure(undefined);
    });
});
