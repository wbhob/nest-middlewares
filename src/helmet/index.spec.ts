import { HelmetMiddleware } from './index';
import { expect } from 'chai';

describe('HelmetMiddleware', () => {
    let middleware: HelmetMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            HelmetMiddleware.configure({
                xssFilter: true,
            });
            middleware = new HelmetMiddleware();
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
            HelmetMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
