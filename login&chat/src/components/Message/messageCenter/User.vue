<!--每个消息发送人组件-->
<template>
  <div class="user">
    <div class="user-content">
      <div class="user-left">
        <el-avatar :src="userInfo.userAvatar" />
      </div>
      <div class="user-right">
        <div>
          <div class="user-right-name">
            {{ this.userInfo.userId }}
          </div>
          <div class="user-right-content">
            <span>{{ this.userInfo.lastMessage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    userInfo: {
      type: Object,
      default () {
        return {};
      }
    }
  }
};
</script>

<style scoped>
  .user {
    height: 80px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .user-content {
    display: flex;
    margin: 0 auto;
  }
  .user-right,
  .user-left {
    display: flex;
    align-items: center;
  }
  .user-right {
    width: 130px;
    margin-left: 10px;
    display: inline-block;
  }
  .user-right-name {
    font-size: 14px;
    font-weight: bold;
    display: inline;
  }
  .user-right-content {
    margin-top: 5px;
    width: 100%;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
</style>
