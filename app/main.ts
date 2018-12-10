import Vue from 'nativescript-vue';
import App from './components/App.vue';

// Prints Vue logs when --env.production is *NOT* set while building
Vue['config'].silent = (global["TNS_ENV"] === 'production')

new (<any>Vue)({
  render: h => h('frame', [h(App)])
}).$start()
