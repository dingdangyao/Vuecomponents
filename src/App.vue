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
            :v-model="count"
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
        peoples: [
          { id: "", label: "全部" },
          { id: 1, label: "没有人" },
          { id: 2, label: "一个人" },
          { id: 3, label: "两个人" },
          { id: 4, label: "三个人" },
          { id: 5, label: "一群人" }
        ],
        nations: [
          { id: "", label: "全部" },
          { id: 1, label: "中国人" },
          { id: 2, label: "亚洲人" },
          { id: 3, label: "东方人" },
          { id: 4, label: "白色种人" },
          { id: 5, label: "黑色种人" },
          { id: 6, label: "混血儿" },
          { id: 7, label: "中东人" }
        ],
        sorts: [
          { id: "", label: "最佳匹配" },
          { id: 1, label: "最新上线" },
          { id: 2, label: "最热" }
        ],
        composes: [
          { id: "", label: "全部", ico: "" },
          { id: "1", label: "横向", ico: "cross" },
          { id: "2", label: "竖向", ico: "vertial" },
          { id: "3", label: "方形", ico: "square" },
          { id: "4", label: "全景横向", ico: "" },
          { id: "5", label: "全景竖向", ico: "" }
        ],
        ages: [
          { id: "", label: "全部" },
          { id: "1", label: "婴儿" },
          { id: "2", label: "儿童" },
          { id: "3", label: "少年" },
          { id: "4", label: "青年" },
          { id: "5", label: "中年" },
          { id: "6", label: "老年" }
        ],
        sexuals: [
          { id: "", label: "男" },
          { id: "1", label: "女" }
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
      this.dynamicTags.push({
        label: val
      });
      if (val === "最佳匹配") {
        console.log(val);
        this.option.data = demoDataFir;
      } else if (val === "最新上线") {
        console.log(val);
        this.option.data = demoDataSec;
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
