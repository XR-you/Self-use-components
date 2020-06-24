<template>
  <div class="notice-item">
    <div>
      <span>{{ noticeInfo.noticeTitle }}</span>
    </div>
    <div>
      <span>{{ noticeInfo.noticeTime }}</span>
    </div>
    <div class="notice-content">
      <span>{{ noticeInfo.noticeContent }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeItem",
  props: {
    noticeInfo: {
      type: Object,
      default () {
        return {};
      }
    }
  }
};
</script>

<style scoped>
  .notice-item {
    padding: 1.4% 0;
    border-top: 1px solid #d7d7d7;
    font-size: 14px;
  }
  .notice-item div {
    padding: 1px 0;
  }
  .notice-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>
