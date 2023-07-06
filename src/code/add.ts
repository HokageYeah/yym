import inquirer from "inquirer";
import { mirrorAddressObjKeys, setFilePath } from "@/utiles";
import { mirrorAddressObj } from "@/utiles/mirrorAddress";
import fs from "node:fs";
import chalk from "chalk";

interface addValeType {
  name: string;
  url: string;
}
export const addMirror = () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "请输入镜像名称",
      //   教研用户输入的名称是不是 跟保留的名称冲突
      validate: function (value: any) {
        if (mirrorAddressObjKeys.includes(value)) {
          return `${value}镜像名字跟保留名字冲突`;
        } else if (!value.trim()) {
          return "镜像名称不能为空";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "url",
      message: "请输入镜像地址",
      validate: function (value: string) {
        if (!value.trim()) {
          return "镜像名称不能为空";
        }
        return true;
      },
    },
  ];
  inquirer.prompt<addValeType>(questions).then(async (res) => {
    console.log(res);
    const name = res.name;
    const url = res.url;
    const module = await mirrorAddressObj();
    const del = (url: string) => {
      const arr = url.split("");
      return arr[arr.length - 1] == "/"
        ? arr.pop() && arr.join("")
        : arr.join("");
    };
    module[name] = {
      home: url.trim(),
      registry: url.trim(),
      ping: del(url.trim()),
    };
    // 写入到mirrorAddress.json 文件中
    console.log(module);
    try {
      const file_path = setFilePath("../data/mirrorAddress.json");
      fs.writeFileSync(file_path, JSON.stringify(module, null, 4));
      console.log(chalk.blue("添加完成"));
    } catch (error) {
      console.log(chalk.red(error));
    }
  });
};
