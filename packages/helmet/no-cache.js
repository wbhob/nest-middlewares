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
let HelmetNoCacheMiddleware = class HelmetNoCacheMiddleware {
    resolve(...args) {
        return helmet.noCache();
    }
};
HelmetNoCacheMiddleware = __decorate([
    common_1.Middleware()
], HelmetNoCacheMiddleware);
exports.HelmetNoCacheMiddleware = HelmetNoCacheMiddleware;
//# sourceMappingURL=no-cache.js.map