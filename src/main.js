import Vue from 'vue'
import App from './components/App.vue'
import store from './store/'
import router from './router'
import { mapGetters } from 'vuex'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: h => h(App),
  beforeCreate: function () {
    store.dispatch('setCurrentKana')
  },
  mounted: function () {
    window.onbeforeunload = this.leaving
  },
  computed: {
    ...mapGetters(['hasAnswered', 'showUnansweredExitMessage'])
  },
  methods: {
    leaving: function () {
      if (!this.hasAnswered && this.showUnansweredExitMessage) {
        return 'Enter an answer'
      }
      return null
    }
  }
})
