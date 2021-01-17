// [IMPORT] //
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import Viewer from 'v-viewer'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'viewerjs/dist/viewer.css'


// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import './assets/styles/bootstrap-override.scss'
import './assets/styles/style.scss'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Viewer)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
