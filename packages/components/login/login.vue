<template>
  <div class="login">
    <el-form
      :rules="loginRules"
      ref="LoginForm"
      :model="formData"
      label-suffix=":"
      label-width="auto"
    >
      <el-form-item
        :label="this.UserName.label"
        v-if="!this.UserName.hide"
        prop="UserName"
      >
        <el-input
          v-model="formData.UserName"
          size="small"
          :prefix-icon="this.UserName.prefixIcon"
          :placeholder="this.UserName.placeholder"
          :autocomplete="this.UserName.autocomplete"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="this.password.label"
        v-if="!this.password.hide"
        prop="password"
      >
        <el-input
          type="password"
          v-model="formData.password"
          size="small"
          :prefix-icon="this.password.prefixIcon"
          :placeholder="this.password.placeholder"
          :autocomplete="this.password.autocomplete"
        ></el-input>
      </el-form-item>
      <el-form-item :label="this.code.label" v-if="!this.code.hide" prop="code">
        <el-input
          v-model="formData.code"
          size="small"
          :prefix-icon="this.code.prefixIcon || 'el-icon-c-scale-to-original'"
          :placeholder="this.code.placeholder || '请输入验证码'"
          :autocomplete="this.code.autocomplete"
        >
          <template slot="append">
            <el-button type="primary" v-if="this.isPhone" @click="this.onSend">
              {{ text }}
            </el-button>
            <span v-if="this.isImg">
              <img
                :src="this.codeSrc"
                alt=""
                @click="this.onRefresh"
                :width="this.code.width || '80'"
                :height="this.code.height || '25'"
              />
            </span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="onSubmit">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
const send_code="发送验证码";
const again_send="{{time}}s后重新发送"

export default {
  name: "login",
  props:{
    choose:{
      type:Object,
      default: ()=>{
        return {
        }
      }
    }
  },
  data() {
    return {
      text: "",
      loginRules: {
                    UserName: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    password: [
                       {required: true, message: '密码不可为空', trigger: 'blur'}
                    ],
                    code: [
                        {required: true,message: '验证码不可为空', trigger: 'blur'}
                    ]
               },
       formData:{
            UserName:"",
            password:"",
            code:""
          },
          nowTime:""
    };
  },
  computed:{
    time:function(){
      return this.choose.time || 60;
    },
    codeType:function(){
      return this.choose.codeType || "img"
    },
    isImg:function(){
      return this.codeType === "img";
    },
    isPhone:function(){
      return this.codeType=== "phone"
    },
    column:function() {
      return this.choose.column || {};
    },
    UserName:function() {
      return this.column.UserName ||{};
    },
    password:function() {
      return this.column.password || {};
    },
    code: function() {
      return this.column.code ||{};
    },
    codeSrc:function() {
      return this.choose.codeSrc || "";
    }
  },
  created() {
    this.text = send_code;
  },
  components: {},
  methods: {
    onSend:function(){
      const callback = ()=>{
        this.nowTime = this.time;
        this.text=again_send.replace("{{time}}",this.nowTime);
        this.check = setInterval(() => {
          this.nowTime--;
          if (this.nowTime === 0) {
            this.text = send_code;
            clearInterval(this.check);
          } else {
            this.text = again_send.replace("{{time}}", this.nowTime);
          }
        }, 1000);
      };
      this.$emit("send",callback)
    },
    onRefresh: function(){
      this.$emit("refresh");
    },
  }
};
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 18px;
  width: 350px;
}
.onSubmit {
  width: 100%;
}
</style>
