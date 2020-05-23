import CardFlag from "./components/CardFlag";
import CardImg from "./components/CardImg";
import login from "./components/login";
import record from "./components/record";
import search from "./components/search";
import scrollLoader from "./components/scrollLoader";
import backTop from "./components/backTop";
import IconSvg from "./components/IconSvg";
import $myVueLog from "./plugin/logs/";
import Magnifier from "./components/Magnifier";
import SlideBar from "./components/SlideBar";
// 存储组件列表
const components = [
  CardFlag,
  CardImg,
  login,
  record,
  search,
  scrollLoader,
  backTop,
  IconSvg,
  Magnifier,
  SlideBar
];
let prototypes = {
  $myVueLog
};

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = vue => {
  components.map(component => {
    vue.component(component.name, component);
  });
  Object.keys(prototypes).forEach(key => {
    vue.prototype[key] = prototypes[key];
  });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  login,
  CardFlag,
  CardImg,
  record,
  search,
  scrollLoader,
  backTop,
  IconSvg,
  Magnifier,
  SlideBar
};
