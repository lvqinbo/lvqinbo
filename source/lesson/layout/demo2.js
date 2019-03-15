
/* 方案1 */
.wrap1 .parent{}
.wrap1 .left{width: 100px; float: left;}
.wrap1 .right{margin-left: 120px;}

/* 方案2 */
.wrap2 .parent{}
.wrap2 .right-fix{width: 100%; float: right; margin-left: -100px;}
.wrap2 .left{width: 100px; float: left; position: relative;}
.wrap2 .right{margin-left: 120px;}

/* 方案3 */
.wrap3 .parent{}
.wrap3 .left{width: 100px; margin-right: 20px; float: left;}
.wrap3 .right{overflow: hidden;}

/* 方案4 */
.wrap4 .parent{width: 100%; display: table; table-layout: fixed;}
.wrap4 .left, .wrap4 .right{display: table-cell;}
.wrap4 .left{width: 100px; padding-right: 20px;}
.wrap4 .right{height: 40px;}

/* 方案5 */
.wrap5 .parent{display: flex;}
.wrap5 .left{width: 100px; padding-right: 20px;}
.wrap5 .right{flex: 1;}