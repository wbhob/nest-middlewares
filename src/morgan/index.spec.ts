import { MorganMiddleware } from './index';
import { expect } from 'chai';

describe('MorganMiddleware', () => {
    let middleware: MorganMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            MorganMiddleware.configure('tiny');
            middleware = new MorganMiddleware();
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
    });

    describe('not configured', () => {
        middleware = new MorganMiddleware();
        it('should should throw when not passed a format', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });
    afterEach(() => {
        MorganMiddleware.configure(undefined);
    });

    describe('token generation', () => {
        it('should create a token when calling token()', () => {
            MorganMiddleware.configure(':type');
            MorganMiddleware.token('type', () => {
                return 'hello';
            });
            middleware = new MorganMiddleware();
            expect(middleware.resolve.bind(middleware)).to.not.throw();
        });
    });
});
