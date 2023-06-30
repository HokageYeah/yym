#!/usr/bin/env node
import { program } from "commander";
import chalk from "chalk";

program.command("install").action(async (version) => {
  const a: string = "1";
  const url = import.meta.url;
//   console.log("__dirname", __dirname);
  console.log("url", url);
  // console.log(url);
  console.log("到合适的黄金时代手机壳", a);
});

console.log(process.argv);
console.log(chalk.red('红色文字'));
// 解析命令行参数 window
program.parse(process.argv);
