<template>
  <div id="app">
    <div class="card">
      <h2>{{ randomKana.hiragana }}</h2>
      <input type="text" name="romanji" v-if="!hasAnswered" v-on:keyup.enter="submitAnswer($event)">
      <p v-if="hasAnswered">{{ randomKana }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['randomKana', 'hasAnswered'])
  },
  methods: {
    submitAnswer: function ($event) {
      this.$store.dispatch('submitAnswer', $event.target.value)
    }
  }
}
</script>
