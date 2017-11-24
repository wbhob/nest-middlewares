import { HelmetHstsMiddleware } from './hsts';
import { expect } from 'chai';

describe('HelmetHstsMiddleware', () => {
    let middleware: HelmetHstsMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            HelmetHstsMiddleware.configure({
                maxAge: 3423,
            });
            middleware = new HelmetHstsMiddleware();
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
            HelmetHstsMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetHstsMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
