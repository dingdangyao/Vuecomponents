<template>
  <div class="record">
    <div id="messages"></div>
    <h2>点击开始录音:</h2>
    <input @click="startRecord" type="button" value="录音" />
    <input @click="stopRecord" type="button" value="停止" />
    <input @click="play" type="button" value="播放" />
    <input @click="send" type="button" value="发送" />
    <div class="record-play" v-show="isFinished">
      <h2>voice player:</h2>
      <audio controls autoplay></audio>
    </div>
  </div>
</template>

<script>
import Record from "./src/Record-sdk";
export default {
  name: "Record",
  data() {
    return {
      content: "",
      chatList: [],
      topic: [],
      fileList: [],
      isFinished: false,
      audio: "",
      recorder: new Record()
    };
  },
  methods: {
    startRecord: function() {
      console.log("start to record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.startRecord({
        // eslint-disable-next-line no-unused-vars
        success: res => {
          //此处可以获取音频源文件(res)，用于上传等操作
          console.log("stop record successfully.");
        },
        // eslint-disable-next-line no-unused-vars
        error: res => {
          console.log("stop record failed.");
        }
      });
    },
    stopRecord: function() {
      console.log("stop record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.stopRecord({
        // eslint-disable-next-line no-unused-vars
        success: res => {
          //此处可以获取音频源文件(res)，用于上传等操作
          console.log("stop record successfully.");
        },
        // eslint-disable-next-line no-unused-vars
        error: res => {
          console.log("stop record failed.");
        }
      });
    },
    play: function() {
      console.log("play record now.");
      let self = this;
      self.isFinished = true;
      self.audio = document.querySelector("audio");
      self.recorder.play(self.audio);
    },
    send: function() {
      console.log("send the message.");
      let self = this;
      let msg = {};
      let msgId = 1;
      let data = self.recorder.getBlob();
      msg[msgId] = data;
      console.log(data);
      let dur = data.duration / 10;
      let str =
        "<div class='warper'><div id=" +
        msgId +
        " class='voiceItem'>" +
        dur +
        "s</div></div>";
      document.getElementById("messages").append(str);
      msgId++;
    }
  }
};
</script>
<style>
#messages {
  min-height: 400px;
  margin-bottom: 10px;
  border: 1px solid gainsboro;
}
.warper {
  clear: both;
  margin: 10px;
  display: block;
  min-height: 32px;
}
.voiceItem {
  background-color: skyblue;
  min-width: 100px;
  min-height: 32px;
  border-radius: 3px;
  float: right;
  cursor: pointer;
  line-height: 32px;
  text-indent: 10px;
}
</style>
