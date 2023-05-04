import Vue from 'vue'
// import App from './App.vue'
// import e1 from './views/Example1View.vue'
// import e2 from './views/Example2View.vue'
// import e3 from './views/Example3View.vue'
// import e4 from './views/Example4View.vue'
// import e5 from './views/Example5View.vue'
// import e6 from './views/Example6View.vue'
// import e7 from './views/Example7View.vue'
// import e8 from './views/Example8View.vue'
// import e9 from './views/Example9View.vue'
// import e10 from './views/Example10View.vue'
// import e11 from './views/Example11View.vue'
// import e12 from './views/Example12View.vue'
// import e13 from './views/Example13View.vue'
// import e14 from './views/Example14View.vue'
// import e15 from './views/Example15View.vue'
import e16 from './views/Example16View.vue'
import router from './router/example16'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(e16)
}).$mount('#app')
