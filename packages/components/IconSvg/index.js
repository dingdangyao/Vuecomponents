// 导入组件，组件必须声明 name
import IconSvg from "./IconSvg.vue";

// 为组件提供 install 安装方法，供按需引入
IconSvg.install = function(vue) {
  vue.component(IconSvg.name, IconSvg);
};

// 默认导出组件
export default IconSvg;
