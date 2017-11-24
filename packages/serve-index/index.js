"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const serveIndex = require("serve-index");
const common_1 = require("@nestjs/common");
let ServeIndexMiddleware = ServeIndexMiddleware_1 = class ServeIndexMiddleware {
    static configure(path, opts) {
        this.path = path;
        this.options = opts;
    }
    resolve(...args) {
        if (ServeIndexMiddleware_1.options) {
            return serveIndex(ServeIndexMiddleware_1.path, ServeIndexMiddleware_1.options);
        }
        else {
            throw new Error('ServeIndexMiddleware requires a path in configure.');
        }
    }
};
ServeIndexMiddleware = ServeIndexMiddleware_1 = __decorate([
    common_1.Middleware()
], ServeIndexMiddleware);
exports.ServeIndexMiddleware = ServeIndexMiddleware;
var ServeIndexMiddleware_1;
//# sourceMappingURL=index.js.map