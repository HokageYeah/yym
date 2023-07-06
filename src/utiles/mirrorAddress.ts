import fs from "node:fs";
import { setFilePath } from "@/utiles";
import chalk from "chalk";

// 方案一 使用ts数据，但是没法写入
// export const mirrorAddressObj = {
//   npm: {
//     home: "https://www.npmjs.org",
//     registry: "https://registry.npmjs.org/",
//     ping: "https://registry.npmjs.org",
//   },
//   yarn: {
//     home: "https://yarnpkg.com",
//     registry: "https://registry.yarnpkg.com/",
//     ping: "https://registry.yarnpkg.com",
//   },
//   tencent: {
//     home: "https://mirrors.cloud.tencent.com/npm/",
//     registry: "https://mirrors.cloud.tencent.com/npm/",
//     ping: "https://mirrors.cloud.tencent.com/npm",
//   },
//   cnpm: {
//     home: "https://cnpmjs.org",
//     registry: "https://r.cnpmjs.org/",
//     ping: "https://r.cnpmjs.org",
//   },
//   taobao: {
//     home: "https://npmmirror.com",
//     registry: "https://registry.npm.taobao.org/",
//     ping: "https://registry.npm.taobao.org",
//   },
//   npmMirror: {
//     home: "https://skimdb.npmjs.com/",
//     registry: "https://skimdb.npmjs.com/registry/",
//     ping: "https://skimdb.npmjs.com/registry",
//   },
// };
// type objType = typeof mirrorAddressObj;
// interface MirrorAddress {
//   home: string;
//   registry: string;
//   ping?: string;
// }
// type otherMirrorAddress = {
//   [key: string]: MirrorAddress;
// };
// export type mirrorAddressObjType = objType & otherMirrorAddress;

// 方案二： 使用 .json文件
interface MirrorAddress {
  home: string;
  registry: string;
  ping?: string;
}
type mirrorKey =
  | "npm"
  | "yarn"
  | "tencent"
  | "cnpm"
  | "taobao"
  | "npmMirror"
  | string;

export type otherMirrorAddress = {
  [key in mirrorKey]: MirrorAddress;
};
// export const mirrorAddressObj: otherMirrorAddress =  mirrorAddress;
export const mirrorAddressObj = (): otherMirrorAddress => {
  // console.log('回调回调', require("../data/mirrorAddress.json"));
  // console.log('回调回调', import("../data/mirrorAddress.json"));
  console.log('回调回调');
  const file_path = setFilePath("../data/mirrorAddress.json");
  // console.log("file_path", file_path);
  // const data = fs.readFileSync(file_path, "utf-8");
  return require("../data/mirrorAddress.json");
};
