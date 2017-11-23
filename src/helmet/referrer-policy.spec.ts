import { HelmetReferrerPolicyMiddleware } from './referrer-policy';
import { expect } from 'chai';

describe('HelmetReferrerPolicyMiddleware', () => {
    let middleware: HelmetReferrerPolicyMiddleware;

    describe('middleware configured', () => {
        beforeEach(() => {
            HelmetReferrerPolicyMiddleware.configure({
                policy: 'no-referrer',
            });
            middleware = new HelmetReferrerPolicyMiddleware();
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
            HelmetReferrerPolicyMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetReferrerPolicyMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve()).to.be.an.instanceof(Function);
        });
    });
});
