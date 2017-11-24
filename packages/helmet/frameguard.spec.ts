import { HelmetFrameguardMiddleware } from './frameguard';
import { expect } from 'chai';

describe('HelmetFrameguardMiddleware', () => {
    let middleware: HelmetFrameguardMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            HelmetFrameguardMiddleware.configure({
                action: 'SAMEORIGIN',
            });
            middleware = new HelmetFrameguardMiddleware();
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
            HelmetFrameguardMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetFrameguardMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
