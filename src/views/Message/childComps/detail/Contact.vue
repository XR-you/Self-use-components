<!--聊天主页面-->
<template>
  <div class="contact">
    <div class="letter-main">
      <!--      展示聊天记录-->
      <ul>
        <li
          v-for="(message, index) in messageArray"
          :key="index">
          <message-item
            :message-item="message" />
        </li>
      </ul>
    </div>
    <div class="sendbox">
      <textarea
        type="text"
        v-model="message" />
      <input
        type="button"
        @click="sendmsg"
        value="发送">
    </div>
  </div>
</template>

<script>
import MessageItem from "./MessageItem";

export default {
  name: "Contact",
  components: {
    MessageItem
  },
  props: {
    userInfo: {
      type: Object,
      default () {
        return {};
      }
    },
    contactIndex: {
      type: Number,
      default () {
        return 0;
      }
    }
  },
  data () {
    return {
      messageArray: [],
      message: ""
    };
  },
  methods: {
    sendmsg () {
      if (this.message !== "") {
        this.messageArray.push(this.message);
        this.$emit("showLastMessage", this.message, this.contactIndex); // 用于在user中显示最后一条消息
        this.message = "";
      }
    }
  }
};
</script>

<style scoped>
  .contact {
    width: 100%;
    height: 100%;
  }
  .letter-main {
    height: 350px;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
  }
  .letter-main ul {
    list-style-type: none;
    margin: 1% 0 0 0;
  }
  .letter-main li {
    list-style: none;
    display: block;
    clear: both;/*清除msg-box产生的浮动*/
  }
  .sendbox {
    height: calc(100% - 350px);
    flex: 1;
    position: relative;
  }
  textarea {
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 96%;
    margin-left: calc(2%);
    border: none;
    background-color: #f4f5f7;
    resize:none;
    height: 55%;
    overflow-x:hidden;
    margin-top: 1.8%;
  }
  input[type="button"] {
    outline: none;
    position: absolute;
    bottom: 10%;
    right: 3%;
    width: 12%;
    border: none;
    background-color: #98afee;
    color: #fff;
    padding: 1% 0 1% 0;
    border-radius: 10%;
  }
</style>
