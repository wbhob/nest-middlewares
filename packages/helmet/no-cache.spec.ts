import { HelmetNoCacheMiddleware } from './no-cache';
import { expect } from 'chai';

describe('HelmetNoCacheMiddleware', () => {
    let middleware: HelmetNoCacheMiddleware;

    beforeEach(() => {
        middleware = new HelmetNoCacheMiddleware();
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
