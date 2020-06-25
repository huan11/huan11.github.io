---
title: Markdown 语法学习
categories: 工具学习笔记
tags: Markdown
---

## 标题
```
# 这是 H1

## 这是 H2 ##

###### 这是 H6 ###### 
```

## 段落
```
空行代表分段

*斜体语法 1*
_斜体语法 2_

**粗体语法**
***粗体+斜体语法***

~~删除线语法~~
```

## 分割线—— 三个以上的星号，减号，底线
分割线语法:
```
星号方式一
***

星号方式二
* * *
  
星号方式三
****

减号
- - -

底线方式
_______________
```

星号方式一
***

星号方式二
* * *
  
星号方式三
****

减号
- - -

底线方式
_______________

## 引用
### 引用内部嵌套( 分级引用 ) ##
写法：
```
> 引用
>
> > 引用嵌套
>
>d
```
效果：

> 引用
>
> > 引用嵌套
>
>d 

### 引用中嵌套其他格式 ##
写法:TODO
```
> ## 这是一个标题
>
> 1. 这是第一行列表项
> 2. 这是第二行列表项
> 
> 给出一些例子代码
> 
>
> return shell_exec("echo $input | $markdown_script"); 
>
```

效果:

> ~~删除线~~
>
> 1. 这是第一行列表项
> 2. 这是第二行列表项
> 
> 给出一些例子代码
> 
>
> return shell_exec("echo $input | $markdown_script"); 
>
## 代码区域
### 第一种方式：原生风格是行首缩进四个空格。
写法:
```
这是一个代码区域：
@NeedLogin
@PostMapping("/updateBasisInfo")
public String updateJbxxInfo(@ModelAttribute(value = "jbxxAccpet") JbxxAccpet jbxxAccpet,Users users){
    return "redirect:basicinformation";
}
```
效果:

    这是一个代码区域：
    @NeedLogin
    @PostMapping("/updateBasisInfo")
    public String updateJbxxInfo(@ModelAttribute(value = "jbxxAccpet") JbxxAccpet jbxxAccpet,Users users){
        return "redirect:basicinformation";
    }
### 第二种方式：github 风格 三个反引号
写法: TODO  如何将  ``` 显示出来,并且保持复制过来的内容的缩进不变？ 答案——缩进(不行,复制的内容缩进全乱了)
```

```

效果:
```
public static void main(){
    System.out.println(" Hello Markdown");
}
```


### 在引用种引入一行代码 TODO 移到引用一节
> 
>``` 
>这是我引入的第一行代码
>```
>
>```
>这是我引入的第二行代码
>```

### 在引用种引入多行代码 TODO 移到引用一节


## 内联代码
写法:
```
这是我的段落，`内联代码语法`
```

效果:

这是我的段落，`这是段落中的内联代码`

## 列表
### 无序列表 ##
写法:
```
* RED
* GREEN
* YELLOW

+ red
+ green
+ yellow
  
- red3
- green3
- yellow
```

效果:

* RED
* GREEN
* YELLOW

### 有序列表 ##
写法:
```
1. Bird
2. Cat
3. Dog
```

效果:
1. Bird
2. Cat
3. Dog


## 链接- []和() 一起使用

### 将文字设置链接
语法:
```
[这是 GitHub 地址](http://github.com/)
```
效果:

[这是 GitHub 地址](http://github.com/)


### 将文字设置链接，当鼠标移动到文字时，设置提示信息
语法：
```
[这是 GitHub 地址](http://github.com/ "点击后跳转GitHub地址")
```
效果：

[这是 GitHub 地址](http://github.com/ "点击后跳转GitHub地址")


### 将链接独立到一个地方维护——参考式语法
语法：
```
[1]: http://github.com/  "点击后将跳转到 GitHub "

[这是 GitHub 地址][1]
```
效果：

[这是 GitHub 地址][1]

[1]: http://github.com/  "点击后将跳转到 GitHub "


## 表格
写法：
```
| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |
```
效果：

| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |

## 图像处理
### 不设置鼠标移动到图像的提示
写法:
```
![这里写TODO](这里写地址)
```
效果：

![Steve_Jobs2.jpg](http://ww1.sinaimg.cn/large/0073CJirgy1gasxk5u4v9j31hc0xcn0a.jpg)


### 设置鼠标移动到图像的提示
写法:
```
![这里写](这里写地址 "这里写提示文字")
```
效果:

![这里写](这里写地址 "提示文字")

### 将链接独立出去——参考式语法
TODO

## 直接提供链接时，这样写
目的：避免链接的地址和名字重复

啰嗦写法：
```
[http://example.com/](http://example.com/)
```
简洁写法:
```
<http://example.com/>
```



## 转义
markdown 支持一下字符前插入反斜杠

```
\   反斜线
`   反引号
*   星号
_   底线
{}  花括号
[]  方括号
()  括弧
#   井字号
+   加号
-   减号
.   英文句点
!   惊叹号
```


## 对比:
>静夜思
唐朝诗人 李白 字太白
床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。

```
静夜思
唐朝诗人 李白 字太白
床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。
```

**在复制大量的内容时，引用推荐使用代码引用——\``` ```，最大保持原格式**


**使用>符号的引用很漂亮，组织起来蛮好看的，如何在>符号的引用引用大量代码，而不用手动重复输入 > ——解决办法:不交叉使用，引用>的目的在于提示用户这里引用了别人的东西，仅仅作为标记符** 

> 这是 黑客 XXX 的一段代码
```lisp
(format t "Hello, World!")
```

```python
print('Hello World')
```

```java
class HelloWorld
{
  public static void main(String[] args)
  {
    System.out.println("Hello World!!");
  }
}
```
```c
#include<stdio.h>

int main(void)
{
  printf("Hello, world!");
  return 0;
}
```

```c++
#include <iostream>
using namespace std;

int main()
{
    cout <<"\nHello World"<< endl;
    return 0;
}
```

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello World")
}
```



