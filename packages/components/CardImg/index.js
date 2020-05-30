// 导入组件，组件必须声明 name
import MyvueCardImg from "./CardImg.vue";

// 为组件提供 install 安装方法，供按需引入
MyvueCardImg.install = function(vue) {
  vue.component(MyvueCardImg.name, MyvueCardImg);
};

// 默认导出组件
export default MyvueCardImg;
