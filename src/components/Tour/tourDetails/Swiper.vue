<template>
  <div class="swipper">
    <div class="box">
      <!--<button @click="imgMove">点击</button>-->
      <div class="main clearfix" @mouseover="btnOpen" @mouseout="btnHide">
        <div class="minMain">
          <div class="item" v-for="(item,index) in list" :key="index">
            <img :src="item.imgUrl">
          </div>
        </div>
        <div class="btnMain" v-show="btnShow">
          <div class="left" @click="leftClick">
            <img src="../../../assets/img/tourMainImg/ljiantou.png">
          </div>
          <div class="right" @click="rightClick">
            <img src="../../../assets/img/tourMainImg/rjiantou.png">
          </div>
        </div>
        <div class="pressMain">
          <span v-for="(item,index) in pressList"
                :key="index"
                :class="{active:item.isShow}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://www.jq22.com/jquery/vue.min.js"></script>
<script>
  export default {
    name: "Swiper",
    data() {
      return {
        list: [
          { imgUrl: require('../../../assets/img/tourMainImg/t1.png') },
          { imgUrl: require('../../../assets/img/tourMainImg/t2.png') },
          { imgUrl: require('../../../assets/img/tourMainImg/t3.png') },
          { imgUrl: require('../../../assets/img/tourMainImg/t4.png') },
          { imgUrl: require('../../../assets/img/tourMainImg/t5.png') }
        ],
        pressList: [{ name: '1', isShow: false }, { name: '2', isShow: false }, { name: '3', isShow: false }, { name: '4', isShow: false }, { name: '5', isShow: false }],
        numList: ['p0', 'p1', 'p2', 'p3', 'p4'],
        imgIndex: 0,
        imgTimer: null,
        btnShow: false
      }
    },
    mounted: function() {
      var Item = document.getElementsByClassName('item');
      for(var i = 0; i < Item.length; i++) {
        Item[i].className = 'item ' + this.numList[i]
      }
      this.imgMove()
      this.pressList[0].isShow = true
    },
    methods: {

      imgMove() {
        var Item = document.getElementsByClassName('item');
        this.imgTimer = setInterval(() => {
          this.numList.push(this.numList[0]);
          this.numList.shift()
          this.imgIndex++;
          for(var i = 0; i < Item.length; i++) {
            Item[i].className = 'item ' + this.numList[i];
          }
          for(var i in this.pressList) {
            this.pressList[i].isShow = false
          }
          if(this.imgIndex > 4) {
            this.imgIndex = 0
            this.pressList[this.imgIndex].isShow = true;
          } else {
            this.pressList[this.imgIndex].isShow = true;
          }
        }, 15000)
      },
      btnOpen() {
        this.btnShow = true;
        clearInterval(this.imgTimer)
      },
      btnHide() {
        this.btnShow = false;
        this.imgMove()
      },
      leftClick() {
        var Item = document.getElementsByClassName('item');
        this.numList.unshift(this.numList[4]);
        this.numList.pop()
        for(var i = 0; i < Item.length; i++) {
          Item[i].className = 'item ' + this.numList[i];
        }
        for(var i in this.pressList) {
          this.pressList[i].isShow = false
        }
        this.imgIndex--
        if(this.imgIndex < 0) {
          this.imgIndex = 4
          this.pressList[this.imgIndex].isShow = true;
        } else {
          this.pressList[this.imgIndex].isShow = true;
        }
      },
      rightClick() {
        var Item = document.getElementsByClassName('item');
        this.numList.push(this.numList[0]);
        this.numList.shift()
        for(var i = 0; i < Item.length; i++) {
          Item[i].className = 'item ' + this.numList[i];
        }
        for(var i in this.pressList) {
          this.pressList[i].isShow = false
        }
        this.imgIndex++
        if(this.imgIndex > 4) {
          this.imgIndex = 0
          this.pressList[this.imgIndex].isShow = true;
        } else {
          this.pressList[this.imgIndex].isShow = true;
        }
      }
    }
  }
</script>

<style scoped>
  body{background-color: #212121}
  .clearfix:after {
    content: " ";
    display: block;
    clear: both;
  }
  .box {
    position: relative;
    width: 680px;
    height: 300px;
    margin: 0 auto;
  }
  .main {
    width: 680px;
    height: 252px;
    position: absolute;
    top: 25px;
    left: 50%;
    margin-left: -340px;
    overflow: hidden;
  }
  .item {
    list-style: none;
    width: 280px;
    height: 180px;
    position: absolute;
    left: 0;
    top: 27px;
    transition: all 0.3s ease;
  }
  .p0 {
    transform: translate3d(-400px, 0, 0) scale(1);
    opacity: 0.1;
    z-index: 1;
  }
  .p1 {
    transform: translate3d(0px, 0, 0) scale(1);
    opacity: 0.8;
    z-index: 2;
  }
  .p2 {
    transform: translate3d(400px, 0, 0) scale(1);
    opacity: 0.8;
    z-index: 3;
  }
  .p3 {
    transform: translate3d(200px, 0, 0) scale(1.5);
    opacity: 1;
    z-index: 4;
  }
  .p4 {
    transform: translate3d(600px, 0, 0) scale(1);
    opacity: 0.1;
    z-index: 3;
  }
  .newItem {
    position: absolute;
    left: 0;
    top: 0;
  }

  .changeItem {
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -202px;
    transform: scale(1.4);
  }
  .item img {
    width: 100%;
    height: 100%;
  }
  .btnMain {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .left {
    position: absolute;
    left: 30px;
    top: 50%;
    margin-top: -15px;
    z-index: 10;
  }
  .right {
    position: absolute;
    right: 30px;
    top: 50%;
    margin-top: -15px;
    z-index: 10;
  }
  .left img,
  .right img {
    width: 30px;
    height: 30px;
  }
  .pressMain {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 134px;
    height: 24px;
    margin-left: -37px;
    z-index: 20;
  }
  .pressMain span {
    display: inline-block;
    margin: 2px 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(255,255,255,0.53);
    text-align: center;
    line-height: 20px;
  }
  .pressMain .active {
    background: #fff;
  }
</style>
