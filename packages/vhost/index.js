"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vhost = require("vhost");
const common_1 = require("@nestjs/common");
let VhostMiddleware = VhostMiddleware_1 = class VhostMiddleware {
    static configure(path, opts) {
        this.path = path;
        this.handler = opts;
    }
    resolve(...args) {
        if (VhostMiddleware_1.path && VhostMiddleware_1.handler) {
            return vhost(VhostMiddleware_1.path, VhostMiddleware_1.handler);
        }
        else {
            throw new Error('ServeStaticMiddleware requires a path and handler in configure.');
        }
    }
};
VhostMiddleware = VhostMiddleware_1 = __decorate([
    common_1.Middleware()
], VhostMiddleware);
exports.VhostMiddleware = VhostMiddleware;
var VhostMiddleware_1;
//# sourceMappingURL=index.js.map