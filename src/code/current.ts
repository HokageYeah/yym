import chalk from "chalk";
import { mirrorAddressObj } from "@/utiles/mirrorAddress";
import { mirrorAddressObjKeys, getCurrentMirror } from "@/utiles";

export const currentCode = () => {
  const key = mirrorAddressObjKeys.find((item) => {
    if (mirrorAddressObj()[item].registry == getCurrentMirror.trim()) {
      return item;
    }
  });
  if (key) {
    console.log(chalk.blue("当前使用源:", key));
  } else {
    console.log(chalk.green("当前使用源:", getCurrentMirror));
  }
};
