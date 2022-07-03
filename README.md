# stroybook初始化流程
    1、使用vue创建工程，目前vite工程会出现异常报错
    2、npx sb init

# lerna 使用
    1、lerna 工程初始化
        lerna init
    2、创建项目
        lerna create [package]
        注意：如果生成的package包想再当前应用使用，注意重新npm install下
    3、添加依赖
        lerna add [package] [--scope=特定的某个包] 
    4、安装依赖
        （1）为每个包安装依赖 lerna bootstrap [--scope=特定的某个包] 功能和npm install差不多，如果不加scope，lerna会把工程下的所有包的依赖都安装好！
        （2）删除包下面的node_modules 上面的命令安装依赖会在每个包目录下生成node_modules，下面的命令就是将node_modules删除 lerna clean
        （3）导入外部的包（这个命令比较有意思） lerna import 外部包的位置 --dest=工程下的位置
    5、发包
        第一步： npm login（已登录可省略）
        第二步： 将需要更新的包代码提交到git仓库
        第三步： lerna publish [package]

# npm包本地调试
### 调试方式一：npm link 
    1、创建全局软连接：npm link [?包路径]
    2、在本地工程中连接调试包软连接：npm link [包名]
    3、调试完成删除软连接：
    （1）1.在npm包中全局：npm unlink 包名 -g
    （2）.在项目中:npm unlink 包名
    
    注：对于 npm link 方式，由于主项目和test-module项目属于不同的项目，都有自己各自的 node_modules,如果两个项目都使用了同一个依赖，它们会在各自的 node_modules去查找，如果这个依赖不支持多例，应用就会异常。如果两个项目的编译规则不匹配，也同样会出问题。而且webpack不会对test-module项目做预编译，可能会导致实际构建或者运行时会报错等

### 调试方式二：yalc