import LedNumber from './led-number.vue'

LedNumber.install = function (Vue) {
  Vue.component(LedNumber.name, LedNumber)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LedNumber)
}

export default LedNumber
