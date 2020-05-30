// 导入组件，组件必须声明 name
import Myvuerecord from "./record.vue";

// 为组件提供 install 安装方法，供按需引入
Myvuerecord.install = function(vue) {
  vue.component(Myvuerecord.name, Myvuerecord);
};

// 默认导出组件
export default Myvuerecord;
