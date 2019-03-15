	
/* 方案1 */
.wrap4 .parent{display: table; width: 100%; table-layout: fixed;}
.wrap4 .left,.wrap4 .right{display: table-cell;}
.wrap4 .left{width: 100px; padding-right: 20px;}	


/* 方案2 */
.wrap5 .parent{display: flex;}
.wrap5 .left{width: 100px; padding-right: 20px;}
.wrap5 .right{flex: 1;}

/* 方案3 */
.wrap6 .parent{overflow: hidden;}
.wrap6 .left,.wrap6 .right{margin-bottom: -9999px; padding-bottom: 9999px;}
.wrap6 .left{width: 100px; padding-right: 20px; float: left;}
.wrap6 .right{overflow: hidden;}