<!-- Author: ferrinweb -->
<!-- Create Time: 2018/10/30 16:42 -->
<!-- Description: led-number-demo -->
<template>
  <div id="app">
    <div class="number">
      <led-number value="1234567890" :toFixed="0"></led-number>
    </div>
    <div class="number1">
      <led-number :value="number" :toFixed="2" :toLocale="true"></led-number>
    </div>
    <div class="number2">
      <led-number :value="number" :toFixed="3" :toLocale="true"></led-number>
    </div>
    <div class="number3">
      <led-number :value="number" :toFixed="2"></led-number>
    </div>
    <div class="number4">
      <led-number :value="number" :toFixed="2"></led-number>
    </div>
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
      number: 2018
    }
  }
}
</script>

<style>
  html, body, #app {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    box-sizing: border-box;
    padding: 50px;
  }
  .number{
    font-size: 45px;
  }
  .number1{
    font-size: 45px;
    color: orange;
  }
  .number2{
    font-size: 60px;
    color: blue;
  }
  .number3{
    font-size: 72px;
    color: black;
  }
  .number4{
    display: inline-block;
    box-sizing: border-box;
    height: 75px;
    padding: 5px 15px;
    font-size: 60px;
    background-color: green;
    color: yellow;
  }
  .number4 .led-back{
    color: #009700!important;
  }
</style>
