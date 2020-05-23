// 导入组件，组件必须声明 name
import CardImg from "./CardImg.vue";

// 为组件提供 install 安装方法，供按需引入
CardImg.install = function(vue) {
  vue.component(CardImg.name, CardImg);
};

// 默认导出组件
export default CardImg;
