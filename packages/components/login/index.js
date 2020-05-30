// 导入组件，组件必须声明 name
import Myvuelogin from "./login.vue";

// 为组件提供 install 安装方法，供按需引入
Myvuelogin.install = function(vue) {
  vue.component(Myvuelogin.name, Myvuelogin);
};

// 默认导出组件
export default Myvuelogin;
