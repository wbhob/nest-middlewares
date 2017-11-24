"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseTime = require("response-time");
const common_1 = require("@nestjs/common");
let ResponseTimeMiddleware = ResponseTimeMiddleware_1 = class ResponseTimeMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    resolve(...args) {
        if (ResponseTimeMiddleware_1.options) {
            return responseTime(ResponseTimeMiddleware_1.options);
        }
        else {
            return responseTime();
        }
    }
};
ResponseTimeMiddleware = ResponseTimeMiddleware_1 = __decorate([
    common_1.Middleware()
], ResponseTimeMiddleware);
exports.ResponseTimeMiddleware = ResponseTimeMiddleware;
var ResponseTimeMiddleware_1;
//# sourceMappingURL=index.js.map