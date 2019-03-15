/* -----------------------水平居中----------------------- */
方案一：inline-block + text-align
.parent{text-align: center;}
.child{display: inline-block;}

方案二：table
.child{display: table; margin: 0 auto;}

方案三：
.parent{position: relative;}
.child{position: absolute; left: 50%; transform: translateX(-50%);}

方案四：
.parent{display: flex; justify-content: center;}

方案五：
.parent{display: flex;}
.clild{margin: 0 auto;}

/* -----------------------垂直居中----------------------- */
方案一：
table-cell + vertical-align
.parent{display: table-cell; vertical-align: middle;}

方案二：
table-cell + vertical-align
.parent{position: relative; }
.child{position: absolute; top: 50%; transform: translateY(-50%);}

方案三：
flex + align-items
.parent{display: flex; align-items: center;}

/* -----------------------水平垂直居中----------------------- */

方案一：
table-cell + vertical-align + text-align + inline-block
.parent{display: table-cell; vertical-align: middle; text-align: center;}
.child{display: inline-block;}

方案二：
position + transform
.parent{position: relative; }
.child{position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);}

方案三：
flex + justify-content + align-items
.parent{display: flex; justify-content: center; align-items: center;}

/* -----------------------两列布局+定宽+自适应----------------------- */

方案一：float + margin
.left{float: left; width: 100px;}
.right{margin-left: 120px;}

方案二：float + margin + (fix)
.right-fix{width: 100%; float: right; margin-left: -100px;}
.left{float: left; width: 100px; position: relative;}
.right{margin-left: 120px;}

方案三：float + overflow
.left{float: left; width: 100px; margin-right: 20px;} 
.right{overflow: hidden;}

方案4：table
.parent{display: table; width: 100%; table-layout: fixed;}
.left, .right{display: table-cell; width: 100px; padding-right: 20px;}

方案5：flex
.parent{display: flex;} .left{width: 100px; margin-right: 20px;} .right{flex: 1;}

/* -----------------------两列布局+定宽+自适应----------------------- */

方案1：/*float + overflow */
.left{float: left; margin-right: 20px;}
.right{overflow: hidden;}  .left p{width: 100px;}

方案2：/*table */
.parent{width: 100%; display: table;}
.left,.right{display: table-cell;}
.left{width: 0.1%; padding-right: 20px;}
.left p{width: 200px;}

方案3：/*flex */
.parent{display: flex;}  .left{margin-right: 20px;}
.right{flex: 1;}  .left p{width: 100px;}

方案4：/*float + overflow */
.left,.center{float: left; margin-right: 10px;}
.right{overflow: hidden;}  
.left p, .center p{width: 100px; }

/* -----------------------两列布局+不定宽+自适应----------------------- */

方案1：.parent{margin-left: -20px;}
.parent .column{float: left; width: 25%; padding-left: 20px; box-sizing:border-box;}

方案2：.item2 .parent-fix{margin-left: -20px;}
.item2 .parent{display: table; width: 100%;  table-layout: fixed; }
.item2 .column{display: table-cell; padding-left: 20px;}

/* -----------------------多列布局+等分布局----------------------- */

方案1：
.parent{margin-left: -20px;}
.parent .column{float: left; width: 25%; padding-left: 20px; box-sizing:border-box;}

方案2：
.parent-fix{margin-left: -20px;}
.parent{display: table; width: 100%;  table-layout: fixed; }
.parent .column{display: table-cell; padding-left: 20px;}

方案3：
.parent{display: flex;}
.column{flex: 1;}
.column+ .column{padding-left: 20px;}

/* -----------------------全屏布局+定宽+定位----------------------- */

html,body,#wrapper{height: 100%; overflow: hidden;}

#header,#main,#footer{position: absolute; left: 0; right: 0;}
#header{height: 60px; top: 0; background-color: #2196F3;}
#footer{height: 40px; bottom: 0; background-color: #607D8B;}
#main{top: 60px; bottom: 40px;}

#main .left,#main .right{position: absolute; top: 0; bottom: 0;}
#main .left{width: 200px; left: 0; background-color: blue;}
#main .right{left: 200px; right: 0; overflow-y: auto;}
#main .right-inner{min-height: 1000px;}

/* -----------------------全屏布局+百分比+定位----------------------- */
html,body,#wrapper{height: 100%; overflow: hidden; margin: 0;}
#header,#main,#footer{width: 100%; position: absolute; left: 0; right: 0;}

#header{height: 10%; top: 0;}
#footer{height: 10%; bottom: 0;}
#main{height: 80%; top: 10%; bottom: 10%;}

#main .left, #main .right{height: 100%; position: absolute; top: 0; bottom: 0;}
#main .left{width: 15%; left: 0;}
#main .right{left: 15%; right: 0; overflow-y: auto;}
#main .right-inner{min-height: 1000px;}

/* -----------------------全屏布局+定宽+flex----------------------- */
html,body,#wrapper{height: 100%; overflow: hidden; margin: 0;}

#wrapper{display: flex; flex-direction: column;}
#header{height: 50px;}
#footer{height: 80px;}
#main{flex: 1; display: flex;}
#main .left{width: 200px;}
#main .right{flex: 1; overflow-y: auto;}
#main .right-inner{min-height: 1000px;}

/* -----------------------全屏布局+百分比+flex----------------------- */
html,body,#wrapper{height: 100%; overflow: hidden; margin: 0;}

#wrapper{display: flex; flex-direction: column;}
#header{height: 8%;}
#footer{height: 8%;}
#main{flex: 1; display: flex;}
#main .left{width: 18%;}
#main .right{flex: 1; overflow-y: auto;}
#main .right-inner{min-height: 1000px;}

/* -----------------------全屏布局+flex+自适应----------------------- */
html,body,#wrapper{height: 100%; overflow: hidden; margin: 0;}

#wrapper{display: flex; flex-direction: column;}
#header{}
#footer{}
#main{flex: 1; display: flex;}
#main .left{}
#main .right{flex: 1; overflow-y: auto;}
#main .right-inner{min-height: 1000px;}

/* -----------------------flex弹性布局----------------------- */
/* 正常排序 */
.box1{display: flex;}

/* 倒序排序 */
.box2{ display: flex; flex-direction: row-reverse;}

/* 纵向排序 */
.box3{display: flex; flex-direction: column;}	

/* 纵向倒序排序 */
.box4{display: flex; flex-direction: column-reverse;}

/* 均分 */
.box5{display: flex;}
.box5 .item{width: 300px;}

/* 包含 */
.box6{display: flex; flex-wrap: wrap;}
.box6 .item{width: 300px;}	

/* 包含 */
.box7{display: flex; flex-wrap: wrap-reverse;}
.box7 .item{width: 300px;}

/* -----------------------flex布局----------------------- */
.wrap {display: flex; flex-flow: row wrap;}
.wrap {align-content: flex-start;}
.wrap {align-content: flex-end;}
.wrap {align-content: center;}
.wrap {align-content: space-between;}
.wrap {align-content: space-around;}
.wrap {align-content: stretch;} 

/* -----------------------flex布局 上下对齐方式----------------------- */
.wrap{display: flex;}
.item1{line-height: 100px;}
.item2{line-height: 60px;}
.fs{align-items: flex-start;}
.fe{align-items: flex-end;}
.fc{align-items: center;}
.s{align-items: stretch;}
.b{align-items: baseline;}

/* -----------------------flex布局 单独子元素对齐方式----------------------- */
.wrap{display: flex;}
.item1{line-height: 100px;}
.fs .item2{align-self: flex-start;}
.fe .item2{align-self: flex-end;}
.fc .item2{align-self: center;}
.s .item2{align-self: stretch;}
.b .item2{align-self: baseline;}

/* -----------------------flex布局 左右对齐方式----------------------- */
.wrap{display: flex;}
.fs{justify-content: flex-start;}
.fe{justify-content: flex-end;}
.fc{justify-content: center;}
.sb{justify-content: space-between;}
.sr{justify-content: space-around;}

