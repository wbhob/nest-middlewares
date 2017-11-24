import { HelmetIeNoOpenMiddleware } from './ie-no-open';
import { expect } from 'chai';

describe('HelmetIeNoOpenMiddleware', () => {
    let middleware: HelmetIeNoOpenMiddleware;

    beforeEach(() => {
        middleware = new HelmetIeNoOpenMiddleware();
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
