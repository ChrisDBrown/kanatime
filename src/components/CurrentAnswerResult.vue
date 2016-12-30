<template>
  <div class="mark">
    <h3 class="tick" v-if="hasAnswered && answeredCorrectly">✓</h3>
    <h3 class="cross" v-if="hasAnswered && !answeredCorrectly">✗</h3>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['hasAnswered', 'answeredCorrectly'])
    }
  }
</script>

<style>
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
</style>