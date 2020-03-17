<!--右侧界面显示组件-->
<template>
  <div class="item-content">
    <!--    评论/留言-->
    <div
      class="comment"
      v-show="commentShow">
      <div class="head">
        <span>消息中心</span>
      </div>
      <div class="comment-content">
        <h2>comment</h2>
      </div>
    </div>
    <!--    系统通知-->
    <div
      class="notice"
      v-show="noticeShow">
      <div class="head">
        <span>消息中心</span>
      </div>
      <h2>notice</h2>
    </div>
    <!--    私信-->
    <div
      class="letter"
      v-show="letterShow">
      <div class="head">
        <span>消息中心</span>
      </div>
      <div class="letter-body">
        <!--        消息发送人-->
        <div class="letter-left">
          <user v-for="(userInfo, index) in userArray"
                :key="index"
                :user-info="userInfo"
                @click.native="userClick(index)"
                :class="{active: index === currentUser}" />
        </div>
        <!--        聊天界面-->
        <div class="letter-right">
          <contact v-for="(userInfo, index) in userArray"
                   :key="index+'c'"
                   :user-info="userInfo"
                   v-show="contactShow === index+'c'"
                   :contact-index="index"
                   @showLastMessage="showLastMessage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./detail/User";
import Contact from "./detail/Contact";

export default {
  name: "IemContent",
  components: {
    User,
    Contact
  },
  props: {
    titles: {
      type: String,
      default () {
        return "comment";
      }
    },
    contactShow: {
      type: String,
      default () {
        return "";
      }
    }
  },
  data () {
    return {
      isActive: false,
      currentUser: 0,
      userArray: [
        {
          userId: "阿门",
          userAvatar: "https://lh3.googleusercontent.com/proxy/4dd3ZDhEuOXYCidZu5CgxI61hV4S989t-ehY0gTgiCNDEPGMOr0tIrcz1eKmrAY8jhNDcBPXsRPWNn3iw-Az0vh4ABE",
          lastMessage: " "
        },
        {
          userId: "阿前",
          userAvatar: "data:image/jpeg;base64,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",
          lastMessage: " "
        },
        {
          userId: "一棵葡萄树",
          userAvatar: "https://wapimg.aitaotu.cc:8090/Thumb/2019/0413/5cfbf54551c6545403d9e6bb2de33cba.jpg",
          lastMessage: " "
        }]
    };
  },
  computed: {
    commentShow () {
      return this.titles === "comment";
    },
    noticeShow () {
      return this.titles === "notice";
    },
    letterShow () {
      return this.titles === "letter";
    }
  },
  methods: {
    userClick (index) {
      this.currentUser = index;
      this.$emit("showContact", index);
    },
    showLastMessage (message, contactIndex) {
      this.userArray[contactIndex].lastMessage = message;
    }
  }
};
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");

  .item-content {
    width: 50%;
    background-color: #fff;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    overflow: hidden;
  }
  .head {
    height: 50px;
    line-height: 50px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 5px 2px #aeaeae;
    color: #959595;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative; /*解决box-shadow被覆盖的问题*/
  }
  .head span {
    margin-left: 30px;
    font-size: large;
    font-weight: bolder;
    letter-spacing: 2px;
    color: #959595;
  }
  .letter-body {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .letter-left {
    background-color: #fff;
    width: 30%;
    height: 497px;
    border-right: 1px solid #d7d7d7;
  }
  .letter-right {
    width: 70%;
    height: 497px;
    background-color: #f4f5f7;
  }
  .active {
    background-color: #f4f5f7;
  }
</style>
