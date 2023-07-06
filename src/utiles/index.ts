import { mirrorAddressObj, otherMirrorAddress } from "@/utiles/mirrorAddress";
import { execSync } from "child_process";
import path from "node:path";
import yeahurl from "node:url";

const ownmirrorAddressObj = mirrorAddressObj();
console.log('ownmirrorAddressObj', ownmirrorAddressObj);

export const mirrorAddressObjKeys = Object.keys(ownmirrorAddressObj);

// 执行命令 获取当前使用的镜像地址
export const getCurrentMirror = execSync("npm get registry", {
  encoding: "utf-8",
});

// es module 获取文件路径
export const setFilePath = (filePath?: string) => {
  const url = import.meta.url;
  const __dirname = path.dirname(yeahurl.fileURLToPath(url));
  const crossPlatformPath = path.resolve(__dirname, filePath ?? "");
  return crossPlatformPath;
};
