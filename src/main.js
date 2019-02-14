import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import Vuex from 'vuex'
import ECharts from 'vue-echarts'
import store from  '@/store/'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'
Vue.component('v-chart', ECharts)

Vue.use(Vuex)
Vue.use(router)
Vue.config.productionTip = false
Vue.use(Vuetify)
console.log(process.env.VUE_APP_ROOT_API)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
