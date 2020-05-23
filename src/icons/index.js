import Vue from "vue";
import IconSvg from "../../packages/components/IconSvg"; // svg组件

// register globally
Vue.component("svg-icon", IconSvg);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context("./svg", false, /\.svg$/);
requireAll(req);
