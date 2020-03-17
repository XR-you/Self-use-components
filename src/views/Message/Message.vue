<template>
  <div class="message">
    <item-select @itemClick="itemClick" />
    <item-content
      :titles="showContent"
      class="item-content"
      @showContact="showContact"
      :contact-show="currentContact" />
  </div>
</template>

<script>
import ItemSelect from "./childComps/ItemSelect";
import ItemContent from "./childComps/ItemContent";

export default {
  name: "Message",
  components: {
    ItemSelect,
    ItemContent
  },
  data () {
    return {
      currentType: "comment",
      currentContact: "0c"
    };
  },
  computed: {
    showContent () {
      return this.currentType;
    }
  },
  methods: {
    itemClick (index) {
      switch (index) {
        case 0:
          this.currentType = "comment";
          break;
        case 1:
          this.currentType = "notice";
          break;
        case 2:
          this.currentType = "letter";
          break;
      }
    },
    showContact (index) {
      this.currentContact = index + "c";
      console.log(this.currentContact);
      return this.currentContact;
    }
  }
};
</script>

<style scoped>
  .message {
    width: 100%;
    display: flex;
    background-color: #ededed;
    margin: 0 auto
  }
  .item-content {
    margin-left: 3%;
  }

</style>
