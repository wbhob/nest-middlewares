import { ServeFaviconMiddleware } from './index';
import { expect } from 'chai';

describe('ServeFaviconMiddleware', () => {
    let middleware: ServeFaviconMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ServeFaviconMiddleware.configure('./lerna.json', {});
            middleware = new ServeFaviconMiddleware();
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
            ServeFaviconMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ServeFaviconMiddleware();
        it('should throw for being improperly configured', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });
});
