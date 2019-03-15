/* -----------------全屏布局--flex+定宽布局----------------- */

html,body,#wrapper{height: 100%; overflow: hidden; margin: 0;}

#wrapper{text-align: center;}
#wrapper{display: flex; flex-direction: column;}

#header{background-color: #ccc;}
#footer{background-color: #ccc;}

#main{flex: 1; display: flex;}
#main .left{background-color: orange;}
#main .right{flex: 1; overflow-y: auto;}
#main .right-inner{min-height: 1000px; background-color: blue;}