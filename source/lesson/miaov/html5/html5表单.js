// 表单元素

// 文本
< input type="text" placeholder="用户名/邮箱/手机号" required />
placeholder="提示信息"
required	必填字段

// 手机号
< input type="tel" placeholder="请输入手机号" autocomplete="off" required />
autocomplete="off" off 为不记住上次输入的信息 on 为记住

// 邮箱
< input type="email" placeholder="请输入电子邮箱" placeholder="Example@163.com" autocomplete="off" required />

// 地址
< input type="address" placeholder="请输收货地址" placeholder="如：北京市朝阳区东交民巷44号" autocomplete="off" required />

// 选项
< input type="text" list="vallist" autocomplete="off">
< datalist id="vallist">
	< option value="bj">北京< /option>
	< option value="sh">上海< /option>
	< option value="gz">广州< /option>
	< option value="sz">深圳< /option>
< /datalist>

// 查询
< input type="search" autofocus placeholder="请输入要查询的内容" >
autofocus 获取鼠标焦点

// number
< input type="number" value="1" min="1" max="10" >
value 	设置的初始值
min		最小值  
max		最大值

// range
< input type="range" value="5" min="1" max="10" step="1" >
step	拖动设置的值

// UTC时间
< input type="datetime" >

// 当地时间
< input type="datetime-local" >

// 第几周
< input type="week" >

// 日期
< input type="date" >

// 月份
< input type="month" >

// 小时分钟
< input type="time" >

// 正则匹配
< input type="text" pattern="\d{4,10}" placeholder="请输入5-10位之间字母" >
