import { ResponseTimeMiddleware } from './index';
import { expect } from 'chai';

describe('ResponseTimeMiddleware', () => {
    let middleware: ResponseTimeMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            ResponseTimeMiddleware.configure({});
            middleware = new ResponseTimeMiddleware();
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
            ResponseTimeMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        middleware = new ResponseTimeMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
