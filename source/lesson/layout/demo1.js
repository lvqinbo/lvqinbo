/* -------------------------水平居中------------------------- */
/* 方案1 */
.parent1{text-align: center;}
.item1{display: inline-block;}

/* 方案2 */
.parent2{}
.item2{display: table; margin: 0 auto;}

/* 方案3 */
.parent3{position: relative;}
.item3{position: absolute; left: 50%; transform: translateX(-50%);}

/* 方案4 */
.parent4{display: flex; justify-content: center;}
.item4{}

/* 方案5 */
.parent5{display: flex;}
.item5{margin: 0 auto;}

/* -------------------------垂直居中------------------------- */
/* 方案1 */
.vertical1{display: table-cell; vertical-align: middle;}
.vertical1 .item1{}

/* 方案2 */
.vertical2{position: relative;}
.vertical2 .item2{position: absolute; top: 50%; transform: translateY(-50%);}

/* 方案3 */
.vertical3{display: flex; align-items: center;}
.vertical3 .item3{}

/* -------------------------水平垂直居中------------------------- */
/* 方案1 */
.mid1{text-align: center; display: table-cell; vertical-align: middle;}
.mid1 .item{display: inline-block;}

/* 方案2 */
.mid2{position: relative;}
.mid2 .item{position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);}

/* 方案3 */
.mid3{display: flex; justify-content: center; align-items: center;}
.mid3 .item{}