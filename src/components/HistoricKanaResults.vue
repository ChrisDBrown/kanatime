<template>
  <div class="results" v-if="hasAnswered">
    <div class="score">
      <span class="score-title">Success</span>
      <span class="score-value">{{ randomKanaResults.success }}</span>
    </div>
    <div class="score">
      <span class="score-title">Failure</span>
      <span class="score-value">{{ randomKanaResults.failure }}</span>
    </div>
    <div class="score">
      <span class="score-title">Skipped</span>
      <span class="score-value">{{ randomKanaResults.skipped }}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['randomKanaResults', 'hasAnswered'])
    }
  }
</script>

<style>
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
</style>