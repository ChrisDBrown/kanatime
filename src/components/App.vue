<template>
  <div id="app">
    <div class="card">
      <h2>{{ randomKana.hiragana }}</h2>
      <input type="text" name="romanji" v-on:keyup.enter="submitGuess(randomKana.romanji, $event)">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['randomKana'])
  },
  methods: {
    submitGuess: function (correct, $event) {
      window.alert(correct === $event.target.value)
    }
  }
}
</script>
