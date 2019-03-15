
/* 方案1 */
.wrap1 .parent{margin-left: -20px;}
.wrap1 .parent .column{float: left; width: 25%; padding-left: 20px; box-sizing:border-box;}

/* 方案2 */
.wrap2 .parent-fix{margin-left: -20px;}
.wrap2 .parent{display: table; width: 100%; table-layout: fixed;}
.wrap2 .column{display: table-cell; padding-left: 20px;}

/* 方案3 */
.wrap3 .parent{display: flex;}
.wrap3 .column{flex: 1;}
.wrap3 .column+ .column{padding-left: 20px;}