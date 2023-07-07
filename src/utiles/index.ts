import { mirrorAddressObj, otherMirrorAddress } from "@/utiles/mirrorAddress";
import { execSync } from "child_process";
import path from "node:path";
import yeahurl from "node:url";

// es module 获取文件路径
const setFilePath = (filePath?: string) => {
  const url = import.meta.url;
  const __dirname = path.dirname(yeahurl.fileURLToPath(url));
  const crossPlatformPath = path.resolve(__dirname, filePath ?? "");
  return crossPlatformPath;
};
// 执行命令 获取当前使用的镜像地址
const getCurrentMirror = execSync("npm get registry", {
  encoding: "utf-8",
});

const ownmirrorAddressObj = mirrorAddressObj();

const mirrorAddressObjKeys = Object.keys(ownmirrorAddressObj);
const whiteList = ['npm', 'yarn', 'tencent', 'cnpm', 'taobao', 'npmMirror'] //白名单

export {
  // setFilePath,
  getCurrentMirror,
  mirrorAddressObjKeys,
  whiteList
}