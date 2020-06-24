<template>
  <div class="message">
    <div class="message-content">
      <item-select @itemClick="itemClick" />
      <item-content
        :titles="showContent"
        class="item-content"
        @showContact="showContact"
        :contact-show="currentContact" />
    </div>
  </div>
</template>

<script>
import ItemSelect from "../../components/Message/ItemSelect";
import ItemContent from "../../components/Message/ItemContent";

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
  mounted () {
    document.body.style.backgroundColor = "#ededed";
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
    width: 1200px;
    margin: 0 auto;
  }
  .message-content {
    width: 100%;
    display: flex;
    margin-left: 11%;
  }
  .item-content {
    margin-left: 3%;
  }

</style>
