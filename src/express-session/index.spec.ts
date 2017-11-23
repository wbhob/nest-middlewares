import { ExpressSessionMiddleware } from './index';
import { expect } from 'chai';

describe('ExpressSessionMiddleware', () => {
    let middleware: ExpressSessionMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ExpressSessionMiddleware.configure({
                secret: 'hi',
            });
            middleware = new ExpressSessionMiddleware();
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
            ExpressSessionMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ExpressSessionMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
