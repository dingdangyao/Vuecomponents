// 导入组件，组件必须声明 name
import Magnifier from "./Magnifier.vue";

// 为组件提供 install 安装方法，供按需引入
Magnifier.install = function(vue) {
  vue.component(Magnifier.name, Magnifier);
};

// 默认导出组件
export default Magnifier;
