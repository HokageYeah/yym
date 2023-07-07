import { getCurrentMirror, mirrorAddressObjKeys, whiteList } from "@/utiles";
import { mirrorAddressObj, setFilePath } from "@/utiles/mirrorAddress";
import chalk from "chalk";
import inquirer from "inquirer";
import fs from "node:fs";

export const deleteMirror = () => {
  if (mirrorAddressObjKeys.length == whiteList.length) {
    return console.log(chalk.red("当前无自定义源可以删除"));
  }
  const fileMirrorAry = mirrorAddressObjKeys.filter(
    (item) => !whiteList.some((witem) => item == witem)
  );
  const questions = [
    {
      type: "list",
      name: "select",
      message: "请选择删除的自定义镜像",
      choices: fileMirrorAry,
    },
  ];
  inquirer.prompt(questions).then((result) => {
    const deleteReg = (mirrorAddressObj() as any)[
      result.select
    ].registry.trim();
    console.log(deleteReg);
    if (deleteReg == getCurrentMirror.trim()) {
      console.log(
        chalk.red(`镜像地址${deleteReg}当前正在使用，请删除其他自定义镜像`)
      );
      return;
    }
    const module = mirrorAddressObj();
    delete module[result.select];
    try {
      const file_path = setFilePath("../data/mirrorAddress.json");
      fs.writeFileSync(file_path, JSON.stringify(module, null, 4));
      console.log(chalk.green(`删除镜像${result.select}成功！`));
    } catch (error) {
      console.log(chalk.red(error));
    }
  });
};
