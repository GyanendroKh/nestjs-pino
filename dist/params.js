"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARAMS_PROVIDER_TOKEN = exports.isPassedLogger = void 0;
function isPassedLogger(pinoHttpProp) {
    return !!pinoHttpProp && 'logger' in pinoHttpProp;
}
exports.isPassedLogger = isPassedLogger;
exports.PARAMS_PROVIDER_TOKEN = 'pino-params';
//# sourceMappingURL=params.js.map