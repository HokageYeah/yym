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