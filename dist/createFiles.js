"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const util_2 = __importDefault(require("./util"));
const exec = util_1.default.promisify(child_process_1.exec);
const CreateFiles = (_to, _from) => __awaiter(void 0, void 0, void 0, function* () {
    const to = _to;
    const from = _from;
    const outPutDir = "./gitDiffTemp";
    const outPutFile = `${outPutDir}/diff.tar`;
    if (!fs_1.default.existsSync(outPutDir)) {
        util_2.default.log("---------Create Temp Directory---------");
        yield exec("mkdir ./gitDiffTemp");
    }
    util_2.default.log("---------Get Git Archive Start ---------");
    yield exec(`git archive ${to} --format=tar \`git diff --name-only ${to} ${from} --diff-filter=ACMR\` -o ${outPutFile}`);
    yield exec(`tar -zxvf ${outPutFile} -C ${outPutDir}`);
    fs_1.default.rm(outPutFile, (error) => {
        if (error) {
            util_2.default.log("---------Get Git Archive Error---------", "\u001b[31m");
            console.log(error);
        }
        else {
            util_2.default.log("---------Getting Git Archive Done---------");
        }
    });
});
exports.default = CreateFiles;
