import { VhostMiddleware } from './index';
import { expect } from 'chai';

describe('VhostMiddleware', () => {
    let middleware: VhostMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            VhostMiddleware.configure('hello.com', () => {
                return;
            });
            middleware = new VhostMiddleware();
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
        middleware = new VhostMiddleware();
        it('should throw if a path and handler are not specified', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });

    afterEach(() => {
        VhostMiddleware.configure(undefined, undefined);
    });
});
