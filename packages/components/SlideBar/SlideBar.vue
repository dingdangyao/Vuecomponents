<template>
  <div class="content">
    <!--已选标签-->
    <!--筛选按钮-->
    <div class="ScreenBtn">
      <el-button
        type="info"
        :class="[this.option.button.screen ? 'button-unfold' : 'button-fold']"
        @click="screen"
        >筛选
        <i class="el-icon-set-up"></i>
      </el-button>
    </div>
    <!--已选标签-->
    <!--抽屉部分-->
    <transition name="drawer-fade">
      <div class="screen" v-if="option.button.screen">
        <el-menu
          menu-trigger="click"
          mode="vertical"
          class="el-menu-vertical"
          background-color="#353838"
          active-text-color="white"
        >
          <el-menu-item class="caption">
            <span slot="title">排序方式</span>
          </el-menu-item>
          <div class="sortmethod">
            <label v-for="(sort, sortIndex) in sorts" :key="sortIndex">
              <input
                type="radio"
                name="sortIndex"
                :value="sorts.label"
                @click="screenClick(sort.label)"
              />
              {{ sort.label }}
              <br />
              <br />
            </label>
          </div>
          <hr />

          <el-menu-item class="caption">
            <span slot="title">构图</span>
          </el-menu-item>
          <div class="orientation">
            <label
              v-for="(compose, composeIndex) in composes"
              :key="composeIndex"
            >
              <input type="radio" name="composes" />
              {{ compose.label }}
              <icon-svg :icon-class="compose.ico"></icon-svg>
              <br />
              <br />
            </label>
          </div>
          <hr />

          <el-submenu index="1" menu-trigger="click" class="race">
            <template slot="title" class="caption">
              <span class="caption">民族</span>
            </template>
            <el-menu-item-group v-model="nationsort">
              <label
                v-for="(nation, nationIndex) in nations"
                :key="nationIndex"
              >
                <input type="radio" name="nations" />
                <label>{{ nation.label }}</label>
                <br />
                <br />
              </label>
            </el-menu-item-group>
          </el-submenu>
          <hr />

          <el-submenu index="2" menu-trigger="click" class="peopleNum">
            <template slot="title">
              <span class="caption">人数</span>
            </template>
            <label class="man" v-for="people in peoples" :key="people.id">
              <input type="radio" name="peoples" />
              {{ people.label }}
              <br />
              <br />
            </label>
          </el-submenu>
          <hr />

          <el-submenu index="3" menu-trigger="click" class="race">
            <template slot="title" class="caption">
              <span class="caption">年龄</span>
            </template>
            <label v-for="(age, ageIndex) in ages" :key="ageIndex">
              <input type="radio" name="ages" />
              {{ age.label }}
              <br />
              <br />
            </label>
          </el-submenu>
          <hr />

          <el-submenu index="4" menu-trigger="click" class="gender">
            <template slot="title">
              <span class="caption">性别</span>
            </template>
            <label v-for="(sexual, sexualIndex) in sexuals" :key="sexualIndex">
              <input type="radio" name="sexuals" />
              {{ sexual.label }}
              <br />
              <br />
            </label>
          </el-submenu>
          <div
            class="selest"
            :style="{
              width: drawerWidth
            }"
          >
            <el-button
              type="info"
              plain
              size="medium"
              @click="OpenMenu(item)"
              :style="{
                backgroundColor: this.option.backgroundColor || '#353838'
              }"
            >
              清空筛选条件
            </el-button>
          </div>
        </el-menu>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "slidebar",
  data() {
    return {
      radio: "1",
      nationsort: "",
      value:'',
      count: 0,
    };
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch:{
  },
  computed: {
    drawerWidth: function() {
      return this.option.drawerWidth || "20%";
    },
    sorts: function() {
      return this.option.sorts || [];
    },
    composes: function() {
      return this.option.composes || [];
    },
    nations: function() {
      return this.option.nations || [];
    },
    peoples: function() {
      return this.option.peoples || [];
    },
    ages: function() {
      return this.option.ages || [];
    },
    sexuals: function() {
      return this.option.sexuals || [];
    },
  },
  components: {
  },
  methods: {
    screen:function(){
      this.$emit('screen')
    },
      screenClick(val) {
        this.$emit("choice",val)
      }
  }
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
}
.chosedTag {
  top: 100px;
  position: flex;
}

.race,
.gender,
.peopleNum,
.sortmethod,
.orientation {
  text-align: left;
  color: #dfdfdf;
  font-size: 13px;
  margin-left: 13px;
}
.caption {
  font-size: 15px;
  color: white;
  text-align: left;
}
.screen {
  width: 250px;
  background-color: #353838;
}
.button-unfold {
  width: 250px;
}
.button-fold {
  width: 200px;
}
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: all 0.8s;
}
.drawer-fade-enter,
.drawer-fade-leave-to {
  opacity: 0;
  width: 0;
}
</style>
