import { PassportSessionMiddleware } from './session';
import { expect } from 'chai';

describe('PassportSessionMiddleware', () => {
    let middleware: PassportSessionMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            middleware = new PassportSessionMiddleware();
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
            PassportSessionMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new PassportSessionMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve('bearer', { session: false })).to.be.an.instanceof(Function);
        });
    });
});
