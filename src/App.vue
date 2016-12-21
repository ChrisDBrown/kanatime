<template>
  <div id="app">
    <div class="card">
      <h2>{{ randomKana.hiragana }}</h2>
      <input type="text" name="romanji" v-on:keyup.enter="submitGuess(randomKana.romanji)">
    </div>
  </div>
</template>

<script>
import baseData from './hiragana.json'

export default {
  name: 'app',
  data () {
    return  {
      kana: baseData
    }
  },
  computed: {
    randomKana: function() {
      return this.kana[Math.floor(Math.random()*this.kana.length)]
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
