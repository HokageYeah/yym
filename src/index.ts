#!/usr/bin/env node
import { Command, program } from "commander";
import chalk from "chalk";
import { lsCode } from "./code/ls";
const a = require("./data/aaa.json");
import { commandFn } from "./utiles/command";
import { currentCode } from "./code/current";
import { pingCode } from "./code/ping";
import { useMirror } from "./code/useMirror";

// npm ---- https://registry.npmjs.org/
// cnpm --- http://r.cnpmjs.org/
// taobao - https://registry.npm.taobao.org/
// nj ----- https://registry.nodejitsu.com/
// rednpm - http://registry.mirror.cqupt.edu.cn/
// skimdb - https://skimdb.npmjs.com/registry/

program.command("install").action(async (version) => {
  const a: string = "1";
  const url = import.meta.url;
  //   console.log("__dirname", __dirname);
  console.log("url", url);
  // console.log(url);
  console.log("到合适的黄金时代手机壳", a);
});

console.log(process.argv);
console.log(chalk.red("红色文字"));

// 查看所有镜像
commandFn("ls", "查看所有镜像", () => {
  lsCode();
});

// 查看当前源
commandFn("current", "查看当前源", () => {
  currentCode();
});

// 测试镜像地址速度
commandFn("ping", "测试镜像地址速度", () => {
  pingCode();
});

// 选择使用镜像
commandFn("use", "请选择镜像", () => {
  useMirror();
});

// 解析命令行参数
program.parse(process.argv);
