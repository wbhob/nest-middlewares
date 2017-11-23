import { HelmetHidePoweredByMiddleware } from './hide-powered-by';
import { expect } from 'chai';

describe('HelmetHidePoweredByMiddleware', () => {
    let middleware: HelmetHidePoweredByMiddleware;

    beforeEach(() => {
        middleware = new HelmetHidePoweredByMiddleware();
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
