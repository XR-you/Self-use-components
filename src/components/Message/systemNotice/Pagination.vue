<template>
  <div class="pagination">
    <el-pagination
      background
      layout="pager"
      :total="1000" />
  </div>
</template>

<script>
export default {
  name: "Pagination"
};
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
</style>
