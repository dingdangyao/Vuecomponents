// 导入组件，组件必须声明 name
import MyvuescrollLoader from "./scrollLoader.vue";

// 为组件提供 install 安装方法，供按需引入
MyvuescrollLoader.install = function(vue) {
  vue.component(MyvuescrollLoader.name, MyvuescrollLoader);
};

// 默认导出组件
export default MyvuescrollLoader;
