<template>
  <div class="options">
    <input 
      type="checkbox"
      name="exitMessage"
      v-bind:checked="showUnansweredExitMessage" 
      v-on:change="updateUnansweredExitMessageOption">
    <label for="exitMessage">Show exit message?</label>
    <br>
    <input type="radio" name="activeKana" id="showHiragana" value="hiragana"
      v-bind:checked="activeCheckbox === 'hiragana'"
      v-on:change="updateActiveKanaTypes($event.target.value)">
    <label for="showHiragana">Show Hiragana</label>
    <input type="radio" name="activeKana" id="showKatakana" value="katakana"
      v-bind:checked="activeCheckbox === 'katakana'"
      v-on:change="updateActiveKanaTypes($event.target.value)">
    <label for="showKatakana">Show Katakana</label>
    <input type="radio" name="activeKana" id="showBoth" value="both"
      v-bind:checked="activeCheckbox === 'both'"
      v-on:change="updateActiveKanaTypes($event.target.value)">
    <label for="showBoth">Show Both</label>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['showUnansweredExitMessage', 'activeKanaTypes']),
      activeCheckbox: function () {
        if (this.activeKanaTypes.length === 2) {
          return 'both'
        }

        if (this.activeKanaTypes.includes('hiragana')) {
          return 'hiragana'
        }

        return 'katakana'
      }
    },
    methods: {
      ...mapActions(['updateUnansweredExitMessageOption', 'updateActiveKanaTypes'])
    }
  }
</script>

<style>

</style>