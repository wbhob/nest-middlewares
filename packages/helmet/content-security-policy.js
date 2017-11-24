"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet = require("helmet");
const common_1 = require("@nestjs/common");
let HelmetContentSecurityPolicyMiddleware = HelmetContentSecurityPolicyMiddleware_1 = class HelmetContentSecurityPolicyMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    resolve(...args) {
        if (HelmetContentSecurityPolicyMiddleware_1.options) {
            return helmet.contentSecurityPolicy(HelmetContentSecurityPolicyMiddleware_1.options);
        }
        else {
            throw new Error('HelmetContentSecurityPolicyMiddleware requires you'
                + ' to call `configure` before injection to set CSP options.');
        }
    }
};
HelmetContentSecurityPolicyMiddleware = HelmetContentSecurityPolicyMiddleware_1 = __decorate([
    common_1.Middleware()
], HelmetContentSecurityPolicyMiddleware);
exports.HelmetContentSecurityPolicyMiddleware = HelmetContentSecurityPolicyMiddleware;
var HelmetContentSecurityPolicyMiddleware_1;
//# sourceMappingURL=content-security-policy.js.map