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

<style lang="scss">
  @import '../assets/variables.scss';

  .results {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    background-color: $white;
    border-radius: 0 0 6px 6px;

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $grey;
      margin-top: 10px;

      .score-title {
        display: flex;
        flex: 1 0 0;
        font-size: 20px;
      }

      .score-value {
        display: flex;
        flex: 2 0 0;
        font-size: 35px;
      }
    }
  }
</style>