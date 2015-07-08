# simple-full-screen-scroll
######简易版全屏滚动组件
----只为满足项目需求而做</br>
// [作者网名] webjackchen（阿飞）</br>
// [邮    箱] webjackchen@163.com</br>
// [QQ交流] 602071930</br>

兼容IE7+</br>

使用方法</br>

#####html部分

 &lt;ul id="menu"&gt;</br>
        &lt;li data-text="第一屏"&gt;&lt;/li&gt;</br>
        &lt;li data-text="第二屏"&gt;&lt;/li&gt;</br>
        &lt;li data-text="第三屏"&gt;&lt;/li&gt;</br>
        &lt;li data-text="第四屏"&gt;&lt;/li&gt;</br>
    &lt;/ul&gt;</br>
    &lt;div id="page"&gt;</br>
        &lt;div class="section"&gt;第一屏&lt;/div&gt;</br>
        &lt;div class="section"&gt;第二屏&lt;/div&gt;</br>
        &lt;div class="section"&gt;第三屏&lt;/div&gt;</br>
        &lt;div class="section"&gt;第四屏&lt;/div&gt;</br>
    &lt;/div&gt;</br>
    
#####js部分

首先引入</br>
&lt;script type="text/javascript" src="jquery-1.9.1.min.js"&gt;&lt;/script&gt;</br>
&lt;script type="text/javascript" src="myScroll.js"&gt;&lt;/script&gt;</br>

然后实例化对象</br>

&nbsp;$(function(){</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;scrollfullPage&nbsp;=&nbsp;new&nbsp;$.MyScroll();</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scrollfullPage.init({</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start:0,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//这是默认初始化显示第几屏</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;afterFnArr:[function(){alert("第一屏进入之后回调函数")},function(){alert("第二屏进入之后回调函数")},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function(){alert("第三屏进入之后回调函数")},function(){alert("第四屏进入之后回调函数")}],&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//进场之后回调函数数组</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leaveFnArr:[function(){alert("第一屏离开之前回调函数")},function(){alert("第二屏离开之前回调函数")},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function(){alert("第三屏离开之前回调函数")},function(){alert("第四屏离开之前回调函数")}]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//出场之前回调函数数组</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</br>
&nbsp;&nbsp;&nbsp;&nbsp;})</br>

####具体demo效果：http://webjackchen.github.io/simple-full-screen-scroll/
