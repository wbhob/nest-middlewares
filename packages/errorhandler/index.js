"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler = require("errorhandler");
const common_1 = require("@nestjs/common");
let ErrorHandlerMiddleware = ErrorHandlerMiddleware_1 = class ErrorHandlerMiddleware {
    static configure(opts) {
        this.options = opts;
    }
    resolve(...args) {
        if (ErrorHandlerMiddleware_1.options) {
            return errorhandler(ErrorHandlerMiddleware_1.options);
        }
        else {
            return errorhandler();
        }
    }
};
ErrorHandlerMiddleware = ErrorHandlerMiddleware_1 = __decorate([
    common_1.Middleware()
], ErrorHandlerMiddleware);
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
var ErrorHandlerMiddleware_1;
//# sourceMappingURL=index.js.map