import { MethodOverrideMiddleware } from './index';
import { expect } from 'chai';

describe('MethodOverrideMiddleware', () => {
    let middleware: MethodOverrideMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            MethodOverrideMiddleware.configure('X-HTTP-Method-Override', {
                methods: ['POST'],
            });
            middleware = new MethodOverrideMiddleware();
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
    });

    describe('not configured', () => {
        middleware = new MethodOverrideMiddleware();
        it('should return a middleware from calling resolve', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
    afterEach(() => {
        MethodOverrideMiddleware.configure(undefined);
    });
});
