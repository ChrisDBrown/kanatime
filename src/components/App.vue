<template>
  <div id="app">
    <div class="card">
      <currentAnswerResult></currentAnswerResult>
      <h2 class="kana">{{ randomKana.kana }}</h2>
      <h3 class="romanji">
        <span v-if="hasAnswered">{{ randomKana.romanji }}</span>
      </h3>
      <input class="answer" type="text" placeholder="Answer" tabindex="1" v-if="!hasAnswered" v-on:keyup.enter="submitAnswer($event.target.value)">
      <historicKanaResults></historicKanaResults>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HistoricKanaResults from './HistoricKanaResults.vue'
import CurrentAnswerResult from './CurrentAnswerResult.vue'

export default {
  components: { HistoricKanaResults, CurrentAnswerResult },
  computed: {
    ...mapGetters(['randomKana', 'hasAnswered', 'answeredCorrectly'])
  },
  methods: {
    ...mapActions(['submitAnswer'])
  }
}
</script>

<style>
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

  .kana {
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