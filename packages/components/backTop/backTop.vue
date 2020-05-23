<template>
  <a href="javascript:;" class="toTop" @click="backTop" v-show="backToTop">
    <i class="el-icon-caret-top"></i>
  </a>
</template>
<script type="text/ecmascript-6">
export default {
	name: "backTop",
	data() {
		return {
      backToTop:""
    }
	},
	mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
	components: {},
	methods: {
		scrollToTop() {
      //滚动的距离如果大于浏览器高度时，设置 toTop 为true
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||  //是网页被卷去的高度
        document.body.scrollTop;
      let browserHeight = window.outerHeight;
      if (scrollTop > browserHeight) {
        this.backToTop = true
      } else {
        this.backToTop = false
      }
  },
  //回到顶部
	 backTop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100;
          document.documentElement.scrollTop -= 100;
        } else {
          clearInterval(back);
        }
      });
	},
	destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
  }
}
</script>

<style lang="scss" scoped>
.toTop {
  i {
    color: rgb(46, 40, 97);
    font-size: 40px;
    vertical-align: middle;
    font-weight: 500;
  }
  position: fixed;
  width: 45px;
  height: 45px;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  border-radius: 50%;
  border: 1px solid rgb(46, 40, 97); /*no*/
  text-align: center;
  background-color: #fff;
}
</style>
