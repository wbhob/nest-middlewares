import { HelmetMiddleware } from './index';
import { expect } from 'chai';

describe('HelmetMiddleware', () => {
    let middleware: HelmetMiddleware;

    beforeEach(() => {
        middleware = new HelmetMiddleware();
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
