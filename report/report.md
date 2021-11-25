# 第一次实验报告

### date

最基础的跨域请求，直接fetch即可

![image-20211126034854791](C:\Users\17795\AppData\Roaming\Typora\typora-user-images\image-20211126034854791.png)

结果如图，跨域请求失败。

![date](C:\Users\17795\Desktop\websecurity hw1\report\date.png)

### datecors

在路由中加上datecors，引入cors模块，在datecors路由中加入cors，从而允许跨域请求。

![image-20211126034951907](C:\Users\17795\AppData\Roaming\Typora\typora-user-images\image-20211126034951907.png)

结果如图，跨域请求成功。

![datecors](C:\Users\17795\Desktop\websecurity hw1\report\datecors.png)

### jsonpdate

获取callback的函数名称，并返回函数名+参数（即当前时间）

![image-20211126035133365](C:\Users\17795\AppData\Roaming\Typora\typora-user-images\image-20211126035133365.png)

在client端，注册handleTime函数，并将其作为callback函数转入，发送get请求。

![image-20211126035219702](C:\Users\17795\AppData\Roaming\Typora\typora-user-images\image-20211126035219702.png)

结果如图，跨域请求成功。

![jsonp](C:\Users\17795\Desktop\websecurity hw1\report\jsonp.png)