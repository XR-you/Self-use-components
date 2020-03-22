<template>
  <div class="comment-item">
    <div class="comment-left">
      <div class="comment-avatar">
        <el-avatar />
      </div>
      <div class="comment-text">
        <div>
          <span class="username">{{ commentInfo.name }}</span>
          <span class="title">评论了我的作品</span>
        </div>
        <div>
          <span class="time">{{ commentInfo.time }}</span>
        </div>
        <div class="comment-reply">
          <span>{{ commentInfo.commentReply }}</span>
        </div>
      </div>
    </div>
    <div class="comment-right">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {};
      }
    }
  }
};
</script>

<style scoped>
  .comment-item {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d7d7d7;
    padding: 1.7% 0;
    font-size: 12px;
  }
  .comment-left {
    display: flex;
    width: 75%;
  }
  .comment-text {
    margin-left: 3%;
    font-weight: bold;
  }
  .comment-text div {
    padding: 0.3% 0;
  }
  .username {
    padding-right: 15px;
  }
  .title {
    color: #858585;
  }
  .time {
    color: #4b4b4b;
  }
  .comment-reply {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #4b4b4b;
  }
  .comment-right {
    background-color: #ccc;
    width: 20%;
    height: 75px;
    border-radius: 6px;
  }
</style>
