// 导入组件，组件必须声明 name
import MyvueCardFlag from "./CardFlag.vue";

// 为组件提供 install 安装方法，供按需引入
MyvueCardFlag.install = function(vue) {
  vue.component(MyvueCardFlag.name, MyvueCardFlag);
};

// 默认导出组件
export default MyvueCardFlag;
