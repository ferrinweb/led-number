<!-- Author: ferrinweb -->
<!-- Create Time: 2018/10/30 14:56 -->
<!-- Description: led-number -->
<template>
  <span class="led-number">
    <span class="width-fix" ref="widthFix8">8</span>
    <span class="width-fix" ref="widthFix1">1</span>
    <span class="led-back">{{toLocale ? '888,888,888,888,888' : '888888888888888'}}{{toFixed ? '.888888888888'.substr(0, toFixed + 1) : ''}}</span>
    <span class="led-front" v-html="ledNumber"></span>
  </span>
</template>

<script>
export default {
  name: 'led-number',
  props: {
    value: {
      type: [Number, String]
    },
    toFixed: {
      type: [Number],
      default: 2
    },
    toLocale: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      ledNumber: null
    }
  },
  methods: {
    formatLedNumber () {
      let strs = ((this.value || 0) - 0).toFixed(this.toFixed !== undefined ? this.toFixed : 2).split('.')
      if (this.toLocale) strs[0] = (strs[0] - 0).toLocaleString('en-US')
      let string = strs[0] + (this.toFixed ? '.' + strs[1] : '')
      if (string.indexOf('1') === -1) {
        this.ledNumber = string
      } else {
        let patchWidth = this.$refs.widthFix8.getBoundingClientRect().width - this.$refs.widthFix1.getBoundingClientRect().width
        this.ledNumber = string.replace(/1/g, `<span class="width-fill" style="padding-right: ${patchWidth}px">1</span>`)
      }
    }
  },
  watch: {
    value () {
      this.formatLedNumber()
    },
    toFixed () {
      this.formatLedNumber()
    },
    toLocale () {
      this.formatLedNumber()
    }
  },
  mounted () {
    setTimeout(() => {
      this.formatLedNumber()
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: "fontLED";
    src: url("./font-led/led-regular.eot");
    src: url("./font-led/led-regular.eot?#iefix&v=2.3.54") format("embedded-opentype"), url("./font-led/led-regular.woff2?v=2.3.54") format("woff2"), url("./font-led/led-regular.woff?v=2.3.54") format("woff"), url("./font-led/led-regular.ttf?v=2.3.54") format("truetype"), url("./font-led/led-regular.svg?v=2.3.54#materialdesigniconsregular") format("svg");
    font-weight: normal;
    font-style: normal;
  }
  .led-number{
    position: relative;
    display: inline-block;
    font-family: "fontLED";
    font-weight: lighter;
    overflow: hidden;
    white-space: nowrap;
    .width-fix{
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
    .led-front{
      position: relative;
    }
    .led-back{
      position: absolute;
      top: 0;
      right: 0;
      color: #e6e6e6;
      pointer-events: none;
    }
  }
</style>
