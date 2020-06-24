<!--左侧消息类型选择组件-->
<template>
  <div class="item-select">
    <div class="content">
      <div
        v-for="(item, index) in group"
        :key="item"
        @click="itemClick(index)"
        :class="{active: index === currentIndex}">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSelect",
  data () {
    return {
      group: ["评论/留言", "系统通知", "私信"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    }
  }
};
</script>

<style scoped>
  .item-select {
    width: 15%;
  }
  .content {
    border: 1px solid #d7d7d7;
    border-radius: 10%;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item-select div {
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
    line-height: 50px;
  }
  .content div:last-child {
    border-bottom: none;
  }
  .active {
    color: #fff;
    background-color: #adc0f1 !important;
  }
</style>
