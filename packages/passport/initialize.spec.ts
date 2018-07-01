import { PassportInitializeMiddleware } from './initialize';
import { expect } from 'chai';

describe('PassportInitializeMiddleware', () => {
    let middleware: PassportInitializeMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            middleware = new PassportInitializeMiddleware();
        });

        it('should be defined', () => {
            expect(middleware).to.not.be.undefined;
        });

        it('should have a function called resolve', () => {
            expect(middleware.resolve).to.be.instanceof(Function);
        });

        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve('bearer', { session: false })).to.be.an.instanceof(Function);
        });
        afterEach(() => {
            PassportInitializeMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new PassportInitializeMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve('bearer', { session: false })).to.be.an.instanceof(Function);
        });
    });
});
