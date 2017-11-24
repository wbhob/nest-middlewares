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
let HelmetMiddleware = HelmetMiddleware_1 = class HelmetMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    resolve(...args) {
        if (HelmetMiddleware_1.options) {
            return helmet(HelmetMiddleware_1.options);
        }
        else {
            return helmet();
        }
    }
};
HelmetMiddleware = HelmetMiddleware_1 = __decorate([
    common_1.Middleware()
], HelmetMiddleware);
exports.HelmetMiddleware = HelmetMiddleware;
var content_security_policy_1 = require("./content-security-policy");
exports.HelmetContentSecurityPolicyMiddleware = content_security_policy_1.HelmetContentSecurityPolicyMiddleware;
var dns_prefetch_control_1 = require("./dns-prefetch-control");
exports.HelmetDnsPrefetchControlMiddleware = dns_prefetch_control_1.HelmetDnsPrefetchControlMiddleware;
var expect_ct_1 = require("./expect-ct");
exports.HelmetExpectCtMiddleware = expect_ct_1.HelmetExpectCtMiddleware;
var frameguard_1 = require("./frameguard");
exports.HelmetFrameguardMiddleware = frameguard_1.HelmetFrameguardMiddleware;
var hide_powered_by_1 = require("./hide-powered-by");
exports.HelmetHidePoweredByMiddleware = hide_powered_by_1.HelmetHidePoweredByMiddleware;
var hpkp_1 = require("./hpkp");
exports.HelmetHpkpMiddleware = hpkp_1.HelmetHpkpMiddleware;
var hsts_1 = require("./hsts");
exports.HelmetHstsMiddleware = hsts_1.HelmetHstsMiddleware;
var ie_no_open_1 = require("./ie-no-open");
exports.HelmetIeNoOpenMiddleware = ie_no_open_1.HelmetIeNoOpenMiddleware;
var no_cache_1 = require("./no-cache");
exports.HelmetNoCacheMiddleware = no_cache_1.HelmetNoCacheMiddleware;
var no_sniff_1 = require("./no-sniff");
exports.HelmetNoSniffMiddleware = no_sniff_1.HelmetNoSniffMiddleware;
var referrer_policy_1 = require("./referrer-policy");
exports.HelmetReferrerPolicyMiddleware = referrer_policy_1.HelmetReferrerPolicyMiddleware;
var xss_filter_1 = require("./xss-filter");
exports.HelmetXssFilterMiddleware = xss_filter_1.HelmetXssFilterMiddleware;
var HelmetMiddleware_1;
//# sourceMappingURL=index.js.map