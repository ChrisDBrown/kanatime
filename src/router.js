import Vue from 'vue'
import VueRouter from 'vue-router'
import Quiz from './components/Quiz.vue'
import Options from './components/Options.vue'
import ResultsHistory from './components/ResultsHistory.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Quiz },
    { path: '/options', component: Options },
    { path: '/history', component: ResultsHistory }
  ]
})
