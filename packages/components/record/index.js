// 导入组件，组件必须声明 name
import record from "./record.vue";

// 为组件提供 install 安装方法，供按需引入
record.install = function(vue) {
  vue.component(record.name, record);
};

// 默认导出组件
export default record;
