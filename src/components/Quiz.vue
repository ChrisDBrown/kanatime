<template>
  <div class="quiz">
    <div class="card">
      <div class="question-box">
        <currentAnswerResult></currentAnswerResult>
        <h2 class="kana">{{ randomKana.kana }}</h2>
        <h3 class="romanji" v-if="hasAnswered">{{ randomKana.romanji }}</h3>
      </div>
      <div class="answer-box">
        <input class="answer" type="text" placeholder="Answer" tabindex="1" v-if="!hasAnswered" v-on:keyup.enter="submitAnswer($event.target.value)">
        <historicKanaResults></historicKanaResults>
      </div>
    </div>

    <div class="again" v-if="hasAnswered">
      <el-button v-on:click="resetQuiz" size="large">Again?</el-button>
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
    ...mapActions(['submitAnswer', 'resetQuiz'])
  }
}
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  .quiz {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 6px;
    box-shadow: 0px 5px 15px 0px rgba(91, 192, 190, 0.4);
    width: 300px;
    height: 400px;
    background-color: $brand-primary;
    margin: 30px 0;
  }

  .question-box {
    display: flex;
    flex: 3 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $white;

    .kana {
      font-size: 70px;
      font-weight: 100;
      margin: 0;
    }

    .romanji {
      font-size: 45px;
      font-weight: 100;
      margin: 0;
    }
  }

  .answer-box {
    display: flex;
    flex: 1 0 0;
    flex-direction: row;

    input {
      display: flex;
      width: 100%;
      border: none;
      padding: 5px 15px;
      background-color: $white;
      border-radius: 0 0 6px 6px;
      text-align: center;
      color: $grey;
      font-size: 30px;
      font-weight: 500;
    }
  }
</style>