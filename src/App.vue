<template>
  <div id="app">
    <el-header></el-header>
    <el-aside>
      <slidebar
        :option="option"
        @screen="screen"
        @choice="screenClick"
      ></slidebar>
    </el-aside>
    <el-main>
      <div class="like">
        <!--已选标签-->
        <div class="chosedTag">
          <el-tag
            :key="index"
            v-for="(tag, index) in dynamicTags"
            closable
            :disable-transitions="true"
            @close="CloseTag(tag)"
            >{{ tag.label }}</el-tag
          >
          <span>清空筛选条件</span>
        </div>
        <cardimg :option="option"></cardimg>
      </div>
      <!-- 已选标签 -->
    </el-main>
  </div>
</template>

<script>
import Mock from "../node_modules/mockjs/dist/mock.js";
const demoData = [];
const demoDataFir = [];
const demoDataSec = [];

const base = parseInt(Math.random() * 60, 10) + 10;
const basefirst = parseInt(Math.random() * 100, 10) + 10;
const baseSecond = parseInt(Math.random() * 200, 10) + 10;
const demoDataNum = 10;

for (let i = 0; i < demoDataNum; i++) {
  var likeNum = Mock.mock("@integer(1, 100)");
  var downloadNum = Mock.mock("@integer(1000, 2000)");
  demoData.push({
    url: `https://picsum.photos/id/${base + i}/300/200`,
    imgUrl: `https://picsum.photos/id/${base + i}/600/400`,
    authorUrl: `https://picsum.photos/id/${base + i}/300/200`,
    likeNum: `${likeNum}`,
    downloadNum: `${downloadNum}`
  });
  demoDataFir.push({
    thumbUrl: `https://picsum.photos/id/${baseSecond + i}/300/200`,
    imgUrl: `https://picsum.photos/id/${baseSecond + i}/600/400`,
    authorUrl: `https://picsum.photos/id/${baseSecond + i}/300/200`,
    url: `https://picsum.photos/id/${baseSecond + i}/300/200`,
    likeNum: `${likeNum}`,
    downloadNum: `${downloadNum}`
  });
  demoDataSec.push({
    thumbUrl: `https://picsum.photos/id/${basefirst + i}/300/200`,
    imgUrl: `https://picsum.photos/id/${basefirst + i}/600/400`,
    authorUrl: `https://picsum.photos/id/${basefirst + i}/300/200`,
    url: `https://picsum.photos/id/${basefirst + i}/300/200`,
    likeNum: `${likeNum}`,
    downloadNum: `${downloadNum}`
  });
}

export default {
  name: "App",
  data() {
    return {
      dynamicTags: [],
      gutter: "22",
      option: {
        drawerWidth: "300px",
        backgroundColor: "#353838",
        gutter: 10,
        preview: true,
        data: demoData,
        button: {
          name: "筛选",
          screen: false
        },
        sorts: [
          { id: "", label: "最佳匹配" },
          { id: 1, label: "最新上线" },
          { id: 2, label: "最热" }
        ],
        composes: [
          { id: "0", label: "全部", ico: "" },
          { id: "1", label: "横向", ico: "cross" },
          { id: "2", label: "竖向", ico: "vertial" },
          { id: "3", label: "方形", ico: "square" },
          { id: "4", label: "全景横向", ico: "" }
        ],
        titles: [
          {
            Titlename: "民族",
            children: [
              { Choicename: "全部", id: "0" },
              { Choicename: "中国人", id: "1" },
              { Choicename: "亚洲人", id: "2" },
              { Choicename: "东方人", id: "3" },
              { Choicename: "白色人种", id: "4" },
              { Choicename: "黑色人种", id: "5" },
              { Choicename: "中东人", id: "6" }
            ]
          },
          {
            Titlename: "人数",
            children: [
              { Choicename: "全部", id: "0" },
              { Choicename: "没有人", id: "1" },
              { Choicename: "一个人", id: "2" },
              { Choicename: "两个人", id: "3" },
              { Choicename: "三个人", id: "4" },
              { Choicename: "一群人", id: "5" }
            ]
          },
          {
            Titlename: "年龄",
            children: [
              { Choicename: "全部", id: "0" },
              { Choicename: "婴儿", id: "1" },
              { Choicename: "儿童", id: "2" },
              { Choicename: "少年", id: "3" },
              { Choicename: "青年", id: "4" },
              { Choicename: "中年", id: "5" },
              { Choicename: "老年", id: "6" }
            ]
          },
          {
            Titlename: "性别",
            children: [
              { Choicename: "男", id: "0" },
              { Choicename: "女", id: "1" }
            ]
          }
        ],
        likeClick: function(item, index) {
          item.likeNum++;
          this.$message.success("您点击了收藏：" + index);
          console.log(JSON.stringify(item));
        },
        downloadClick: function(item, index) {
          item.downloadNum++;
          this.$message.success("您点击了下载图片:" + index);
          console.log(JSON.stringify(item));
        },
        searchClick: function(item, index) {
          this.$message.success("开始搜索同类相似图片:" + index);
          console.log(JSON.stringify(item));
        }
      }
    };
  },
  watch: {},
  methods: {
    CloseTag(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    screen() {
      this.option.button.screen = !this.option.button.screen;
    },
    screenClick(val) {
      if (val.label === "最佳匹配") {
        console.log(val.label);
        this.option.data = demoDataFir;
      } else if (val.label === "最新上线") {
        console.log(val.label);
        this.option.data = demoDataSec;
      }
      if (this.dynamicTags.length <= 0) {
        this.dynamicTags.push({
          label: val.label
        });
      }
    }
  },
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.like {
  margin-top: 20px;
  position: absolute;
  margin-left: 260px;
}
</style>
