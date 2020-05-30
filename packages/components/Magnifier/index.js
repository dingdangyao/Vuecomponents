// 导入组件，组件必须声明 name
import MyvueMagnifier from "./Magnifier.vue";

// 为组件提供 install 安装方法，供按需引入
MyvueMagnifier.install = function(vue) {
  vue.component(MyvueMagnifier.name, MyvueMagnifier);
};

// 默认导出组件
export default MyvueMagnifier;
