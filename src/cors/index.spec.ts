import { CorsMiddleware } from './index';
import { expect } from 'chai';

describe('CorsMiddleware', () => {
    let middleware: CorsMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            CorsMiddleware.configure({
                maxAge: 4354,
            });
            middleware = new CorsMiddleware();
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
            CorsMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new CorsMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
