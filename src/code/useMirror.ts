import { mirrorAddressObj } from '@/data/mirrorAddress';
import { mirrorAddressObjKeys } from '@/utiles';
import inquirer from 'inquirer'
import { exec } from "child_process";
import chalk from 'chalk';
export const useMirror = () => {
    const questions = [{
        type: 'list',
        name: 'select',
        message: '请选择镜像',
        choices: mirrorAddressObjKeys
    }]
    inquirer.prompt(questions).then(result => {
        const reg = (mirrorAddressObj as any)[result.select].registry.trim()
        // 运行命令行 命令修改镜像 异步更改
        exec(`npm config set registry ${reg}`, null, (err, stdout, stderr) => {
            if (err) {
                console.error(chalk.red(`切换错误 ${err}`))
            } else {
                console.log(chalk.green('切换成功'));
            }
        })
    })
}