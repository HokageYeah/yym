import { execSync } from "child_process";
import { mirrorAddressObj } from "@/data/mirrorAddress";
export const lsCode = () => {
  // 执行命令 获取当前使用的镜像地址
  const getCurrentMirror = execSync("npm get registry", {
    encoding: "utf-8",
  });

  type mirrorType = typeof mirrorAddressObj;
  const keys = Object.keys(mirrorAddressObj) as (keyof mirrorType)[];

  const mirrorArray: string[] = [];
  // 为了让输出的长度一样
  const max = Math.max(...keys.map((v) => v.length)) + 3;
  keys.forEach((element) => {
    // 判断当前的镜像是否是 系统设置的镜像
    const keyWord =
      mirrorAddressObj[element].registry == getCurrentMirror.trim()
        ? "* " + element
        : "  " + element;
    const Arr = [...keyWord];
    Arr.length = max;
    const prefixAry = Array.from(Arr).map((v) => (v ? v : "-"));
    const prefix = prefixAry.join("");
    mirrorArray.push(prefix + "   " + mirrorAddressObj[element].registry);
  });
  // console.log(keys);
  // console.log(chalk.green(getCurrentMirror));
  console.log(mirrorArray.join("\n"));
};
