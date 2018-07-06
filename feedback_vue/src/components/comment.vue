<template>
  <div id="comment">
  	<textarea  v-model="commentContent" class="textComment" rows="5" cols="20" placeholder="其他想说的" maxlength="100"></textarea>
    <span class="textlength">{{ textLen }}</span>
  </div>
</template>
<style scoped>
#comment {
	padding-bottom: 20px;
}
.textComment {
    width: 80%;
    margin-top:20px;
    padding: 5px 5px 5px 5px;
    font-size: 13px;
    letter-spacing: 1px;
    border: 1px solid #CFD0D2;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .textlength {
    font-size: 13px;
    margin-left: 245px;
    margin-top: -42px;
    display: block;
    height: 20px;
  }
</style>
<script>
export default {
  name: 'comment', // 组件名
  data () { // 组件内部数据
    return {
      commentContent: '',
      textLen: 100
    }
  },
  watch: {
  	commentContent: function (val) {
  		console.log(val)
  		this.textLen = 100 - val.length
  	}
  },
  methods: { // 内部方法
  }
}
</script>