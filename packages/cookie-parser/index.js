"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
let CookieParserMiddleware = CookieParserMiddleware_1 = class CookieParserMiddleware {
    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    static configure(secret, opts) {
        this.secret = secret;
        if (opts) {
            this.options = opts;
        }
    }
    resolve(...args) {
        if (CookieParserMiddleware_1.secret) {
            return cookieParser(CookieParserMiddleware_1.secret, CookieParserMiddleware_1.options);
        }
        else {
            return cookieParser();
        }
    }
};
CookieParserMiddleware = CookieParserMiddleware_1 = __decorate([
    common_1.Middleware()
], CookieParserMiddleware);
exports.CookieParserMiddleware = CookieParserMiddleware;
var CookieParserMiddleware_1;
//# sourceMappingURL=index.js.map