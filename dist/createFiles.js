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
const util_1 = __importDefault(require("util"));
const decompress_1 = __importDefault(require("decompress"));
const decompress_tarxz_1 = __importDefault(require("decompress-tarxz"));
const exec = util_1.default.promisify(child_process_1.exec);
const CreateFiles = (_commit, _branch) => __awaiter(void 0, void 0, void 0, function* () {
    const commit = _commit;
    const branch = _branch;
    const outPutDir = "./archive";
    const outPutFile = `${outPutDir}/diff.tar`;
    console.log(outPutFile);
    yield exec(`git archive --format=tar \`git diff --name-only ${branch} ${commit} --diff-filter=ACMRD\` -o ${outPutFile}`);
    console.log("解凍");
    (0, decompress_1.default)(outPutFile, outPutDir, {
        plugins: [
            decompress_tarxz_1.default
        ]
    }).then(r => { });
});
exports.default = CreateFiles;
