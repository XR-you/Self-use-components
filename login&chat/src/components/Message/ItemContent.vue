<!--右侧界面显示组件-->
<template>
  <div class="item-content">
    <div class="content-body">
      <!--    评论/留言-->
      <div
        class="comment"
        v-show="commentShow">
        <div class="head">
          <span>消息中心</span>
        </div>
        <div class="comment-body">
          <ul>
            <li v-for="(itemInfo, index) in currentPageArray"
                :key="index + 'rc'">
              <reply-item v-if="itemInfo.type === 0" :reply-info="itemInfo" />
              <comment-item v-else :comment-info="itemInfo" />
            </li>
          </ul>
        </div>
      </div>
      <!--    系统通知-->
      <div
        class="notice"
        id="notice"
        v-show="noticeShow">
        <div class="head">
          <span>消息中心</span>
        </div>
        <div class="notice-body">
          <ul>
            <li v-for="(noticeInfo, index,) in currentNoticePageArray"
                :key="index+'n'">
              <notice-item :notice-info="noticeInfo" />
            </li>
          </ul>
        </div>
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
                  :class="{active: index === currentFriend}" />
          </div>
          <!--        聊天界面-->
          <div class="letter-right">
            <contact v-for="(userInfo, index) in userArray"
                     :key="index+'c'"
                     :user-info="userInfo"
                     v-show="contactShow === index+'c'"
                     :contact-index="index"
                     @showLastMessage="showLastMessage"
                     :current-user="currentUser" />
          </div>
        </div>
      </div>
    </div>
    <!--      翻页-->
    <div class="pagination" id="pagination1">
      <el-pagination
        v-show="commentShow"
        background
        class="el-pagination2"
        layout="pager"
        :page-size="pageSize"
        :total="totalNum"
        @current-change="HandleCoReCurrentChange" />
    </div>
    <div class="pagination" id="pagination2">
      <el-pagination
        v-show="noticeShow"
        background
        class="el-pagination2"
        layout="pager"
        :page-size="noticePageSize"
        :total="noticeTotalNum"
        @current-change="HandleCurrentChange" />
    </div>
  </div>
</template>

<script>
// 评论留言组件
import ReplyItem from "./commentItem/ReplyItem";
import CommentItem from "./commentItem/CommentItem";

// 系统通知组件
import NoticeItem from "./systemNotice/NoticeItem";

// 私信组件
import User from "./messageCenter/User";
import Contact from "./messageCenter/Contact";

export default {
  name: "IemContent",
  components: {
    ReplyItem,
    CommentItem,
    NoticeItem,
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
      // 评论/留言数据
      pageSize: 5,
      totalNum: 10,
      currentPage: 1,
      reCoArray: [
        {
          type: 0,
          name: "用户昵称",
          time: "2020-3-01 12:00",
          replyContent: "回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容",
          myComment: "我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论",
          imgSrc: ""
        },
        {
          type: 1,
          name: "用户昵称",
          time: "2020-3-02 12:00",
          commentReply: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
          imgSrc: ""
        },
        {
          type: 0,
          name: "用户昵称",
          time: "2020-2-27 12:00",
          replyContent: "回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容",
          myComment: "我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论",
          imgSrc: ""
        },
        {
          type: 1,
          name: "用户昵称",
          time: "2020-3-02 12:00",
          commentReply: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
          imgSrc: ""
        },
        {
          type: 1,
          name: "用户昵称",
          time: "2020-3-02 12:00",
          commentReply: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
          imgSrc: ""
        },
        {
          type: 1,
          name: "用户昵称",
          time: "2020-3-02 12:00",
          commentReply: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
          imgSrc: ""
        }
      ],
      // 系统通知数据
      noticePageSize: 6,
      noticeTotalNum: 10,
      noticeCurrentPage: 1,
      noticeArray: [
        {
          noticeTitle: "标题标题标题标题",
          noticeTime: "2020-3-16",
          noticeContent: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内那内容内容内容内容内容内容内容内容内容内容内容内容内容"
        },
        {
          noticeTitle: "标题标题标题标题",
          noticeTime: "2020-3-15",
          noticeContent: "内容那内容内容内容内容内容内容"
        },
        {
          noticeTitle: "标题标题标题标题",
          noticeTime: "2020-3-15",
          noticeContent: "内容那内容内容内容内容内容内容"
        },
        {
          noticeTitle: "标题标题标题标题",
          noticeTime: "2020-3-15",
          noticeContent: "内容那内容内容内容内容内容内容"
        },
        {
          noticeTitle: "标题标题标题标题",
          noticeTime: "2020-3-15",
          noticeContent: "内容那内容内容内容内容内容内容"
        },
        {
          noticeTitle: "标题标题标题标题",
          noticeTime: "2020-3-15",
          noticeContent: "内容那内容内容内容内容内容内容"
        },
        {
          noticeTitle: "标题标题标题标题",
          noticeTime: "2020-3-15",
          noticeContent: "内容那内容内容内容内容内容内容"
        }
      ],
      paBgc: "white",
      // 私信数据
      isActive: false,
      currentFriend: 0,
      currentUser: {
        userId: "阿绿",
        userAvatar: "data:image/jpeg;base64,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",
        haveSentMessage: ""
      },
      userArray: [
        {
          userId: "阿门",
          userAvatar: "data:image/jpeg;base64,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",
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
  created () {
    this.noticeTotalNum = this.noticeArray.length;
    this.totalNum = this.reCoArray.length;
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
    },
    currentNoticePageArray () {
      return this.noticeArray.slice((this.noticeCurrentPage - 1) * this.noticePageSize, this.noticeCurrentPage * this.noticePageSize);
    },
    currentPageArray () {
      return this.reCoArray.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    }
  },
  methods: {
    userClick (index) {
      this.currentFriend = index;
      this.$emit("showContact", index);
    },
    showLastMessage (message, contactIndex) {
      this.userArray[contactIndex].lastMessage = message;
    },
    HandleCurrentChange (cpage) {
      this.noticeCurrentPage = cpage;
    },
    HandleCoReCurrentChange (cpage) {
      this.currentPage = cpage;
    }
  }
};
</script>

<style scoped>
  @import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
  .item-content {
    width: 60%;
  }
  .content-body {
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
  .comment-body {
    width: 90%;
    height: 497px;
    margin-left: 5%;
  }
  .notice-body {
    width: 90%;
    height: 497px;
    margin-left: 5%;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .pagination {
    margin-top: 2%;
    text-align: center;
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
    overflow: auto;
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
<style>
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    color: #fff !important;
    background-color: #292a2c !important;
  }
  .el-pagination.is-background .el-pager li {
    color: #292a2c !important;
    background-color: #fff;
  }
  .el-pagination.is-background .el-pager li:hover{
    color: #292a2c !important;
  }
</style>
