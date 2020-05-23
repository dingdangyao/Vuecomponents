// 导入组件，组件必须声明 name
import SlideBar from "./SlideBar.vue";

// 为组件提供 install 安装方法，供按需引入
SlideBar.install = function(vue) {
  vue.component(SlideBar.name, SlideBar);
};

// 默认导出组件
export default SlideBar;
