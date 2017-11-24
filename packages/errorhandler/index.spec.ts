import { ErrorHandlerMiddleware } from './index';
import { expect } from 'chai';

describe('ErrorHandlerMiddleware', () => {
    let middleware: ErrorHandlerMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ErrorHandlerMiddleware.configure({
                log: true,
            });
            middleware = new ErrorHandlerMiddleware();
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
            ErrorHandlerMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ErrorHandlerMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
