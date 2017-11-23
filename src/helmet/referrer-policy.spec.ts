import { HelmetReferrerPolicyMiddleware } from './referrer-policy';
import { expect } from 'chai';

describe('HelmetReferrerPolicyMiddleware', () => {
    let middleware: HelmetReferrerPolicyMiddleware;

    beforeEach(() => {
        middleware = new HelmetReferrerPolicyMiddleware();
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
