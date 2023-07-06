import { mirrorAddressObj } from "@/utiles/mirrorAddress";
import { mirrorAddressObjKeys, getCurrentMirror } from "@/utiles"
export const lsCode = () => {
  const mirrorArray: string[] = [];
  // 为了让输出的长度一样
  const max = Math.max(...mirrorAddressObjKeys.map((v) => v.length)) + 3;
  mirrorAddressObjKeys.forEach((element) => {
    // 判断当前的镜像是否是 系统设置的镜像
    const keyWord =
      mirrorAddressObj()[element].registry == getCurrentMirror.trim()
        ? "* " + element
        : "  " + element;
    const Arr = [...keyWord];
    Arr.length = max;
    const prefixAry = Array.from(Arr).map((v) => (v ? v : "-"));
    const prefix = prefixAry.join("");
    mirrorArray.push(prefix + "   " + mirrorAddressObj()[element].registry);
  });
  // console.log(keys);
  // console.log(chalk.green(getCurrentMirror));
  console.log(mirrorArray.join("\n"));
};
