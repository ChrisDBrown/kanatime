<template>
  <div class="results-history">
    <div class="history">
      <el-table
        :data="resultsHistory"
        height="500"
        default-sort-prop="id"
        default-sort-order="ascending"
        stripe>
        <el-table-column
          prop="type"
          label="Type"
          width="100"
          :filters="[{ text: 'Hiragana', value: 'hiragana' }, { text: 'Katakana', value: 'katakana' }]"
          :filter-method="filterType">
          <template scope="scope">
            <el-tag :type="scope.row.type === 'hiragana' ? 'primary' : 'success'">{{scope.row.type}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="kana"
          label="Kana"
          width="150">
        </el-table-column>
        <el-table-column
          prop="romanji"
          label="Romanji"
          width="150">
        </el-table-column>
        <el-table-column
          prop="successPercentage"
          label="Success Rate"
          width="150"
          sortable>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['resultsHistory'])
    },
    methods: {
      filterType (value, row) {
        return row.type === value
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/variables.scss';
  
  .results-history {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }

  .history {
    display: flex;
    border-radius: 6px;
    box-shadow: 0px 5px 15px 0px rgba(91, 192, 190, 0.4);
    background-color: $brand-primary;
    padding: 15px 15px;
    margin: 30px 0;
  }
</style>