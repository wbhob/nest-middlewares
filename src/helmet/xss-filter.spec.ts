import { HelmetXssFilterMiddleware } from './xss-filter';
import { expect } from 'chai';

describe('HelmetXssFilterMiddleware', () => {
    let middleware: HelmetXssFilterMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            HelmetXssFilterMiddleware.configure({
                setOnOldIE: true,
            });
            middleware = new HelmetXssFilterMiddleware();
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
            HelmetXssFilterMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetXssFilterMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
