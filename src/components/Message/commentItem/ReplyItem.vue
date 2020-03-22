<template>
  <div class="reply-item">
    <div class="reply-left">
      <div class="reply-avatar">
        <el-avatar />
      </div>
      <div class="reply-text">
        <div>
          <span class="username">{{ replyInfo.name }}</span>
          <span class="title">回复了我的评论</span>
        </div>
        <div>
          <span class="time">{{ replyInfo.time }}</span>
        </div>
        <div class="reply-content">
          <span>{{ replyInfo.replyContent }}</span>
        </div>
        <div class="my-comment">
          <span>"{{ replyInfo.myComment }}"</span>
        </div>
      </div>
    </div>
    <div class="reply-right">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ReplyItem",
  props: {
    replyInfo: {
      type: Object,
      default () {
        return {};
      }
    }
  }
};
</script>

<style scoped>
  .reply-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #d7d7d7;
    padding: 1.7% 0;
    font-size: 12px;
  }
  .reply-left {
    display: flex;
    width: 75%;
  }
  .reply-text {
    margin-left: 3%;
    font-weight: bold;
  }
  .reply-text div {
    padding: 0.4% 0;
  }
  .username {
    padding-right: 15px;
    color: #4b4b4b;
  }
  .title {
    color: #858585;
  }
  .time {
    color: #4b4b4b;
  }
  .reply-right {
    background-color: #ccc;
    width: 20%;
    height: 75px;
    border-radius: 6px;
  }
  .my-comment {
    color: #858585;
  }
  .reply-content {
    color: #4b4b4b;
  }
  .reply-content,
  .my-comment {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
</style>
