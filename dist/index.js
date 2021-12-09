#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const createFiles_1 = __importDefault(require("./createFiles"));
const removeFiles_1 = __importDefault(require("./removeFiles"));
const program = new commander_1.Command();
program
    .option("-m, --make", "create git diff")
    .option("-r, --remove", "delete diff files")
    .option("-c,--commit [value]", "target commit")
    .option("-t, --target [value]", "target branch");
program.parse(process.argv);
const opts = program.opts();
if (opts.make) {
    (0, createFiles_1.default)(opts.commit, opts.target).then(r => { });
}
else if (opts.remove) {
    (0, removeFiles_1.default)();
}
