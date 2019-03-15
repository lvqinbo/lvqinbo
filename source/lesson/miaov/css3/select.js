var data = [];

var dataStr = '.class<br/>\
.box<br/>\
选择class="box"的所有元素<br/>\
<br/>\
#id<br/>\
#wrap<br/>\
选择id="wrap"的所有元素<br/>\
<br/>\
element<br/>\
a<br/>\
选择所有的 a 元素<br/>\
<br/>\
element,element<br/>\
div,p<br/>\
选择所有的 div 元素和 p 元素<br/>\
<br/>\
element element<br/>\
div span<br/>\
选择所有的 div 元素内部的 span 元素<br/>\
<br/>\
element>element<br/>\
div>p<br/>\
选择父级为 div 元素的所有 p 元素<br/>\
<br/>\
element+element<br/>\
div+p<br/>\
选择紧接在 div 元素之后的 p 元素<br/>\
<br/>\
[attribute]<br/>\
[href]<br/>\
选择带有 href 属性的所有元素<br/>\
<br/>\
[attribute=value]<br/>\
[target=_blank]<br/>\
选择 target="blank" 的所有元素<br/>\
<br/>\
[attribute~=value]<br/>\
[title~=flower]<br/>\
选择 title 属性包含单词 “flower” 的所有元素<br/>\
<br/>\
[attribute|=value]<br/>\
[lang|=en]<br/>\
选择 lang 属性值以 "en" 开头的所有元素<br/>\
<br/>\
:link<br/>\
a:link<br/>\
选择所有未被访问的链接<br/>\
<br/>\
visited<br/>\
a:visited<br/>\
选择所有已被访问的链接<br/>\
<br/>\
:active<br/>\
a:active<br/>\
选择活动的链接<br/>\
<br/>\
:hover<br/>\
a:hover<br/>\
选择鼠标指针位于其上的链接<br/>\
<br/>\
:hocus<br/>\
input:focus<br/>\
选择活动焦点的 input 元素<br/>\
<br/>\
:first-letter<br/>\
p:first-letter<br/>\
选择每个 p 元素的首字母<br/>\
<br/>\
:first-line<br/>\
p:first-line<br/>\
选择每个 p 元素的首行<br/>\
<br/>\
:first-child<br/>\
p:first-child<br/>\
选择属于父级元素的第一个子元素的每一个 p 元素<br/>\
<br/>\
:before<br/>\
p:before<br/>\
在每个 p 元素的内容之前插入内容。<br/>\
<br/>\
:after<br/>\
p:after<br/>\
在每个 p 元素的内容之后插入内容。<br/>\
<br/>\
:lang(language)<br/>\
p:lang(it)<br/>\
选择带有以 "it" 开头的 lang 属性值的每个 p 元素<br/>\
<br/>\
element1~element2<br/>\
p~ul<br/>\
选择前面有 p 元素的每个 ul 元素<br/>\
<br/>\
[attribute^=value]<br/>\
a[src^="http"]<br/>\
选择其 src 属性值以 "https" 开头的每个 a 元素<br/>\
<br/>\
[attribute$=value]<br/>\
a[src$=".pdf"]<br/>\
选择其 src 属性以 ".pdf" 结尾的所有 a 元素<br/>\
<br/>\
[attribute*=value]<br/>\
a[src*="abc"]<br/>\
选择其 src 属性中包含 "abc" 子串的每个 a 元素<br/>\
<br/>\
:first-of-type<br/>\
p:first-of-type<br/>\
选择属于其父元素的首个 p 元素的每个 p 元素<br/>\
<br/>\
:last-of-type<br/>\
p:last-of-type<br/>\
选择属于其父元素的最后 p 元素的每个 p 元素<br/>\
<br/>\
:only-of-type<br/>\
p:only-of-type<br/>\
选择属于其父元素唯一的 p 元素的每个 p 元素<br/>\
<br/>\
:only-child<br/>\
p:only-child<br/>\
选择属于其父元素的唯一子元素的每个 p 元素<br/>\
<br/>\
:nth-child(n)<br/>\
p:nth-child(2)<br/>\
选择属于其父元素的第二个子元素的每个 p 元素<br/>\
<br/>\
:nth-last-child(n)<br/>\
p:nth-last-child(2)<br/>\
同上，从最后一个子元素开始计数<br/>\
<br/>\
:nth-of-type(n)<br/>\
p:nth-of-type(2)<br/>\
选择属于其父元素第二个 p 元素的每个 p 元素<br/>\
<br/>\
:nth-last-of-type(n)<br/>\
p:nth-last-of-type(2)<br/>\
同上，但是从最后一个子元素开始计数<br/>\
<br/>\
:last-child<br/>\
p:last-child<br/>\
选择属于其父元素最后一个子元素每个 p 元素<br/>\
<br/>\
:root<br/>\
:root<br/>\
选择文档的根元素<br/>\
<br/>\
:empty<br/>\
p:empty<br/>\
选择没有子元素的每个 p 元素（包括文本节点）<br/>\
<br/>\
:target<br/>\
#news:target<br/>\
选择当前活动的 #news 元素<br/>\
<br/>\
:enabled<br/>\
input:enabled<br/>\
选择每个启用的 input 元素<br/>\
<br/>\
:disabled<br/>\
input:disabled<br/>\
选择每个禁用的 input 元素<br/>\
<br/>\
:checked<br/>\
input:checked<br/>\
选择每个被选中的 input 元素<br/>\
<br/>\
:not(selector)<br/>\
:not(p)<br/>\
选择非 p 元素的每个元素<br/>\
<br/>\
::selection<br/>\
::selection<br/>\
选择被用户选取的元素部分<br/>\
<br/>\
文字透明度<br/>\
rgba<br/>\
color: rgba(255,255,255,.2)<br/>\
<br/>\
文字阴影 <br/>\
text-shadom:x轴 y轴 模糊 颜色<br/>\
text-shadom:5px 2px 3px gray;<br/>\
<br/>\
文字描边 <br/>\
text-stroke: width color;<br/>\
-webkit-text-stroke: 1px yellow;<br/>\
<br/>\
文字排列 <br/>\
direction: rtl; <br/>\
一定要配合unicode-bidi: bidi-override 使用<br/>\
<br/>\
文字溢出隐藏 <br/>\
text-overflow: ellipsis;<br/>\
white-space: nowrap; text-overflow: ellipsis; overflow: hidden; 3个配合使用<br/>\
<br/>\
自定义字体<br/>\
@font-face { }<br/>\
font-family: SketchRockwell; <br/>\
src: url(‘FZCCHJW.TTF’); <br/>\
<br/>\
动画属性  @keyframes 名字{}<br/>\
animation: 名字 时间 延迟时间 次数<br/>\
animation: move 1s 2s infinite;<br/>\
<br/>\
动画暂停<br/>\
规定动画是否正在运行或暂停<br/>\
animation-play-state: pause<br/>\
<br/>\
background-attachment<br/>\
background-attachment: fixed;<br/>\
设置背景图像是否固定或者随着页面的其余部分滚动<br/>\
<br/>\
background-color<br/>\
background-color : #ff0;<br/>\
设置元素的背景颜色<br/>\
<br/>\
background-image<br/>\
background-image: url(bgimage.gif);<br/>\
设置元素的背景图像<br/>\
<br/>\
background-position<br/>\
background-position: left|center|right/具体数值;<br/>\
设置背景图像的开始位置<br/>\
<br/>\
background-repeat<br/>\
background-repeat: no-repeat|repeat-x|repeat-y;<br/>\
设置是否及如何重复背景图像<br/>\
<br/>\
background-clip<br/>\
background-clip: content-box|border-box|padding-box;<br/>\
规定背景的绘制区域:裁剪到内容框|裁剪到边框盒|裁剪到内边距框<br/>\
<br/>\
background-size<br/>\
background-size: length|percentage|cover|contain;<br/>\
图片的尺寸: 宽高|百分百|完全覆盖背景区域|图像扩展至最大尺寸适应内容区域<br/>\
<br/>\
border: width style color<br/>\
border: 1px solid #ddd;<br/>\
设置所有的边框属性<br/>\
<br/>\
border-bottom<br/>\
border-bottom: thick dotted #ff0000;<br/>\
设置所有的下边框属性<br/>\
<br/>\
border-bottom-color<br/>\
border-bottom-color: red;<br/>\
设置下边框的颜色<br/>\
<br/>\
border-bottom-style<br/>\
border-bottom-style: solid|dotted|dashed;<br/>\
设置下边框的样式<br/>\
<br/>\
border-bottom-width<br/>\
border-bottom-width: 5px;<br/>\
设置下边框的宽度<br/>\
<br/>\
border-color<br/>\
border-color: red;<br/>\
设置四条边框的颜色<br/>\
<br/>\
outline<br/>\
outline: #00FF00 dotted thick || none;<br/>\
在一个声明中设置所有的轮廓属性<br/>\
<br/>\
border-radius<br/>\
border-radius: 20px||10%;<br/>\
设置边框的四条边的角度<br/>\
<br/>\
border-bottom-left-radius<br/>\
border-bottom-left-radius: 2em;<br/>\
定义边框左下角的形状<br/>\
<br/>\
border-image<br/>\
border-image: url(border.png) 30 30 round;<br/>\
简写属性，设置所有 border-image-* 属性<br/>\
<br/>\
border-image-outset: length|number<br/>\
border-image-outset: 30 30;<br/>\
规定边框图像区域超出边框的量<br/>\
<br/>\
border-image-repeat: stretch||repeat||round;<br/>\
border-image-repeat: round;<br/>\
图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)<br/>\
<br/>\
border-image-slice: number||%||fill;<br/>\
border-image-slice: 50% 50%;<br/>\
规定图像边框的向内偏移<br/>\
<br/>\
border-image-source: none||image;<br/>\
border-image-source: url(bgimage.gif);<br/>\
规定用作边框的图片<br/>\
<br/>\
border-image-width: number|%|auto;<br/>\
border-image-width: 30 30;<br/>\
规定图片边框的宽度<br/>\
<br/>\
box-shadow: h-shadow v-shadow [blur] [spread] [color] [inset];<br/>\
box-shadow: 水平阴影 垂直阴影  模糊 尺寸 颜色 内阴影<br/>\
向方框添加一个或多个阴影<br/>\
<br/>\
overflow: auto || hidden; <br/>\
overflow-y: auto;<br/>\
overflow-x: auto;<br/>\
<br/>\
box-align<br/>\
box-align: start|end|center|baseline|stretch;<br/>\
规定如何对齐框的子元素<br/>\
<br/>\
box-direction<br/>\
box-direction: normal|reverse|inherit<br/>\
规定框的子元素的显示方向<br/>\
<br/>\
box-flex: value;<br/>\
box-flex: 1.0<br/>\
规定框的子元素是否可伸缩<br/>\
<br/>\
box-flex-group: integetr;<br/>\
box-flex-group: 2;<br/>\
将可伸缩元素分配到柔性分组<br/>\
<br/>\
box-lines: single || multiple;<br/>\
box-lines: multiple;<br/>\
规定当超出父元素框的空间时，是否换行显示<br/>\
<br/>\
box-original-group: integer;<br/>\
box-original-group: 1;<br/>\
规定框的子元素的显示次序<br/>\
<br/>\
box-orient<br/>\
box-orient: horizontal|vertical|inline-axis|block-axis|inherit;<br/>\
规定框的子元素是否应水平或垂直排列<br/>\
<br/>\
box-pack<br/>\
box-pack: start|end|center|justify;<br/>\
规定水平框中的水平位置或者垂直框中的垂直位置<br/>\
<br/>\
column-count: number||auto;<br/>\
column-count: 4;<br/>\
规定元素应该被分隔的列数<br/>\
<br/>\
column-gap: length||normal;<br/>\
column-gap: 20px;<br/>\
规定列之间的间隔<br/>\
<br/>\
column-rule: width style color;<br/>\
column-rule:3px outset #ff00ff;<br/>\
设置所有 column-rule-* 属性的简写属性<br/>\
<br/>\
column-span: 1||all;<br/>\
column-span: all;<br/>\
规定元素应该横跨的列数<br/>\
<br/>\
colmun-width: auto||length;<br/>\
column-width: 100px;<br/>\
规定列的宽度<br/>\
<br/>\
column: column-width column-count;<br/>\
column: 100px 3;<br/>\
规定设置 column-width 和 column-count 的简写属性<br/>\
<br/>\
transform: <br/>\
translate(x,y)|translate3d(x,y,z)|scale(x,y)|rotate(angle)|skew(x,y)|perspective(n)<br/>\
向元素应用 2D 或 3D 转换<br/>\
<br/>\
transform-origin: x-axis y-axis z-axis;<br/>\
transform-origin: 20% 40%;<br/>\
允许你改变被转换元素的位置<br/>\
<br/>\
transform-style: flat|preserve-3d;<br/>\
transform-style: preserve-3d;<br/>\
规定被嵌套元素如何在 3D 空间中显示<br/>\
<br/>\
perspective: number||none;<br/>\
perspective: 500px;<br/>\
规定 3D 元素的透视效果<br/>\
<br/>\
perspective-origin: x-axis y-axis;<br/>\
perspective-origin: 10% 10%;<br/>\
规定 3D 元素的底部位置<br/>\
<br/>\
transition: property duration timing-function delay;<br/>\
transition: width 1s linear 2s;<br/>\
简写属性，用于在一个属性中设置四个过渡属性<br/>\
<br/>\
text-overflow: clip|ellipsis|string;<br/>\
text-overflow: 修剪|省略|使用给定文字代表<br/>\
规定当文本溢出包含元素时发生的事情<br/>\
<br/>\
text-shadow：h-shadow v-shadow blur color;<br/>\
text-shadom: 5px 5px 5px #FF0000;<br/>\
向文本添加阴影。<br/>\
<br/>\
text-wrap: normal|none|unrestricted|suppress;<br/>\
text-wrap: none;	<br/>\
规定文本的换行规则<br/>\
<br/>\
word-break: normal|break-all|keep-all;<br/>\
word-break:hyphenate;<br/>\
规定非中日韩文本的换行规则<br/>\
<br/>\
word-wrap: normal|break-word;<br/>\
word-wrap:break-word;<br/>\
允许对长的不可分割的单词进行分割并换行到下一行';

var d = dataStr.split('<br/><br/>');
for (var i = 0; i < d.length; i++) {
	var c = d[i].split('<br/>');
	data.push(c);
};
// console.log(data);