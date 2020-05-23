// 导入组件，组件必须声明 name
import backTop from "./backTop.vue";

// 为组件提供 install 安装方法，供按需引入
backTop.install = function(vue) {
  vue.component(backTop.name, backTop);
};

// 默认导出组件
export default backTop;
