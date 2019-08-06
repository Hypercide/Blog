# PHP

## PHP代码解释过程
`PHP-FPM`进程启动时，会初始化`Zend`，然后`Apache/Nginx`在收到请求之后，转发给`PHP-FPM`进程，它在已经准备好的`Zend`下解释执行具体的代码：
1. 将PHP代码转换为`Tokens`语言片段存到一个数组里
2. 分析`Tokens`，转换成一个一个的简单的表达式
3. 将表达式编译成`Opcode`
4. 顺次执行`Opcode`，每次一条，从而实现PHP脚本的功能

最后，代码执行完后，得到的结果返回给`Apache/Nginx`响应请求。

## PHP-CGI与PHP-FPM
>CGI是外部应用程序（CGI程序）与Web服务器之间的接口标准

CGI有个蛋疼的地方，就是每一次收到web请求都会有启动和退出过程

因此诞生了`FastCGI`，CGI一次启动一个主进程(`master`)，让他只读取一次配置，然后在启动多个工作进程(`worker`),当一个请求来的时候，通过`master`传递给`worker`这样就可以避免重复劳动了。

以上只是说明了`FastCGI`，`FastCGI` 是一个与平台无关，与语言无关，任何语言只要按照它的接口来实现，就能实现自己语言的`FastCGI`能力和web server 通讯。
接下来才到了PHP自己的`FastCGI`：

`PHP-CGI`就是PHP实现的自带的`FastCGI`管理器，但是它性能太差，主要有以下两个缺点：
1. `PHP-CGI`变更`php.ini`配置后需重启`PHP-CGI`才能让新的`php.ini`生效，不可以平滑重启。
2. 当直接杀死`PHP-CGI`进程时，php就不能运行了。

然后到2004年，一个叫安德烈的人发明了PHP专用的`FastCGI`管理器：PHP-FPM，克服了上面2个问题。

```js
$.ajax({  
        url:"",  
        dataType:'jsonp',  
        data:'',  
        jsonp:'callback',  //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
 
        success:function(result) {  
            //成功的处理
        },
        error:function(){
            //错误处理
} 
});  
```