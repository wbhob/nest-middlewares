import { CompressionMiddleware } from './index';
import { expect } from 'chai';

describe('CompressionMiddleware', () => {
    let middleware: CompressionMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            CompressionMiddleware.configure({
                windowBits: 8,
            });
            middleware = new CompressionMiddleware();
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
            CompressionMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new CompressionMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
