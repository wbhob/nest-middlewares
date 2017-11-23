import { HelmetDnsPrefetchControlMiddleware } from './dns-prefetch-control';
import { expect } from 'chai';

describe('HelmetDnsPrefetchControlMiddleware', () => {
    let middleware: HelmetDnsPrefetchControlMiddleware;

    beforeEach(() => {
        middleware = new HelmetDnsPrefetchControlMiddleware();
    });

    it('should be defined', () => {
        expect(middleware).to.not.be.undefined;
    });

    it('should have a function called resolve', () => {
        expect(middleware.resolve).to.be.instanceof(Function);
    });

    it('should should return a middleware from calling resolve', () => {
        console.log(middleware.resolve())
        expect(middleware.resolve()).to.be.an.instanceof(Function);
    });
});
