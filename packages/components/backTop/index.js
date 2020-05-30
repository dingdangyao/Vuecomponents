// 导入组件，组件必须声明 name
import MyvuebackTop from "./backTop.vue";

// 为组件提供 install 安装方法，供按需引入
MyvuebackTop.install = function(vue) {
  vue.component(MyvuebackTop.name, MyvuebackTop);
};

// 默认导出组件
export default MyvuebackTop;
