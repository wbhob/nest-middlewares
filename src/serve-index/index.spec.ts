import { ServeIndexMiddleware } from './index';
import { expect } from 'chai';

describe('ServeIndexMiddleware', () => {
    let middleware: ServeIndexMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ServeIndexMiddleware.configure('./lerna.json', {});
            middleware = new ServeIndexMiddleware();
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
            ServeIndexMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ServeIndexMiddleware();
        it('should should return a middleware from calling resolve', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });
});
