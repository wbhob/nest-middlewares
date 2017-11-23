import { HelmetExpectCtMiddleware } from './expect-ct';
import { expect } from 'chai';

describe('HelmetExpectCtMiddleware', () => {
    let middleware: HelmetExpectCtMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            HelmetExpectCtMiddleware.configure({
                maxAge: 13432,
            });
            middleware = new HelmetExpectCtMiddleware();
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
            HelmetExpectCtMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetExpectCtMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
