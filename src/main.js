import Vue from 'vue'
import App from './components/App.vue'
import store from './store/'
import { mapGetters } from 'vuex'

new Vue({
  el: '#app',
  store,
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
