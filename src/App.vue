<template>
  <div id="app">
    <div class="card">
      <h2>{{ randomKana.hiragana }}</h2>
      <input type="text" name="romanji" v-on:keyup.enter="submitGuess(randomKana.romanji)">
    </div>
  </div>
</template>

<script>
import kanaMap from './hiragana.json'

export default {
  name: 'app',
  computed: {
    randomKana: function() {
      return kanaMap[Math.floor(Math.random() * kanaMap.length)]
    }
  },
  methods: {
    submitGuess: function(correct) {
      if (correct == event.target.value) {
        alert('Correct!');
      } else {
        alert('Incorrect');
      }
    }
  }
}
</script>

<style scoped>

</style>
