<template>
  <div class="search">
    <div class="search-input">
      <el-input :placeholder="placeholdersearch" v-model="searchValue">
        <template v-slot:append>
          <div>
            <i class="el-icon-camera-solid"></i>
          </div>
        </template>
      </el-input>
    </div>
    <el-select v-model="type" class="select">
      <el-option
        v-for="item in selectItems"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-button icon="el-icon-search" @click="searchClick"></el-button>
  </div>
</template>

<script>
import create from "../../core/create";
export default create({
  name: "search",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      searchValue: "",
      type: this.option.type || "",
      searchClick: this.option.searchClick
    };
  },
  methods: {},
  computed: {
    selectItems: function() {
      return this.option.selectItems || [];
    }
  }
});
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  .el-select {
    width: 90px;
    height: 40px;
    box-sizing: border-box;
    border-right: none;
    border-radius: 0;
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
  .search-input {
    width: 240px;
    height: 40px;
    border: 1px solid #ffffff;
    border-left: none;
    box-sizing: border-box;
    font-family: "MicrosoftYaHei";
    font-size: 14px;
    color: #909399;
    border-radius: 0;
  }
  .el-button {
    width: 50px;
    height: 40px;
    padding: 0;
    border: 1px solid #40b0ff;
    border-radius: 5px;
    color: #fff;
    background: #40b0ff;
    &:hover {
      background: #10b0ff;
    }
  }
}
</style>
