/* -----------------flex布局-- self元素上下对齐方式----------------- */

.item{padding: 10px; margin: 10px; background-color: #ddd;}

.wrap{display: flex;}
.item1{line-height: 100px;}
.fs .item2{align-self: flex-start;}
.fe .item2{align-self: flex-end;}
.fc .item2{align-self: center;}
.s .item2{align-self: stretch;}
.b .item2{align-self: baseline;}