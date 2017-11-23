import { HelmetNoSniffMiddleware } from './no-sniff';
import { expect } from 'chai';

describe('HelmetNoSniffMiddleware', () => {
    let middleware: HelmetNoSniffMiddleware;

    beforeEach(() => {
        middleware = new HelmetNoSniffMiddleware();
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
