<template>
  <div class="tour-main">
    <div class="tour-main-content">
      <!--      组件上半部分-->
      <div class="tour-main-top">
        <!--      左侧景点图片-->
        <div class="main-img">
          <img :src="tourInfo.mainImg" alt="">
        </div>
        <!--      右侧景点介绍-->
        <div class="introduce">
          <div class="introduce-content">
            <div class="introduce-title">
              <span>{{ tourInfo.tourName }}</span>
            </div>
            <div class="introduce-admit">
              <div>景点认证</div>
              <div :title="tourInfo.admitContent">{{ tourInfo.admitContent }}</div>
            </div>
            <div class="introduce-address">
              <div>景点地址</div>
              <div :title="tourInfo.tourAddress">{{ tourInfo.tourAddress }}</div>
            </div>
            <div class="introduce-phone">
              <div>景点电话</div>
              <div :title="tourInfo.tourPhone">{{ tourInfo.tourPhone }}</div>
            </div>
            <div class="introduce-direction">
              <div>景点向导</div>
              <div :title="tourInfo.tourDirection">{{ tourInfo.tourDirection }}</div>
            </div>
          </div>
        </div>
      </div>
      <!--      组件下半部分-->
      <div class="tour-main-bottom">
        <div class="swipper">
          <swipper />
        </div>
        <div class="bottom-content">{{ tourInfo.tourDetails }}</div>
        <div class="sell">
          <div class="sell-price">
            <span>景区售票:{{ tourInfo.tourPrice }}元</span>
          </div>
          <div>
            <button type="submit">现在购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swipper from "./Swiper";
export default {
  name: "TourMain",
  data () {
    return {
      tourInfo: {
        mainImg: "http://pic.netbian.com/uploads/allimg/180826/113958-153525479855be.jpg",
        tourName: "XX遗像馆",
        admitContent: "全国重点文物保护单位",
        tourAddress: "陕西省咸阳市",
        tourPhone: "1234576789",
        tourDirection: "在咸阳市火车站出发搭乘14路公交车到汽车站下车,在咸阳汽车站可以购买前往泾阳县的直通大巴车",
        tourDetails: "景点详情景点详情景点详情景点详情景点详情景点详情景点详情景点详情景点详情景点详情景点详情",
        tourPrice: 55
      }
    };
  },
  components: {
    Swipper
  },
  mounted () {
    document.body.style.backgroundColor = "#ededed";
  }
};
</script>

<style scoped>
  .tour-main {
    width: 1200px;
    margin: 0 auto;
  }
  .tour-main-content {
    margin-left: 143px;
  }
  .tour-main-top {
    display: flex;
    height: 350px;
  }
  .main-img {
    background-color: #ccc;
    width: 60%;
  }
  .main-img img {
    width: 100%;
    height: 350px;
  }
  .introduce {
    margin-left: 1%;
    width: 29%;
    background-color: #fff;
    text-align: center;
  }
  .introduce-content {
    width: 80%;
    margin-left: 10%;
    font-weight: bold;
  }
  .introduce-title,
  .introduce-admit,
  .introduce-address,
  .introduce-phone {
    border-bottom: 1px solid #d7d7d7;
  }
  .introduce-admit,
  .introduce-address,
  .introduce-phone,
  .introduce-direction {
    font-size: 13px;
  }
  .introduce-title {
    padding: 10% 0;
    font-size: 18px;
  }
  .introduce-admit,
  .introduce-address,
  .introduce-phone,
  .introduce-direction {
    padding: 4% 0;
  }
  .introduce-admit div:last-child,
  .introduce-address div:last-child,
  .introduce-phone div:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 4%;
    text-align: left;
    font-weight: normal;
  }
  .introduce-direction div:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
    padding-top: 2%;
    font-weight: normal;
  }
  .tour-main-bottom {
    width: 90%;
    margin-top: 3%;
    background-color: #fff;
    position: relative;
  }
  .bottom-content {
    padding: 0 5% 60px 5%;
  }
  .sell {
    display: flex;
    position: absolute;
    bottom: 10px;
    right: 25px;
  }
  .sell-price {
    line-height: 35px;
    margin-right: 15px;
  }
  .sell button {
    outline: none;
    width: 80px;
    height: 35px;
    border: none;
    background-color: #98afee;
    color: #fff;
    padding: 8px 0 8px 0;
    border-radius: 10%;
  }
  .sell button:hover {
    cursor: pointer;
  }
</style>
