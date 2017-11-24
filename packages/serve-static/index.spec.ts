import { ServeStaticMiddleware } from './index';
import { expect } from 'chai';

describe('ServeStaticMiddleware', () => {
    let middleware: ServeStaticMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ServeStaticMiddleware.configure('./lerna.json', {});
            middleware = new ServeStaticMiddleware();
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
            ServeStaticMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ServeStaticMiddleware();
        it('should throw if a path is not specified', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });
});
