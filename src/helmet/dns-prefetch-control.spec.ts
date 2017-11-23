import { HelmetDnsPrefetchControlMiddleware } from './dns-prefetch-control';
import { expect } from 'chai';

describe('HelmetDnsPrefetchControlMiddleware', () => {
    let middleware: HelmetDnsPrefetchControlMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            HelmetDnsPrefetchControlMiddleware.configure({
                allow: true,
            });
            middleware = new HelmetDnsPrefetchControlMiddleware();
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
            HelmetDnsPrefetchControlMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetDnsPrefetchControlMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
