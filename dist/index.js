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
    .option("-r, --remove", "delete diff files", false)
    .option("-f, --from <value>", "before commit branch", "origin/master")
    .option("-t,--to <value>", "after commit branch", "HEAD")
    .option("--filter <value>", "set `diff-filter`", "ACMR");
program.parse(process.argv);
const opts = program.opts();
if (opts.remove) {
    (0, removeFiles_1.default)().then(r => { });
}
else {
    (0, createFiles_1.default)(opts.to, opts.from, opts.filter).then(r => { });
}
