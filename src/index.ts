#!/usr/bin/env node
import {Command} from "commander";
import CreateFiles from "./createFiles";
import RemoveFiles from "./removeFiles";

const program = new Command();

interface optsInterface {
  remove: boolean;
  from: string;
  to: string;
  filter: string;
}

program
    .option("-r, --remove", "delete diff files", false)
    .option("-f, --from <value>", "before commit branch", "origin/master")
    .option("-t,--to <value>", "after commit branch", "HEAD")
    .option("--filter <value>", "set `diff-filter`", "ACMR")
program.parse(process.argv);

const opts = program.opts() as optsInterface;


if (opts.remove) {
  RemoveFiles().then(r => {});
} else {
  CreateFiles(opts.to, opts.from, opts.filter).then(r => {})
}