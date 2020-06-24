<!--每条聊天消息组件-->
<template>
  <div class="msg-box-left">
    <div class="msg-content-left">
      <span>{{ messageItem }}</span>
    </div>
    <div>
      <el-avatar :src="currentUser.userAvatar" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: {
    messageItem: {
      type: String,
      default: null
    },
    currentUser: {
      type: Object,
      default () {
        return {};
      }
    }
  }
};
</script>

<style scoped>
  .msg-box-left {
    display: flex;
    flex-direction: row-reverse;
    word-break: break-all;
    word-wrap: break-word;
    margin-left: 3%;
    float: left;
    padding: 3% 3% 0 0;
    max-width: 70%;
  }
  .msg-content-left {
    display: table;
    background-color: #adc0f1;
    padding: 9px 6px 9px 6px;
    margin-left: 8px;
    border-radius: 0 10px 10px 10px;
    white-space: pre-wrap;
    box-sizing: border-box;
  }
</style>
