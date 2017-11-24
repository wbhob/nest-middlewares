"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookieSession = require("cookie-session");
const common_1 = require("@nestjs/common");
let CookieSessionMiddleware = CookieSessionMiddleware_1 = class CookieSessionMiddleware {
    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    static configure(opts) {
        this.options = opts;
    }
    resolve(...args) {
        if (CookieSessionMiddleware_1.options && CookieSessionMiddleware_1.options.keys) {
            return cookieSession(CookieSessionMiddleware_1.options);
        }
        else {
            throw new Error('You must pass in `keys` as an option to CookieSessionMiddleware');
        }
    }
};
CookieSessionMiddleware = CookieSessionMiddleware_1 = __decorate([
    common_1.Middleware()
], CookieSessionMiddleware);
exports.CookieSessionMiddleware = CookieSessionMiddleware;
var CookieSessionMiddleware_1;
//# sourceMappingURL=index.js.map