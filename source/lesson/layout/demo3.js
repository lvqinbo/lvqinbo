/* ------------------不定宽+自适应------------------ */

/* 方案1 */
.wrap1 .parent{width: 100%; display: table;}
.wrap1 .left,.wrap6 .right{display: table-cell;}
.wrap1 .left{width: 0.1%; padding-right: 20px;}
.wrap1 .left p{width: 100px;}

/* 方案2 */
.wrap2 .parent{display: flex;}
.wrap2 .left{width: 100px; margin-right: 20px;}
.wrap2 .right{flex: 1;}
.wrap2 .left p{width: 100px;}	

/* 方案3 */
.wrap3 .parent{}
.wrap3 .left, .wrap3 .center{float: left; margin-right: 10px;}
.wrap3 .right{overflow: hidden;}
.wrap3 .right p{width: 100%;}
.wrap3 .left p, .wrap8 .center p{width: 100px;}