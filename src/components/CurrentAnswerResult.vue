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

<style lang="scss">
  @import '../assets/variables.scss';

  .tick {
    font-size: 43px;
    font-weight: 100;
    margin: 0;
    color: #6FFFE9;
  }
  .cross {
    font-size: 45px;
    font-weight: 100;
    margin: 0;
    color: #D7263D;
  }

</style>