import { mirrorAddressObj } from "@/data/mirrorAddress";
export type mirrorType = typeof mirrorAddressObj;
import { execSync } from "child_process";

export const mirrorAddressObjKeys = Object.keys(mirrorAddressObj) as (keyof mirrorType)[];

// 执行命令 获取当前使用的镜像地址
export const getCurrentMirror = execSync("npm get registry", {
    encoding: "utf-8",
});