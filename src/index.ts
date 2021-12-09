#!/usr/bin/env node
import {Command} from "commander";
import CreateFiles from "./createFiles";
import RemoveFiles from "./removeFiles";

const program = new Command();

program
    .option("-m, --make", "create git diff")
    .option("-r, --remove", "delete diff files")
    .option("-c,--commit [value]", "target commit")
    .option("-t, --target [value]", "target branch")
program.parse(process.argv);

const opts = program.opts();

if(opts.make) {
    new CreateFiles();
} else if (opts.remove) {
    new RemoveFiles();
}

