---
title: HTML

next: input
prev: false
---

::: tip 提醒
这里是tip容器
:::

::: warning 警告
这里是警告容器
:::

::: danger 危险
这里是
:::

``` js{2}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
[锚点链接](/html#H1标题)
#### 这里是Emoji表情 :tada:
:100: :rocket:

| 序号          | 订单编号      | 订单金额|
| -------------|:-------------:| ------:|
| 1             | 20180101     | $1600  |
| 2             | 20180102     |   $12  |
| 3             | 20180103     |    $1  |
[[toc]]

# H1标题

## h2标题
### h3标题
### h3标题

## h2标题
### h3标题
### h3标题


# 插值表达式
1 + 1 的结果是 {{1+1}}

列表渲染的结果是：<span v-for="number in 5">{{number}}</span>

<!--样式内容-->
<style>
.box {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
  background-color: #58a;
}
</style>

<!--.md内容-->
#### 使用原生的JS和CSS
<div id="container"></div>

<!--js内容-->
<script>
window.onload = function() {
  var dom = document.getElementById('container');
  dom.innerHTML = 'box content'
  dom.className = 'box'
}
</script>


<!--样式内容-->
<style lang="stylus">
.box
  width: 100%
  height: 100px
  line-height: 100px
  text-align: center
  color: #fff
  background-color: #fb3
</style>

<!--.md内容-->
#### 使用原生的JS和CSS
<div id="container"></div>

<!--js内容-->
<script>
window.onload = function() {
  var dom = document.getElementById('container');
  dom.innerHTML = 'box content'
  dom.className = 'box'
}
</script>


[百度一下](https://www.baidu.com)


#### Vue <Badge text="2.5.0+"/> 
#### Vuex <Badge text="beta" type="warn" vertical="top"/> 
#### Vue-Resource<Badge text="废弃" vertical="middle" type="error"/>

![百度logo](https://www.baidu.com/logo.png)