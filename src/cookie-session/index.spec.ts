import { CookieSessionMiddleware } from './index';
import { expect } from 'chai';

describe('CookieSessionMiddleware', () => {
    let middleware: CookieSessionMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            CookieSessionMiddleware.configure({
                keys: ['hello'],
                name: 'CookieSession',
            });
            middleware = new CookieSessionMiddleware();
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
    });

    describe('not configured', () => {

        beforeEach(() => {
            middleware = new CookieSessionMiddleware();
        });

        it('should should return a middleware from calling resolve', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });

    afterEach(() => {
        CookieSessionMiddleware.configure(undefined);
    });
});

