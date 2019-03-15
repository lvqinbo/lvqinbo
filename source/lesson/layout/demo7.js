/* -----------------flex弹性布局----------------- */

.item{padding: 10px; margin: 10px; background-color: #8BC34A;}

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