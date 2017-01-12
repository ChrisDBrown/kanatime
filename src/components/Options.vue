<template>
  <div class="options">
    <div class="options-form">
      <div>
        <h3>Active kana types</h3>
        <el-radio-group
          v-model="activeCheckbox"
          v-on:input="updateActiveKanaTypes($event)">
          <el-radio label="hiragana">Show Hiragana</el-radio><br>
          <el-radio label="katakana">Show Katakana</el-radio><br>
          <el-radio label="both">Show Both</el-radio>
        </el-radio-group>
      </div>
      <div>
        <h3>Early exit message</h3>
        <el-switch 
          v-model="showUnansweredExitMessage" 
          v-on:change="updateUnansweredExitMessageOption">
          Show early exit message
        </el-switch>
      </div>
    </div>
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

<style lang="scss">
  @import '../assets/variables.scss';

  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }

  .options-form {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 0px 5px 15px 0px rgba(91, 192, 190, 0.4);
    background-color: $brand-primary;
    width: 300px;
    padding: 10px;
    margin: 30px 0;

    h3 {
      font-weight: 500;
    }

    .el-radio, .el-switch {
      margin-bottom: 10px;
    }
  }
</style>