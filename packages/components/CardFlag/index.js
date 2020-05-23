// 导入组件，组件必须声明 name
import CardFlag from "./CardFlag.vue";

// 为组件提供 install 安装方法，供按需引入
CardFlag.install = function(vue) {
  vue.component(CardFlag.name, CardFlag);
};

// 默认导出组件
export default CardFlag;
