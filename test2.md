大喵教育前端培训
================

## 阶段性测试 2018.12.07

### 大喵教育版权所有 | 出题人：谢然


01. 用文字描述如下选择器将选择哪些（个）元素
    ```css
    div, h1 {}  0 0 0 2
    div[class] [id="abc"] {}   0 0 2 1
    div:hover ul li > div {} 0 0 1 4
    body :active {}  0 0 2 1
    div:hover::after {}
    ::selection {} 0 0 1 0
    :target {} 0 0 1 0
    input + ul + p ~ span {} 0 0 0 4
    ```
  答：div 里面的所有 h1  
      div带有 class 且 id 为 adc    /  带有 class 属性的 div 元素里的id为abc的元素
      当 div 被 hover 时 ul 里面的 li 的直接子元素 div  
      当 body 被 active 时   / body 里的元素处于 active 状态（鼠标在其范围内未松开）时
      当 div 被 hover 时 他的后伪元素  
      所有带有 ::selection 伪元素的标签   / 被鼠标选中的部分（此选择器只能设置两个样式，前景色&背景色）
      所有带有 ：target 伪类的标签   / 选中 id 的值为地址栏中 # 后面部分的元素
      input 后面的兄弟元素 ul 后面的 兄弟元素 p 后面的第二个 span 元素  / input 后面的一个 ul 后面的一个 p 后面的所有 span

02. 分别写出如下几个选择器的优先级
    ```css
    * * * {}
    div * span {}
    div[title] {}
    fieldset legend + input {}
    #some #thing .not:hover .abc:hover {}
    ```
  答：0 0 0 0；    
      0 0 0 2；  
      0 0 2 1； / 0 0 1 1;  
      0 0 0 3；  
      0 2 0 2.  /0 2 4 0;

03. https://www.example.com/a/b/ 页面中有如下代码
    ```html
    <link rel="stylesheet" href="//test.example.com/path/../the/../path/c.css">
    ```
    请问最终引入的c.css的完整路径是什么？  
    答：//test.example.com/the/c.css  /
    双斜杠  https://test.example.com/path/c.css
    单斜杠
    没有斜杠  

04. `em,px,rem,vw,vh` 分别代表多长？  
答：em ：相对长度单位，这个单位表示元素 font-size 的计算值。如果用在 font-size 属性本身，他会继承父元素的 font-size。  
px： 与显示设备有关。对于屏幕显示，通常是一个设备像素（点）的显示。对于打印机和高分辨率的屏幕，一个 CSS 像素意味着多个设备像素，因此，每英寸的像素的数量保持在 96 左右。  
rem：这个单位代表根元素的 font-size 大小。  
vw：视口宽度的 1/100。
vh：视口高度的 1/100。

1em 当前元素的字号大小
px 一个 css 像素，在页面不放大的时候是一个操作系统像素，在系统分辨率跟显示器的物理分辨率相同时。他是一个物理像素点的大小
rem 根元素字号大小  
vmax vw与vh的较大者
vmin vw与vh的较小者  

05. 显示器的物理分辨率为 `1920x1080`，操作系统设置的分辨率为 `1280x720`，网页的放大倍数为 `110%`，请计算一个 CSS 像素对应多少个显示器物理像素（面积与长度）？
答：1 * 110% * （1920/1280） = 1.65
1.65 * 1.65 = 2.7225

06. 写出如下代码显示在浏览器后**每个单词**的字号
    ```html
    <style>
      html {
        font-size: 20px;
      }
      section {
        font-size: 10rem;
      }
      p {
        font-size: 24px;
      }
      span {
        font-size: 150%;
      }
      .sucks {
        font-size: inherit;
      }
    </style>
    <body>
      <section>
        <h2>Brown</h2>
        <p>quick</p>
        <p>jumps <span>over <span>lazy</span> dog</span></p>
        <p class="sucks">sucks</p>
      </section>
    </body>
    ```
答：Brown 200px； / 300px   <h></h>标签本身就有样式
quick 24px;  
jumps 24px;  
over 36px;  
lazy 54px;  
dog 36px;  
sucks 200px.  

07. 字体的 italic 与 obsolete 的区别是？  
答：italic 是字体族里面的斜体  专门设计的斜体样式的字体
obsolete 是模拟倾斜   通过正体倾斜的得来的斜体字
obsolete 废弃了的  

08. 写出满足如下条件的选择器
    * 第  8个子结点之后，倒数第 5 个子结点之前的li结点
    * 【类名】以“damiao-”开头的元素
    * rel 属性中有 nofollow 这个单词的标签  
答：:nth-child(n+8):nth-last-of-type(-n+5)   /  nth-last-child(可能出错)
E[class^="damiao-"] ，E[class*=" damiao-"] 
E[rel~="nofollow"]  

09. 链接伪类的几种状态书写的顺序是什么？为什么？  
答：a:link  
a:visited  
a:focus  
a:hover  
a:active  
在同时激活的情况下，后出现的伪类样式会覆盖前面的伪类样式。  

10. 如下 font 属性的值哪一个是书写正确的？
    * font: serif 24px;
    * font: serif bold 24px/1.2;
    * font: bold 24px/1.2 serif;
答：第三种。  
font:[<font-style>||<font-weight>||<font-variant>||<font-size>] <font-size>[/<line-height>]</font-family>;  
双竖线 || 可调换位置  
中括号 []可省略  
/ 必须跟在后面 

11. vertical-align 取 middle 时元素如何对齐？
答：middle 会把行内元素框的中点与父元素基线上方 0.25em 处的一个点对齐。  
/ 对于行内（行内块）元素，该元素的行内框垂直中点与匿名文本 x 中点对齐。   
对于表单元格元素，表单元格的内容在单元格中垂直居中。 

12. 什么是 baseline？    
答：对于文本来说，英文字母 x 等的底边线（下边缘线）  
对于图片及行内块元素来说，往往会将其 margin-box 下边缘作为基线 。 

13. 详述你对盒模型的理解。  
答：CSS 盒模型中每个元素被表示为一个矩形的方框，框的内容（content-box）、内边距（padding）、边界（border）和外边距（margin）像洋葱的膜那样，一层包着一层构建起来。浏览器渲染网页布局时，它会算出每个框的内容的要用什么什么样式，周围的洋葱层有多大，以及框相对于其他框放在哪里      
要点：margin border padding  
交互性  
元素的范围  
透过padding可以看见元素的背景  
宽高，box-sizing  
边框的形状，梯形  
边框交叉的位置是斜的  


14. 如何让一个元素可被 focus？如何去掉其被 focus 时的虚框？  
答：加上 tabindex=-1  
去除虚线框 outline：none。     

15. 如何给css添加注释  
答：/* 注释内容 */  
利用css的解析特性（遇到分号后结束一个属性的解析），我们也可以通过其他手段来实现“注释”：  
修改属性名为 unknown property    
修改属性值 invalid property value

16. 指出如下css代码中的错误
    ```
    p,h1,{
        
        background-color: rgba:(abc) / (0,0,0,0.8)  ;
        font-varient; abc;   /small-caps
        colr: #ff048;   /四位 六位  八位都可以   5位和7位不可以
        font: "serif" 25px;   / 字体族不能加 ""
    }
    ```  
答：h1后面的，  
rgba后面的：  
font-varient后面的；  
font："serif"字体族 应放在后面。    

17. 元素的高度写百分比在什么情况下【无效】，为什么？在什么情况下【有效】，有效时是以哪个元素的高度为基准值？  
答：在父元素未设置高度时。  
设置了父元素的高度时，以父元素的高度为基准值。 

/父元素的高度为 auto 时，因为为auto时。父元素由子撑大（父依赖子），子元素的高度由父元素决定（子依赖父），形成了循环依赖，逻辑上有矛盾。  

有效：1.父元素高度写死的情况  
2.子元素定位的时候（此时父元素的高度写不写都可以），且子元素的高度根据父元素的实际高度计算出来的

18. 解释 box-sizing 可以取哪些值，以及每个值的意义  
答：content-box 和 border-box。  
content-box 是默认值，任何边框和内边距的宽高都会被增加到最后绘制出来的元素宽度中；   /width属性的值，指的是 content-box（也即内容区域）的宽度，高度同理；
border-box 是指边框和内边距的值包含在 内容区 的 width 里。    /  width属性的值指的是border-box的宽度，高度同理’
内容区域则由宽度减去border和padding的宽度的得到

19. 如下结构中，div 有两个伪元素，分别标出伪元素的位置，用 `<before></before>` 表示 `::before` 伪元素，用 `<after></after>` 表示 `::after` 伪元素
    ```html
   
    <div> <before></before>
      <h1>The article</h1>
      <p>the quick brown fox</p>
     <after></after></div>
    
    ```

20. 如何在伪元素中插入换行符？如何让这个换行符在页面中生效？  
答：
使用 css 转义：\HHHHHH
content="\A";
white-space:pre;  

CSS 中生效应用 white-space：pre 。
21. 简述 ie7 市场份额比 ie6 低的原因并在网络上找出目前各大浏览器在中国和全球的市场份额  
答：不稳定；    /ie6是win xp自带的浏览器；很多老用户不愿意/不能升级     ie7无法安装在windows vista及以上的系统中。
浏览器全球市场份额：
![浏览器全球市场份额](https://wx2.sinaimg.cn/mw690/785070e7ly1fxy1hxqugvj20qb04amzp.jpg)  
浏览器中国市场份额：
![浏览器中国市场份额](https://ws1.sinaimg.cn/large/785070e7ly1fxy213tsocj20ve0450vk.jpg)  

22. 页面有无 `doctype` 声明会有什么区别？  
答：有 doctype 会以声明的文档类型渲染；  
无 doctype 声明就可能会出现一些怪异的行为，例如盒模型不准确、窗口的 size 不正确等问题。  

/有doctype：标准模式渲染   

无doctype：怪异模式渲染  
在ie6下，怪异模式会让 box-sizing 为 border-box；

23. 有一张高为 100 宽为 50 的图片，内有一个直径为 40 的圆，其做为一个 200x200 的元素的背景图片，background-size 为 contain 和 cover 时，圆的直径分别为多少？  
答：contain时，直径放大两倍，为80  
cover时，直径放大4倍，为160  

24. 写出实现小米网首页 logo 返回主页的动画效果的代码。  
答：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
    div{
	width:50px;
	height:50px;
	background-color:#ff6700;
	position:relative;
	overflow:hidden;
}

div::before{
	width:50px;
	height:50px;
	content:"";
	background-image:url(https://s01.mifile.cn/i/mi-logo.png);
	background-color:#ff6700;
	position:absolute;
	opacity:1;
	transition:0.2s;
	transform:traslate(0,0);
}

div::after{
	width:50px;
	height:50px;
	content:"";
	background-image:url(https://s01.mifile.cn/i/mi-home.png);
	background-color:#ff6700;
	position:absolute;
	opacity:1;
	transition:0.2s;
	transform:traslate(0,0);
	margin-left:-50px;
}

div:hover::before{			    	        
	transform:translate(50px,0);
	opacity:0;
}

div:hover::after{
	transform:translate(50px,0)
}
  </style>
</head>
<body>
	<section>
			<div></div>
	</section>
</body>
</html>

```


```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
	<style>
	* {
  background-color: rgba(0,0,0,0.09);
}

div {
  background-color: #ff6700;
  width: 50px;
  height: 50px;
  background-image: url(https://s01.mifile.cn/i/mi-logo.png), url(https://s01.mifile.cn/i/mi-home.png);
  background-position: 0 0, 50px 0;
  background-repeat: no-repeat;
  transition: .3s;
}

div:hover {
  background-position: -50px 0, 0px 0;
}
	</style>
</head>
<body>
  <div></div>
</body>
</html>
```

https://jsbin.com/kezosik/edit?html,css,output



25. 给出至少 5 种水平垂直居中方案。  
答：1.绝对定位：  /子元素定宽定高 否则高度被拉伸很大
position:absolute;  
left：0；  
right：0；  
top：0；  
bottom：0；  
margin：auto。

2.子元素display：inline-block，父元素；line-height=height，子元素line-height继承父元素所以子元素 line-height：normal；vertical-align：middle；font-size：medium;  

3.display：table-cell；  
text-align：center；  
vertical-align：middle；

4.display:flex;  
justify-content:center;  
flex-direction:column;  
align-items:center;

5.position:
top:50%;
left:50%;
transform:translate(-50%,-50%);

26. 简述 em 框，内容区，行内框，行框的构成以及其需要注意的问题。  
答：em框在字体中定义。也称为字符框（character box）。实际的字形可能比其更高或者更矮。  
内容区：非替换元素中元素中各字符的 em 框串在一起构成的框。替换元素中内容区就是元素的固有高度再加上可能的外边距，边框或内边距。   
行内框：这个框通过向内容区增加行间距来描述。对于非替换元素，元素行内框的高度刚好等于 lin-height 的值。对于替换元素，元素行内框的高度恰好等于内容区的高度，因为行间距不应用到替换元素。  
行框：这是包含该行中出现的行内框的最高点和最低点的最小框。换句话说，行框的上边要位于最高行内框的上边界，行框的底边要放在最低行内框的下边界。   

/ em框：文字框，高度是字号，字形是可能超出 em 框的

内容区：em框串起来形成内容区；

行内框：
inline-block元素，行高框与内容框区垂直中点对齐；

inline 替换元素 margin-box；




需要注意的问题：
baseline问题
行内元素垂直方向的框属性都不影响其布局；  
vertical-align的好几个值并不按照直觉工作  

27. 如何确定一个行内框的baseline及其最高点和最低点？  
答：line-height

/inline元素：
文字的baseline
行高框的最高点和最低点

其他行内元素：
最后一行内容的baseline
margin-box的上边缘和下边缘；

28. `td` 元素的 `headers` 属性是干嘛的？  
答：headers 属性规定表头与单元格相关联。  

/是用来将此td元素与特定的th元素进行关联的。
有助于读屏软件读取单元格的表头。
它是一个空格分隔的th的id列表。  

29. color 这个属性有什么需要注意的地方？  
答：transparent；   
currentColor  

各处颜色都可能会直接用color的值作为其默认值
css3里有一个 currentColor 可以了解到color 的值


30. 如何理解 inline-block 元素？它有什么需要注意的地方？  
答：同时具备了 block 和 inline 两者的功能。  
注意：1.inline-block元素受 vertical-align 属性的影响；  
2.需要设置 inline-block 元素的宽度；
3.使用 inline-block元素布局需要注意元素间可能出现间隙。font-size：0 消除

/
从外面看他是行内元素，从里面看他是 block 元素   

考虑他自身文职的时候，当成行内元素来看。考虑其内部元素的布局时，认为内部元素处在一个块级元素中。    

inline-flex/table/grid以此类推

需要注意的地方：没有内容的时候与有内容的时候baseline不一样  
它自身触发了 BFC

31. 什么是 CSS Sprite？为什么要使用 CSS Sprite？它有哪些优缺点？  
答：将一个页面涉及到的所有零星图片都包含到一张大图中去，再用 background-position，background-image，background-repeat的聚合进行背景定位。  
优点：减少 http请求次数，图片字节
缺点：需要精确定位，维护难度大，/不能是动图    放大后不清晰

css 精灵/雪碧

why：
节省文件大小（“拼接”文件会使总体积变小）  
节省网络流量（下载一张图比下载多张图节省流量）  
加快速度，图标的出现不会闪烁    


现代方案：
字体图标；
svg图标（支持动画）


32. 找出如下代码中的错误
    ```
    <style>
      div::after：hover {           /伪元素    冒号
        opacity: 85%；      /百分比   分号
        transition: opactiy .3s step(5,end);    /opacity  steps
      }
      a:visited {
        font-size: 28px;    /font-size不能生效
      }
    </style>
    <div>
      <a href="jd.com”>京东商场<a>   /闭合标签</a>
      <a href="mi.com”>小米网<a>     /href地址 双斜杠//  或  补全https://
    </div>
    ```

    答：::after不在最后；  
    opacity设为百分比  


33. 如下内容渲染在【同一行】中，请计算那一行的理论行高
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
      <style>
        div {
          margin: 80px;
          background-color: violet;
        }
        span {
          display: inline-block;
          border: 1px dotted;
          background-color: pink;
        }

        .a {
          vertical-align: -15px;
          width: 30px;
          height: 30px;
        }
        .b {
          margin-top: -50px;
          width: 30px;
          height: 30px;
          vertical-align: top;
        }
        .c {
          margin-bottom: 10px;
          vertical-align: middle;
        }
        .d {
          width: 30px;
          height: 30px;
        }
      </style>
    </head>
    <body>
      <div>
        x<span class="a">foo</span>
        <span class="b">bar</span>
        <span class="c">baz</span>
        <span class="d"></span>
      </div>
    </body>
    </html>
    ```

    https://jsbin.com/gimovig/1/edit?html,css,output

34. `vertical-align` 取值为 `baseline` 时在不同情况下分别是如何对齐的？  
答：vertical-align 只对 inline 和 inline-block 元素有效   
1.如果父元素高度被某个子元素撑开  
  如果这个元素是图片，改变图片的高度会改变基线的位置；  
  如果这个子元素是文字，改变字体的 font-size 和 line-height 属性，都会改变基线的位置
2.如果父级元素包含多个 inline-block 元素，且这些元素都设置了 vertical-align：baseline 属性，这一行上面所有元素都会是一个基线，改变一个元素的基线，其他所有元素的基线都会改变，基线的位置会跟基线最低的子元素或者父级元素的基线对齐。  

/ 行内块元素  
有内容  
     按最后一行内容的基线
     overflow:hidden margin-bottom
     对着匿名文本的baseline
无内容
    margin-bottom  对着匿名文本的 baseline
行内替换元素
    margin-bottom  对着匿名文本的 baseline
行内元素
    baseline 对着匿名文本的 baseline




35. 解释常规流与包含块的概念  
答：常规流：文本从左向右、从上向下显示，也是传统 HTML 文档的文本布局。    
包含块：一个元素的“布局上下文”。    

/常规流
如果一个元素没有定位没有浮动，那么他就处于常规流  
处于常规流的元素默认会从上到下，从左到右摆放且不会重叠（使用负margin的情况除外），一个元素会跟着它前面的元素摆放（布局），他也会影响其后面元素的摆放；  

包含块  
包含块是一个元素的布局上下文：即一个元素的布局除自身属性以外，仅受其包含块的影响。此模型可以将布局行为限定在一个范围内。  

不同情况下一个元素的包含块是以不同方式确定的：  
常规流元素中：是其最近的块级祖先    （ie6 九宫格）或表单元素
浮动元素：同常规流；
固定定位元素：视口；
绝对：是其定位祖先   无法找到定位祖先：根元素；


与布局上端的宽高百分比很多时候都是取包含块的对应宽高

36. 在各种情况下，一个元素的包含块分别是什么？
答：1.根元素的包含块称为初始包含块，通常它的大小就是可视区域的大小。  
2.position：static 或者 relative 的其他元素，他的包含块就是最近祖先的盒模型中的内容区域（不论其父元素是行内元素还是块级元素）。  
3.position：fixed，该元素脱离 HTML 文档，其包含块为当前屏幕的可视窗口。  
4.position：absolute的元素的包含块由最近的position：relative，absolute，fixed的祖先决定。如果该祖先元素是块级元素，那么包含块是其内边距所包围的区域（注意不是 content 区域）；如果是行内元素，那么元素的包含块是由该祖先第一个和最后一个 inline 框的内边距区域以及 direction 决定的.  

37. 默写与背景相关的属性并说明每个属性的作用和会产生的效果  
答：background-image:url() 添加图片；  
background-color 背景颜色；  
background-position 背景图片定位；  
background-repeat 背景图片是否重复；  
background-size 设置背景图片的尺寸来适应容器； 
background-attachment 设置背景图像的在 viewport 的位置，是固定（scroll）还是随之包含块滚动（fixed）还是相对于元素内容固定（local）；  
background-clip：设置元素的背景图像或颜色（background-image 或 background-color）是否延伸到边框下面；  
background-origin  规定了指定背景图片（backgroun-image）属性的原点位置的背景相对区域。  


38. 如何实现单方向的盒子阴影？  
答：x 轴或 y 轴 某一方向的偏移值为 0。  

/问题缘由：阴影一旦模糊，其面积会大于所属元素；
使用负的扩散半径会让阴影面积比所属元素小，再做单项偏移即可。  


39. 默写与表格布局相关的 CSS 属性，并说明相关属性的作用  
答：border-collapse 决定表格的边框是分开是合并，separate 相邻单元格都拥有独立的边框，collapse 相邻单元格共享边框；    
border-spacing h v 指定相邻单元格边框之间的距离（只适用于 border-collapse：separate）；  
caption-side  指定表格标题<caption>的位置；  
empty-cells show/hide 定义了 user agent 应该怎么来渲染表格中么有可见内容的单元格的边框和背景。  
table-layout 定义了用于布局表格单元格，行和列的算法；  
vertical-align 指定表格单元格的（table-cell）元素的垂直对齐方式。   

/ display:table/inline-table,  
table-column-group,  
table-column,  
table-row-group,  
table-row,  
table-cell

40. `visibility:hidden`，`display:none`，`opacity:0`分别有什么不同？  
答：visibility：hidden，元素隐藏，但不会改变页面布局，也不会触发该元素已经绑定的事件；  
display：none， 元素隐藏，改变页面布局，可以理解成在页面中把该元素删除掉一样；    
visibility 属性可以动画 display 属性无法以任何形式动画；  
opacity：0， 元素隐藏，不会改变页面布局，并且如果该元素已经绑定一些事件，如 click 事件，那么点击该区域，也能触发点击点击事件。  

/visibility：hidden/collapse  元素消失，位置保留，无法交互  
在表格 行/列/行组/列组 中使用时：  
hidden时隐藏表格保留位置  
collapse是不保留位置，相当于 display：none；  

display：none  元素从常规流中消失；  

opacity：0 透明度为0，可交互，可选中；

41. 当页面中出现表示时间的文字但表意不明确时，比较优雅且富有语义的做法是什么？  
答：<time datetime="2018-12-5">前天</time>    
常见于 timeline 形式的交互中

42. CSS 中一般为何不使用 `cm`，`mm` 等长度单位？  
答：不精确  
/第一，不符合预期  
第二，屏幕一般不使用实际物理单位来度量，而使用像素来度量

43. 表格布局中各层的层次是？  
答：
从上往下：
单元格cell  
行row   
行组 row group    
列  col  
列组 col group   
表  table  
   
44. 为什么要在文件的最后一行加一个回车？   
答： 便于后续编辑；
文件在拼接时更可能不出错；
diff中不会有额外的输出。


45. 用 CSS 画出一个半圆形，分别给出实心与空心的的画法。实心和空心分别给出两种方案。  
答：circle 
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
<style>
	div{
	width:300px;
	height:150px;
	background-color:red;
	border-radius:150px 150px 0 0;
}	
</style>
</head>
<body>
<div></div>
</body>
</html>
```



46. 表单元素有哪些伪类选择器？  
答：:checked   radio/checkbox 
:focus  
:valid   
:invalid   
:required   
:optional   
:default  

:in-range/:out-of-range

47. 如何禁用 textarea 元素默认的可缩放行为？  
答：textarea{
  style=resize:none;
}

/ resize:none / both / horizontal / vertical  


48. reset与 normalize 分别是什么，区别是什么，何种场景会使用到？      
答：reset 去掉所有元素的默认样式；  
normalize 让页面在所有浏览器显示效果相同，调整显示不一致的样式。

/reset:
是一套用于把页面的样式统一成一个特定风格的 css 代码

normalize：
是用来让不同浏览器显示页面尽量接近各浏览器默认的样式的。

49. 表布局中边框合并的原则是什么？  
答：border-style：hidden 优先级最高，  
边框粗细；
边框样式；
  双边框；
  单边框；
  虚线框；
来源
  布局层次：
    从上往下：
      单元格cell  
      行row   
      行组 row group    
      列  col  
      列组 col group   
      表  table 
border-style：none优先级最低。   

50. 如何让背景图片从元素的左下角向上偏移5像素，往右偏移3像素；图片不重复平铺？写出代码。  
答：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
<style>
	div{
	height:300px;
	height:300px;
	border:1px solid;
	background-image:url(https://image.uisdc.com/wp-content/uploads/2014/07/085625ht3.jpg);
	background-size:150px 150px;
	background-repeat:no-repeat;
	background-position:left 3px bottom 5px；
  /* background-position:3px calc(100% - 5px) */
}
</style>
</head>
<body>
	<div></div>
</body>
</html>
```
51. 写出创建如下目录结果的命令行脚本（注：有扩展名的为文件，没有扩展名的为文件夹）。
    ```
    a
    │  readme.md
    │
    ├─foo
    │  └─c
    └─bar
        │  a.txt
        │  b.txt
        │
        └─y
                a.js
    ```
答：
```
mkdir -p a{foo/{c},bar/{y}}

52. 中英互翻

    omit忽略，  
    multiple多，  
    驼峰式camel，      camel
    中划线式kebab case，  
    layout布局，  
    typo错误，  
    code review代码审查，  
    半径radius，直径diameter  
    config配置，
    集合set，  
    矩形rectangle，  
    binary二进制，  
    decimal十进制，  
    十六进制hexadecimal，  
    八进制octal，  
    SEO搜索引擎优化，  Search Engine Optimise
    HTML实体 HTML entity，  
    语义化 semanticization，  
    兼容性compatibility，  
    quirk俏皮话，  
    reference参考，  
    大小写敏感case sensitive，  
    别名alias  （font-awesome）
