// 导入组件，组件必须声明 name
import MyvueIconSvg from "./IconSvg.vue";

// 为组件提供 install 安装方法，供按需引入
MyvueIconSvg.install = function(vue) {
  vue.component(MyvueIconSvg.name, MyvueIconSvg);
};

// 默认导出组件
export default MyvueIconSvg;
