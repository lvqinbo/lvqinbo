/* -----------------全屏布局+定宽----------------- */

html,body,#wrapper{height: 100%; overflow: hidden; margin: 0;}

#header,#footer{text-align: center; color: #fff; font-size: 30px;}
#header,#main,#footer{position: absolute; left: 0; right: 0;}

#header{height: 60px; top: 0; background-color: #2196F3;}
#footer{height: 40px; bottom: 0; background-color: #607D8B;}
#main{top: 60px; bottom: 40px;}

#main .left,#main .right{position: absolute; top: 0; bottom: 0;}
#main .left{width: 200px; left: 0; background-color: blue;}
#main .right{left: 200px; right: 0; overflow-y: auto;}
#main .right-inner{min-height: 1000px;}