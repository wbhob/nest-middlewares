import { HelmetContentSecurityPolicyMiddleware } from './content-security-policy';
import { expect } from 'chai';

describe('HelmetContentSecurityPolicyMiddleware', () => {
    let middleware: HelmetContentSecurityPolicyMiddleware;

    describe('middleware properly configured', () => {
        beforeEach(() => {
            HelmetContentSecurityPolicyMiddleware.configure({
                directives: {
                    defaultSrc: ['"self"'],
                },
            });
            middleware = new HelmetContentSecurityPolicyMiddleware();
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
            HelmetContentSecurityPolicyMiddleware.configure(undefined);
        });
    });

    describe('not configured', () => {
        beforeEach(() => {
            middleware = new HelmetContentSecurityPolicyMiddleware();
        });

        it('should throw an error for not being configured', () => {
            expect(middleware.resolve.bind(middleware)).to.throw(Error);
        });
    });
});
