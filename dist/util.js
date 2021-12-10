"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utility {
    static log(arg, color = "\u001b[34m") {
        console.log(`${color}${arg}\u001b[0m`);
    }
}
exports.default = Utility;
