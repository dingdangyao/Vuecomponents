<template>
  <div class="content">
    <!--筛选按钮-->
    <div class="ScreenBtn">
      <el-button
        type="info"
        :class="[screen ? 'button-unfold' : 'button-fold']"
        @click="screenMenu"
        >筛选
        <i class="el-icon-set-up"></i>
      </el-button>
    </div>
    <!--抽屉部分-->
    <transition name="drawer-fade">
      <div class="screen" v-if="option.button.screen">
        <el-menu
          :unique-opened="true"
          menu-trigger="click"
          mode="vertical"
          class="el-menu-vertical"
          active-text-color="white"
          background-color="#353838"
        >
          <el-menu-item class="caption">
            <span slot="title">排序方式</span>
          </el-menu-item>
          <div class="sortmethod">
            <label
              class="controlVertical"
              v-for="(sort, sortIndex) in sorts"
              :key="sortIndex"
            >
              <input
                type="radio"
                name="sortIndex"
                :value="sorts.label"
                @click="screenClick(sort)"
              />
              {{ sort.label }}
            </label>
          </div>
          <hr />

          <el-menu-item class="caption">
            <span slot="title">构图</span>
          </el-menu-item>
          <div class="orientation">
            <label
              class="aa"
              v-for="(compose, composeIndex) in composes"
              :key="composeIndex"
            >
              <input type="radio" name="composes" />
              {{ compose.label }}
              <icon-svg :icon-class="compose.ico"></icon-svg>
            </label>
          </div>
          <hr />

          <el-submenu
            class="menu"
            menu-trigger="click"
            v-for="(title, titleIndex) in titles"
            :key="titleIndex"
            :index="titleIndex + ''"
          >
            <template slot="title">
              <span class="menu-title">{{ title.Titlename }}</span>
            </template>
            <label
              class="menu-title-name"
              v-for="(subtitle, subtitleIndex) in title.children"
              :key="subtitleIndex"
            >
              <input type="radio" name="sexuals" />
              {{ subtitle.Choicename }}
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
              @click="ClearTags(item)"
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

<script>
import create from "../../core/create";
export default create({
  name: "screenimg",
  data() {
    return {
      radio: "1",
      value: "",
      screen: this.option.button.screen || "button-unfold"
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
  watch: {},
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
    titles: function() {
      return this.option.titles || [];
    }
  },
  components: {},
  methods: {
    screenMenu: function() {
      this.$emit("screen");
    },
    screenClick(val) {
      this.$emit("choice", val);
    }
  }
});
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
}
.chosedTag {
  top: 100px;
  position: flex;
}
.menu {
  text-align: left;
  color: #dfdfdf;
  font-size: 13px;
}
.menu-title {
  color: #dfdfdf;
  font-size: 15px;
}
.menu-title-name {
  text-align: left;
  color: #dfdfdf;
  font-size: 13px;
  margin-left: 13px;
  margin-right: 170px;
}
.sortmethod,
.orientation {
  text-align: left;
  color: #dfdfdf;
  font-size: 13px;
  margin-left: 13px;
}
.controlVertical {
  margin-right: 170px;
}
.aa {
  margin-right: 160px;
}
.caption {
  font-size: 15px;
  color: white;
  text-align: left;
}
.screen {
  width: 250px;
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
