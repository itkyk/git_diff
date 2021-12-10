#!/usr/bin/env node
import {Command} from "commander";
import CreateFiles from "./createFiles";
import RemoveFiles from "./removeFiles";

const program = new Command();

program
    .option("-m, --make", "create git diff")
    .option("-r, --remove", "delete diff files")
    .option("-t,--to [value]", "after commit branch")
    .option("-f, --from [value]", "before commit branch", "origin/master")
program.parse(process.argv);

const opts = program.opts();

if(opts.make) {
    CreateFiles(opts.commit, opts.target).then(r => {})
} else if (opts.remove) {
    RemoveFiles().then(r => {});
}

