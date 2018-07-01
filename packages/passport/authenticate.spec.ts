import { PassportAuthenticateMiddleware } from './authenticate';
import { expect } from 'chai';

describe('PassportAuthenticateMiddleware', () => {
    let middleware: PassportAuthenticateMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            middleware = new PassportAuthenticateMiddleware();
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
            PassportAuthenticateMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new PassportAuthenticateMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve('bearer', { session: false })).to.be.an.instanceof(Function);
        });
    });
});
