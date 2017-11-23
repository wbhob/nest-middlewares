import { HelmetXssFilterMiddleware } from './xss-filter';
import { expect } from 'chai';

describe('HelmetXssFilterMiddleware', () => {
    let middleware: HelmetXssFilterMiddleware;

    beforeEach(() => {
        middleware = new HelmetXssFilterMiddleware();
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
