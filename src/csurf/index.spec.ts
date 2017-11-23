import { CsurfMiddleware } from './index';
import { expect } from 'chai';

describe('CsurfMiddleware', () => {
    let middleware: CsurfMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            CsurfMiddleware.configure({
                cookie: true,
            });
            middleware = new CsurfMiddleware();
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
            CsurfMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new CsurfMiddleware();
        it('should should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
