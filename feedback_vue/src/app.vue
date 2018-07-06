<template>
  <div id="main">
  	<div class="cover-pop">
	    <div class="cover-bg">
	      <p></p>
	      <button></button>
	    </div>
	  </div>
	  <div id="container">
	    <div class="evaluat-title common-padding">
		    <img class="rocket" />
		    <img class="speaker" />
		    <div class="tip">
		      <div class="evaluat-cn">订单评价</div>
		      <div class="evaluat-en">Evaluation</div> 
		      <div class="evaluat-intro">所有评价均为匿名，请放心作答</div>
		    </div>
	    </div>
	    <star />
	    <comment />
	    <div class="evaluat-sub common-padding">
	      <button class="btn-sub">匿名提交</button>
	    </div>
		</div>
  </div>
</template>
<style scoped>

  .cover-pop {
    position: fixed;
    z-index: 1000;
    background: rgba(0,0,0,.2);
    width: 100%;
    height: 100%;
    display: none;
  }

  .cover-pop .cover-bg {
    position: absolute;
    top:35%;
    width: 70%;
    margin-left: 15%;
    background: #FFFFFF;
    border-radius: 7.2px;
    text-align: center;
    padding-top: 10px;
  }

  .cover-pop .cover-bg p {
    font-size: 17px;
    color: #030303;
    letter-spacing: 0;
    line-height: 19px;
  }

  .cover-pop .cover-bg button {
    width: 108px;
    height: 32px;
    border: 0;
    padding: 0;
    background-image: linear-gradient(-133deg, #5B8CFA 0%, #4678F6 100%);
    border-radius: 100px;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: 0.88px;
    line-height: 17px;
    margin-bottom: 20px;
    font-family: "HelveticaNeue,Helvetica,Arial,sans-serif";
  }

  #container {
    width: 100%;
    height: 100%;
    color: #989A9C;
    background: #F2F4F8;
    font-family: PingFangSC-Medium;
  }

  .common-padding {
    padding-top: 22px;
    padding-bottom: 21px;
  }

  .evaluat-title {
    width: 100%;
    height: 180px;
    background: linear-gradient(to right, #2B55C0 0%, #5384F1 100%);
    overflow-x: hidden;
  }
  .evaluat-title .rocket {
    position: absolute;
    top: -20px;
    left: 45px;
    width: calc(100% - 55px);
  }

  .evaluat-title .speaker {
    position: absolute;
    top: 53px;
    width: 30px;
    left: 8%;
  }

  .evaluat-title .tip {
    position: absolute;
    top: 46.2px;
    left: 20%;
    width: 196px;
    height: 80px;
  }

  .evaluat-title .tip .evaluat-cn {
    font-size: 30px;
    color: #F5F7FB;
    letter-spacing: 0;
  }

  .evaluat-title .tip .evaluat-en {
    font-family: Helvetica;
    font-size: 16px;
    color: #B8C5E1;
    letter-spacing: 0;
    margin-top:5px;
  }

  .evaluat-title .tip .evaluat-intro{
    font-size: 14px;
    color: #F5F7FB;
    letter-spacing: 0;
    margin-top: 16px;
  }
  .evaluat-sub {
    width: 100%;
    height: 10%;
    text-align: center;
  }

  .btn-sub {
    padding: 0;
    border: 0;
    width: 80%;
    height: 3rem;
    font-size: 1rem;
    color: #fff;
    background-image: linear-gradient(-133deg, #5B8CFA 0%, #4678F6 100%);
    border-radius: 100px;
  }
  div, img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select:none;
  }
  @media (min-width: 750px) {
    .evaluat-title .rocket {
      left: 350px;
      width: auto;
      height: 180px;
    }
    .evaluat-title .speaker {
      left: 14%;
    }
    .evaluat-content .star-content {
      padding-left: 3rem;
    }
  }
</style>
<script>
import star from './components/star.vue'

export default {
  name: 'app', // 组件名
  components: { // app.vue的子组件
    star
  },
  data () { // 组件内部数据
    return {
      
    }
  },
  methods: { // 内部方法
  }
}
</script>