"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectTimeout = require("connect-timeout");
const common_1 = require("@nestjs/common");
let ConnectTimeoutMiddleware = ConnectTimeoutMiddleware_1 = class ConnectTimeoutMiddleware {
    static configure(timeout, opts) {
        this.timeout = timeout;
        this.options = opts;
    }
    resolve(...args) {
        if (ConnectTimeoutMiddleware_1.options) {
            return connectTimeout(ConnectTimeoutMiddleware_1.timeout, ConnectTimeoutMiddleware_1.options);
        }
        else {
            throw new Error('ConnectTimeoutMiddleware requires a timeout string in configure.');
        }
    }
};
ConnectTimeoutMiddleware = ConnectTimeoutMiddleware_1 = __decorate([
    common_1.Middleware()
], ConnectTimeoutMiddleware);
exports.ConnectTimeoutMiddleware = ConnectTimeoutMiddleware;
var ConnectTimeoutMiddleware_1;
//# sourceMappingURL=index.js.map