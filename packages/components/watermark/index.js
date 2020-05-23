import watermark from "./watermark";
watermark.install = function(Vue) {
  Vue.directive("watermark", watermark);
};
export default watermark;
