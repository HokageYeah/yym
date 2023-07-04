# yym 
Switch local source information

# ``注意``

> ### 1、 #!/usr/bin/env node  作用：
  * 当你在使用 tsup 打包时，如果你打算将输出的文件作为一个可执行脚本来运行，那么在文件的开头加上 #!/usr/bin/env node 是必要的。

  * 这是因为 #!/usr/bin/env node 是一个 ``shebang``（也称为 ``hashbang``）注释行，它告诉系统该脚本应该使用哪个解释器来执行。在这种情况下，/usr/bin/env 是一个可执行文件，它会在环境变量 ``$PATH`` 中查找后面指定的解释器，在这里指定的解释器是 node。

  * 如果你不在文件开头添加 shebang 注释行，操作系统就无法确定使用哪个解释器来执行该文件，从而导致类似 ``"syntax error near unexpected token" ``的错误。
  
  * 为了确保你的 TypeScript/JavaScript 脚本能够正确执行，你需要在文件开头添加以下 shebang 注释行：
    ```shell
      #!/usr/bin/env node
    ```
  * 这样，在你通过命令行运行该文件时，操作系统就会根据该注释行来选择正确的解释器，并执行相应的脚本代码。`请注意，添加 shebang 注释行只适用于将输出的文件作为可执行脚本运行的情况`。如果你将输出的文件用作库或模块，或者在浏览器环境中使用，那么不需要添加 shebang 注释行。

  > ### 2、 inquirer 模块：
  * inquirer 模块是一个常用的交互式命令行工具，用于与用户进行问答式交互。它提供了一组强大的方法和功能，使开发者能够轻松地创建交互式的命令行界面。
  * 导入模块并调用相应的方法来实现交互式问答，示例代码：
    ```shell
    const inquirer = require('inquirer');

    // 定义问题（questions）
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: '请输入你的名字：'
      },
      {
        type: 'list',
        name: 'color',
        message: '请选择你喜欢的颜色：',
        choices: ['红色', '蓝色', '绿色', '黄色']
      }
    ];

    // 通过 inquirer 模块与用户进行交互
    inquirer.prompt(questions)
      .then(answers => {
        console.log('你的名字是：', answers.name);
        console.log('你喜欢的颜色是：', answers.color);
      })
      .catch(error => {
        console.error('交互过程中出现错误：', error);
      });

    ```
    在上述示例中，我们使用 inquirer.prompt 方法传入定义好的问题（questions），然后通过 .then 方法处理用户的回答。最后，在回调函数中可以对用户的回答进行处理或输出。

    questions 是一个包含多个问题对象的数组，每个问题对象都有不同的类型（如 input、list 等）、名称（name）和消息（message）。

    type 属性指定了问题的类型，例如：

    * input：接收用户的自由输入。
    * list：提供给用户选择其中一项的选项列表。
    * confirm：要求用户回答确认或取消（是/否）。
    
    name 属性是问题的标识符，用于在回答中引用它。
    message 属性是向用户显示的问题文本。
    choices 属性（仅适用于某些类型的问题，如 list）用于提供用户选择的选项列表。