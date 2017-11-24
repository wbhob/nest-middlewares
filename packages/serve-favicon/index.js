"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const serveFavicon = require("serve-favicon");
const common_1 = require("@nestjs/common");
let ServeFaviconMiddleware = ServeFaviconMiddleware_1 = class ServeFaviconMiddleware {
    static configure(path, opts) {
        this.path = path;
        this.options = opts;
    }
    resolve(...args) {
        if (ServeFaviconMiddleware_1.path) {
            return serveFavicon(ServeFaviconMiddleware_1.path, ServeFaviconMiddleware_1.options);
        }
        else {
            throw new Error('ServeFaviconMiddleware requires a path in configure.');
        }
    }
};
ServeFaviconMiddleware = ServeFaviconMiddleware_1 = __decorate([
    common_1.Middleware()
], ServeFaviconMiddleware);
exports.ServeFaviconMiddleware = ServeFaviconMiddleware;
var ServeFaviconMiddleware_1;
//# sourceMappingURL=index.js.map