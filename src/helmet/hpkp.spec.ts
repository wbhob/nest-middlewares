import { HelmetHpkpMiddleware } from './hpkp';
import { expect } from 'chai';

describe('HelmetHpkpMiddleware', () => {
    let middleware: HelmetHpkpMiddleware;
    describe('properly configured', () => {
        beforeEach(() => {
            HelmetHpkpMiddleware.configure({
                maxAge: 14353,
                sha256s: ['hello', 'goodbye'],
            });
            middleware = new HelmetHpkpMiddleware();
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
            HelmetHpkpMiddleware.configure(undefined);
        });
    });

    describe('improperly configured', () => {
        it('should throw if improperly configured', () => {
            expect(middleware.resolve.bind(middleware)).to.be.throw(Error);
        });
    });
});
