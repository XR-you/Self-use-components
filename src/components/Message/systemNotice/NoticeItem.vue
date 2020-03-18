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
    padding: 10px 0;
    border-top: 1px solid #d7d7d7;
  }
  .notice-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
