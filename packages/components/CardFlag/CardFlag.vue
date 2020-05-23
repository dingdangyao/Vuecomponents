<template>
  <el-row :gutter="gutter" :span="24">
    <el-col
      :md="6"
      :xs="12"
      :sm="8"
      v-for="(item, index) in cardData"
      :key="index"
    >
      <div class="card">
        <div class="card-head">
          <div class="card-head-icon-like">
            <i
              :class="iconLike"
              @click="likeClick ? likeClick(item, index) : ''"
            ></i>
            <span>{{ item.likeNum }}</span>
          </div>
          <div class="card-head-icon-view">
            <i :class="iconView"></i>
            <span>{{ item.viewNum }}</span>
          </div>
        </div>
        <a :href="item.href" @click="gotoWeb ? gotoWeb(item, index) : ''">
          <div class="card-body">
            <img
              class="card-body-img"
              :src="item.url"
              object-fit="fill"
              alt="图像获取失败！"
            />
            <div class="card-body-text">
              <span class="card-body-text-title">{{ item.title }}</span>
              <span class="card-body-text-tag">
                <el-tag
                  v-for="item in items"
                  :key="item.label"
                  :type="item.type"
                  effect="plain"
                  size="mini"
                  >{{ item.label }}</el-tag
                >
              </span>
              <span class="card-body-text-right">
                <i class="el-icon-right"></i>
              </span>
              <div class="card-body-text-detail">{{ item.detail }}</div>
            </div>
          </div>
        </a>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
export default {
  name: "cardflag",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      iconLike: this.option.iconLike || "el-icon-star-off",
      iconView: this.option.iconView || "el-icon-view",
      gotoWeb: this.option.gotoWeb,
      likeClick: this.option.likeClick,
      gutter: this.option.gutter || "5",
      cardData: this.option.data || [],
      items:[
        { type: 'info', label: 'CN' },
        { type: 'info', label: '收费' },
      ]
    };
  },
  computed: {},
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
$time: 0.5s;
@mixin text-display() {
  //超出内容隐藏
  overflow: hidden;
  //内容不换行
  white-space: nowrap;
  //设置超出内容为省略号
  text-overflow: ellipsis;
}
a {
  text-decoration: none;
}
.card {
  height: 100px;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 8px;
  margin-bottom: 20px;
  background: white;
  position: relative;
  box-shadow: 6px 6px 6px rgb(216, 214, 214);
  cursor: pointer;
  transition: bottom $time;
  &:hover {
    top: -5px;
    .card-body-text-right {
      visibility: visible;
    }
    .card-body-img {
      width: 45px;
      height: 45px;
    }
  }
  &-head {
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    &-icon-like {
      display: flex;
      align-items: center;
      color: rgb(192, 188, 188);
      i {
        color: rgb(235, 52, 122);
        font-size: 15px;
      }
      span {
        margin-left: 5px;
      }
    }
    &-icon-view {
      display: flex;
      align-items: center;
      color: rgb(192, 188, 188);
      i {
        color: rgb(235, 52, 122);
        font-size: 15px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
  &-body {
    display: flex;
    padding-left: 5px;
    &-img {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      flex-shrink: 0;
      transition: width $time, height $time;
    }
    &-text {
      color: rgb(187, 185, 185);
      margin-left: 10px;
      @include text-display();
      &-title {
        color: rgb(24, 23, 21);
        font-size: 14px;
        margin-right: 50px;
      }
      &-tag {
        margin-right: 40px;
      }
      &-right {
        position: absolute;
        right: 10px;
        visibility: hidden;
      }
      &-detail {
        padding-top: 10px;
        font-size: 10px;
        @include text-display();
      }
    }
  }
}
</style>
