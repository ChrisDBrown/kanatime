<template>
  <div class="history">
    <table style="background-color: white;">
      <tr>
        <th>Kana</th>
        <th>Romanji</th>
        <th>Success</th>
        <th>Failure</th>
        <th>Skipped</th>
      </tr>
      <tr v-for="kana in resultsHistory">
        <td>{{ kana.kana }}</td>
        <td>{{ kana.romanji }}</td>
        <td>{{ kana.results.success }}</td>
        <td>{{ kana.results.failure }}</td>
        <td>{{ kana.results.skipped }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['resultsHistory'])
    }
  }
</script>

<style>

</style>