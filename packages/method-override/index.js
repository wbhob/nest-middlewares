"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const methodOverride = require("method-override");
const common_1 = require("@nestjs/common");
let MethodOverrideMiddleware = MethodOverrideMiddleware_1 = class MethodOverrideMiddleware {
    static configure(getter, opts) {
        this.getter = getter;
        this.options = opts;
    }
    resolve(...args) {
        if (MethodOverrideMiddleware_1.options) {
            return methodOverride(MethodOverrideMiddleware_1.getter, MethodOverrideMiddleware_1.options);
        }
        else {
            return methodOverride();
        }
    }
};
MethodOverrideMiddleware = MethodOverrideMiddleware_1 = __decorate([
    common_1.Middleware()
], MethodOverrideMiddleware);
exports.MethodOverrideMiddleware = MethodOverrideMiddleware;
var MethodOverrideMiddleware_1;
//# sourceMappingURL=index.js.map