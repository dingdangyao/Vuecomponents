// 导入组件，组件必须声明 name
import scrollLoader from "./scrollLoader.vue";

// 为组件提供 install 安装方法，供按需引入
scrollLoader.install = function(vue) {
  vue.component(scrollLoader.name, scrollLoader);
};

// 默认导出组件
export default scrollLoader;
