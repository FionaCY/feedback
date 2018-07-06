<template>
  <div id="star">
  	<div class="evaluat-content">
      <div class="star-content common-padding">
        <h5>请您对本次出行进行评价</h5>
        <img :src="starCount >= 1 ? imgStar:imgStarInvert" @click="starClick(1)">
        <img :src="starCount >= 2 ? imgStar:imgStarInvert" @click="starClick(2)">
        <img :src="starCount >= 3 ? imgStar:imgStarInvert" @click="starClick(3)">
        <img :src="starCount >= 4 ? imgStar:imgStarInvert" @click="starClick(4)">
        <img :src="starCount >= 5 ? imgStar:imgStarInvert" @click="starClick(5)">       
        <p>{{ questionList[starCount].title }}</p>
      </div>
      <div class="evaluat-tab">
	      <div class="tab-item" v-for="(qus, index) in questionList[starCount].tags" @click="tagClick">
	      	<span choosed="false">{{ qus.name }}</span>
	      </div>
	    </div>
	    <comment />
  </div>
  </div>
</template>
<style scoped>
.evaluat-content {
    width: 90%;
    height: 75%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: -40px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(209,209,209,0.35);
    border-radius: 4px;
    text-align: center;
  }

  .evaluat-content .star-content {
    height: 100px;
    text-align: center;
  }

  .evaluat-content img {
    margin-right: 20px;
    width: 28px;
    vertical-align: middle;
  }

  .evaluat-content p {
    opacity: 0.85;
    font-size: 14px;
    color: #627AAA;
    line-height: 14px;
    padding: 0;
    margin-top: 16px;
  }

  .evaluat-tab {
    height:120px;
    width: auto;
    margin-top: 25px;
  }

  .evaluat-tab .tab-item {
    width: 50%;
    height: 45px;
    float: left;
    margin-top: 8px;
    text-align: center;
  }

  .evaluat-tab .tab-item  span{
  	padding: 5px 10px;
  	border-radius: 12px;
  }

  .evaluat-tab .tab-item img {
    margin-right: 2px;
    height: 20px;
    width: auto;
    margin-left: 3px;
  }

  .evaluat-tab .tab-item p {
    vertical-align: middle;
    font-size: 13px; 
    width: 130px;
    border-radius: 100px; 
    color: #908C8C 100%;
    border: 0.5px solid #CFD0D2;  
    padding: 10px 8px 10px 8px;
    position: relative;
    left: 50%;
    margin-left: -75px;
  }
</style>
<script>
import comment from './comment.vue'
import imgStar from '../img/star.png'
import imgStarInvert from '../img/star-invert.png'
export default {
  name: 'star', // 组件名
  components: { // app.vue的子组件
    comment
  },
  data () { // 组件内部数据
    return {
    	imgStar,
    	imgStarInvert,
    	starCount: 0,
      questionList: [
			  {

			  },
			  {
			    title: '非常不满意，各方面都很差！',
			    tags:[
			      {
			        id: 1,
			        name: '道路不熟'
			      },
			      {
			        id: 2,
			        name: '服务态度恶劣'
			      },
			      {
			        id: 3,
			        name: '车辆脏破'
			      },
			      {
			        id: 4,
			        name: '车内有异味'
			      }
			    ]
			  },
			  {
			    title: '不满意，比较差！',
			    tags:[
			      {
			        id: 5,
			        name: '车牌号不符'
			      },
			      {
			        id: 6,
			        name: '司机吸烟'
			      },
			      {
			        id: 7,
			        name: '打电话，玩手机'
			      },
			      {
			        id: 8,
			        name: '未坐好就开车'
			      }
			    ]
			  },
			  {
			    title: '一般，还需改善！',
			    tags:[
			      {
			        id: 9,
			        name: '未提醒安全带'
			      },
			      {
			        id: 10,
			        name: '未提醒开门注意'
			      }
			    ]
			  },
			  {
			    title: '比较满意，仍可改善！',
			    tags:[
			      {
			        id: 11,
			        name: '过路口不减速'
			      },
			      {
			        id: 12,
			        name: '索要好评'
			      }
			    ]
			  },
			  {
			    title: '非常满意，无可挑剔！',
			    tags:[
			      {
			        id: 13,
			        name: '车内整洁'
			      },
			      {
			        id: 14,
			        name: '驾驶平稳'
			      },
			      {
			        id: 15,
			        name: '活地图认路准'
			      },
			      {
			        id: 16,
			        name: '态度好服务棒'
			      }
			    ]
			  }
			]
    }
  },
  methods: { // 内部方法
  	starClick (val) {
  		this.starCount = val
  	},
  	tagClick(e) {
  		let el = e.target
  		if (el.getAttribute('choosed') === 'false') {
        el.setAttribute('choosed', 'true')
        el.style.color = '#FFB127'
        el.style.border = '1px solid #FFB127'
      } else if (el.getAttribute('choosed') === 'true') {
        el.setAttribute('choosed', 'false')
        el.style.color = '#908C8C'
        el.style.border = '1px solid #CFD0D2'
      } else {

      }
  	}
  }
}
</script>