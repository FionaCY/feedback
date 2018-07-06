import 'whatwg-fetch'
import imgStar from './img/star.png'
import imgStarInvert from './img/star-invert.png'
// import imgBg from './img/bg.png'
import imgRocket from './img/rocket.png'
import imgSpeaker from './img/speaker.png'

let expiretime = 0 // 获取评价页面的截止时间
let questionList = [
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

// 初始化问题内容
function renderList () {
  let timestamp = new Date().getTime()
  const coverPop = document.getElementsByClassName('cover-pop')[0]
  if (expiretime > timestamp) {
    coverPop.querySelector('p').innerHTML = '该评价已过期'
    coverPop.style.display = 'block'
    coverPop.querySelector('button').style.display = ''
    coverPop.querySelector('button').innerHTML = '关闭'
    document.getElementsByClassName('btn-sub')[0].style.display = 'none'
    return
  }
  initDom(questionList)
}

function initDom (data) {
  // document.getElementsByClassName('rocket')[0].setAttribute('src', imgRocket)
  document.getElementsByClassName('speaker')[0].setAttribute('src', imgSpeaker)
  let allStar = document.getElementsByClassName('star-content')[0].getElementsByTagName('img')
  for (let i = 0; i < allStar.length; i++) {
    allStar[i].setAttribute('src', imgStarInvert)
  }
  bindStarClick(data)
}

// 添加星星点击逻辑
function bindStarClick (data) {
  let starArr = document.getElementsByClassName('star-content')[0].getElementsByTagName('img')
  for (let i = 0; i < starArr.length; i++) {
    starArr[i].i = i
    let ele = starArr[i]
    let point = 0
    ele.addEventListener('touchend', function () {
      point = starLightChange(this)
      let tagEl = document.getElementsByClassName('star-content')[0]
      let currentStar = checkLightStarNum(tagEl)
      if (point === -1) {

      } else if (point === 0) {
        ele.parentNode.querySelector('p').innerHTML = ''
      } else {
        ele.parentNode.querySelector('p').innerHTML = data[currentStar].title
      }
      renderTagHtml(data[currentStar].tags)
      if (document.getElementsByClassName('textComment')[0].style.display === 'none') {
        document.getElementsByClassName('textComment')[0].style.display = ''
      }
      if (document.getElementsByClassName('textlength')[0].style.display === 'none') {
        document.getElementsByClassName('textlength')[0].style.display = ''
      }
    })
  }
}

function starLightChange (star) {
  let index = star.getAttribute('data-index')
  //  点击星星之外的部分不做处理
  if (index === null) {
    return -1
  }
  let starList = star.parentNode.getElementsByTagName('img')
  let starSrc = {
    light: imgStar,
    unlight: imgStarInvert
  }
  for (let i = 0, len = starList.length; i < len; i++) {
    let flag = Boolean(i <= +index)
    starList[i].setAttribute('src', starSrc[flag ? 'light' : 'unlight'])
    starList[i].setAttribute('choosed', flag)
  }
  return checkLightStarNum(star.parentNode)
}

// 检测每行被点击的星星数量
function checkLightStarNum (el) {
  let point = 0
  let imgArr = el.getElementsByTagName('img')
  for (let i = 0; i < imgArr.length; i++) {
    if (imgArr[i].hasAttribute('choosed') && (imgArr[i].getAttribute('choosed') === 'true')) {
      point++
    }
  }
  return point
}

function renderTagHtml (data) {
  let content = ''
  for (let i = 0; i < data.length; i++) {
    content += `
    <div class="tab-item" choosed="false" chooseId="${data[i].id}">
      <p>${data[i].name}</p>
    </div>`
  }
  document.getElementsByClassName('evaluat-tab')[0].innerHTML = content
  let tabEle = document.getElementsByClassName('tab-item')
  for (let j = 0; j < tabEle.length; j++) {
    let el = tabEle[j]
    el.addEventListener('touchend', function () {
      let word = el.getElementsByTagName('p')[0]
      if (el.getAttribute('choosed') === 'false') {
        el.setAttribute('choosed', 'true')
        word.style.color = '#FFB127'
        word.style.border = '1px solid #FFB127'
      } else if (el.getAttribute('choosed') === 'true') {
        el.setAttribute('choosed', 'false')
        word.style.color = '#908C8C'
        word.style.border = '1px solid #CFD0D2'
      } else {

      }
    })
  }
}

// url地址获取参数
function getUrlParam () {
  let urlSearchKV = {}
  const query = window.location.search.substr(1)
  const pairs = query.split('&')
  for (let i = 0; i < pairs.length; ++i) {
    const item = pairs[i].split('=')
    urlSearchKV[item[0]] = decodeURIComponent(item[1])
  }
  return urlSearchKV
}

// 本地生成唯一uid
function uuid (a) {
  return a ? (a ^ Math.random() * 16 >> a / 4).toString(16)
           : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
}

// 提交操作
function submit () {
  evaluatOk()
}
// 弹框
function showTip (text, hasCloseBtn) {
  let coverPop = document.getElementsByClassName('cover-pop')[0]
  const closeBtn = coverPop.querySelector('button')
  coverPop.style.display = 'block'
  coverPop.querySelector('p').innerHTML = text
  if (hasCloseBtn) {
    closeBtn.style.display = ''
    closeBtn.innerHTML = '关闭'
  } else {
    closeBtn.style.display = 'none'
  }
}

function hideTip () {
  let coverPop = document.getElementsByClassName('cover-pop')[0]
  if (coverPop.querySelector('button').style.display === 'none') {
    document.getElementsByClassName('cover-pop')[0].style.display = 'none'
  }
}
// 评价成功回调函数
function evaluatOk () {
  showTip('提交成功，感谢您的评价！', true)
}
// 点击提交触发事件
function bindSubmitClick () {
  document.getElementsByClassName('btn-sub')[0].addEventListener('click', function () {
    let count = 0
    let starArr = document.getElementsByClassName('question')
    for (let i = 0; i < starArr.length; i++) {
      if (checkLightStarNum(starArr[i]) > 0) {
        count++
      }
    }
    if (judgeRepeatSub()) {
      showTip('您已经提交过了哦', true)
      return
    }
    if (count === starArr.length) {
      submit()
    } else {
      showTip('评价还没有完成哦', false)
    }
  })
}

// 判断重复提交评价
function judgeRepeatSub () {
  return false
}

// 点击关闭按钮
function bindCloseClick () {
  document.getElementsByClassName('cover-pop')[0].querySelector('button')
  .addEventListener('click', function () {
    if (window.WeixinJSBridge) {
      window.WeixinJSBridge.call('closeWindow')
    } else {
      document.getElementsByClassName('cover-pop')[0].style.display = 'none'
    }
  })
  document.getElementsByClassName('cover-pop')[0]
  .addEventListener('click', function () {
    hideTip()
  })
}

// textarea事件绑定
function bindTextArea () {
  let el = document.getElementsByClassName('textComment')[0]
  el.addEventListener('input', function () {
    let length = el.value.length
    length = 100 - parseInt(length)
    document.getElementsByClassName('textlength')[0].innerHTML = length
  })
}

// 初始化操作
function init () {
  bindSubmitClick()
  renderList()
  bindCloseClick()
  bindTextArea()
}

init()
