/* -----------------全屏布局+百分百----------------- */

html,body,#wrapper{height: 100%; overflow: hidden; margin: 0;}

#header,#main,#footer{width: 100%; position: absolute; left: 0; right: 0;}
#header,#footer{text-align: center; color: #fff; font-size: 20px;}

#header{height: 10%; top: 0; background-color: #2196F3;}
#footer{height: 10%; bottom: 0; background-color: #607D8B;}
#main{height: 80%; top: 10%; bottom: 10%;}

#main .left,#main .right{height: 100%; position: absolute; top: 0; bottom: 0;}
#main .left{width: 15%; height: 100%; left: 0; background-color: #00BCD4;}
#main .right{left: 15%; right: 0; overflow-y: auto; background-color: #fff;}
#main .right-inner{min-height: 1000px;}