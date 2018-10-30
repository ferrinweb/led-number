# led-number

> A digital display component that simulates an LCD dot matrix display.
> The name of font used in this component is 'Let's go Digital Regular'.

![](https://github.com/ferrinweb/led-number/blob/master/screensshots.png)

## How to use / 如何使用

### Install / 安装

```javascript
npm install led-number
// or install from github reponsitory
npm install https://github.com/ferrinweb/led-number.git

// or use yarn / 推荐使用 yarn
yarn add led-number
// or install from github reponsitory
yarn add https://github.com/ferrinweb/led-number.git
```

### Import / 引入

```javascript
// global import / 全局引入
import LedNumber from 'led-number'
Vue.use(LedNumber)

// import on demand in your vue component file. / 按需引入
import LedNumber from 'led-number'
export default {
  components: {
    LedNumber
  },
  ...
}
```

### Use and demo / 使用及示例
> You can ckeckout this repository and try this demo.

> 你可以直接检出 led-number 源码到本地，查看示例。

```javascript
<template>
  <div id="app">
    <led-number class="price" :value="number" :toFixed="2" :toLocale="true"></led-number>
  </div>
</template>

<script>
import LedNumber from './lib/led-number'

export default {
  name: 'App',
  components: {
    LedNumber
  },
  data () {
    return {
      number: 3100
    }
  }
}
</script>

<style>
  /* demo page styles, just ignore these */
  html, body, #app {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
```

### Attributes / 属性
名称 | 说明 | 默认值
|---|---|---|
value | number to show |
toFixed | number of decimal digits | 2
toLocale | if format the number using the toLocaleString method | false

## Lisence
MIT Lisence.
