<template>
  <div id="app">
    <div class="card">
      <div class="mark">
        <h3 class="tick" v-if="hasAnswered && answeredCorrectly">✓</h3>
        <h3 class="cross" v-if="hasAnswered && !answeredCorrectly">✗</h3>
      </div>
      <h2 class="hiragana">{{ randomKana.hiragana }}</h2>
      <h3 class="romanji">
        <span v-if="hasAnswered">{{ randomKana.romanji }}</span>
      </h3>
      <input class="answer" type="text" placeholder="Answer" v-if="!hasAnswered" v-on:keyup.enter="submitAnswer($event)">
      <div class="results" v-if="hasAnswered">
        <div class="score">
          <span class="score-title">Success</span>
          <span class="score-value">{{ randomKana.results.success }}</span>
        </div>
        <div class="score">
          <span class="score-title">Failure</span>
          <span class="score-value">{{ randomKana.results.failure }}</span>
        </div>
        <div class="score">
          <span class="score-title">Skipped</span>
          <span class="score-value">{{ randomKana.results.skipped }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['randomKana', 'hasAnswered', 'answeredCorrectly'])
  },
  methods: {
    submitAnswer: function ($event) {
      this.$store.dispatch('submitAnswer', $event.target.value)
    }
  }
}
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid #5BC0BE;
    border-radius: 6px;
    box-shadow: 0px 5px 15px 0px rgba(91, 192, 190, 0.4);
    overflow: hidden;
    width: 300px;
    min-height: 300px;
    background-color: #5BC0BE;
  }

  .mark {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0 5px 0;
    margin: 0;
    color: white;
    font-size: 50px;
    font-weight: 100;
    height: 50px;
  }

  .tick {
    color: #6FFFE9;
  }

  .cross {
    color: #D7263D;
  }

  .hiragana {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    margin: 0;
    color: white;
    font-size: 70px;
    font-weight: 100;
    height: 100px;
  }

  .romanji {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0 25px 0;
    margin: 0;
    color: white;
    font-size: 50px;
    font-weight: 100;
    height: 50px;
  }

  .answer {
    text-align: center;
    color: #57727C;
    font-size: 30px;
    font-weight: 500;
    padding: 5px 15px;
    border: none;
    background-color: #EEF3F5;
    height: 70px;
  }

  .results {
    display: flex;
    flex-direction: row;
    text-align: center;
    color: #57727C;
    font-size: 30px;
    font-weight: 500;
    padding: 5px;
    border: none;
    background-color: #EEF3F5;
    height: 70px;
  }

  .score {
    display: flex;
    flex-direction: column;
    width: 33%;
    padding: 5px;
  }

  .score-title {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

  .retry {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    color: white;
    font-weight: 100;
    font-size: 40px;
    margin-top: 20px;
    cursor: pointer;
  }
</style>