import inquirer from 'inquirer'
import { mirrorAddressObj } from "@/data/mirrorAddress";
import { mirrorAddressObjKeys } from "@/utiles"
import ping from 'node-http-ping'
import chalk from 'chalk';

export const pingCode = () => {
    const questions = [{
        type: 'list',
        name: 'select',
        message: '请选择要测速的镜像',
        choices: mirrorAddressObjKeys
    }]
    inquirer.prompt(questions).then(res => {
        const url = (mirrorAddressObj as any)[res.select].ping.trim()
        ping(url).then((result: any) => {
            console.log(chalk.blue(`镜像: ${res.select} 地址：${url} 平均响应时间：${result}ms`));
        })
            .catch((error: any) => {
                console.error(chalk.red(`无法执行 Ping 测试：${error}`));
            })
    })
}