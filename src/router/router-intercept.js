import wxLogin from '../wechat/wechat-login'
import router from './index'
import wxData from '../wechat/wechat-param'
import utils from '../jslib/utils'
import wxShare from '../wechat/wechat-share'
import Vue from 'vue'
//判断当前浏览器环境
let ua = navigator.userAgent.toLowerCase();

router.beforeEach((to, from, next) => {
  // console.log(to, '触发路由卫士_to');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  //修改标题
  utils.changeTitle(to.meta.title);
  if (to.meta.title==='下载专区'){
    if(!utils.getCookie('userInfo')){
      location.href='/#/login';
    }
  }
  if(to.meta.title==='登录'){
    document.getElementsByClassName('footer-box-box')[0].style.display='none';
    document.body.style.overflowY = 'hidden';
  }else {
    document.body.style.overflowY = 'initial';
    document.getElementsByClassName('footer-box-box')[0]&&(document.getElementsByClassName('footer-box-box')[0].style.display='block');

  }
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    // console.log('微信浏览器')
    //检查是否授权登录
    wxLogin(wxData).then(()=>{

    //从分享进入时去除form参数
    if (utils.getQueryString("from") == "timeline") {
      let str = window.location.href;
      str = str.replace("from=timeline", "");
      if (utils.getQueryString("isappinstalled") == "0") {
        let str1;
        str1 = str.replace("isappinstalled=0", "");
        if (str1.indexOf("?#")) {
          let redirectUrl = "http://" + location.hostname + '/';
          let url2 = redirectUrl + '?#' + to.fullPath;
          window.location.href = url2;
        } else {
          let redirectUrl = "http://" + location.hostname + '/';
          let url2 = redirectUrl + '?#' + to.fullPath;
          window.location.href = url2;
        }
      } else {
        window.location.href = str;
      }
    } else if (utils.getQueryString("from") == "groupmessage") {
      let str = window.location.href;
      str = str.replace("from=groupmessage", "");
      if (utils.getQueryString("isappinstalled") == "0") {
        let str1;
        str1 = str.replace("isappinstalled=0", "");
        if (str1.indexOf("?#")) {
          let redirectUrl = "http://" + location.hostname + '/';
          let url2 = redirectUrl + '?#' + to.fullPath;
          window.location.href = url2;
        } else {
          let redirectUrl = "http://" + location.hostname + '/';
          let url2 = redirectUrl + '?#' + to.fullPath;
          window.location.href = url2;
        }
      } else {
        window.location.href = str;
      }
    } else if (utils.getQueryString("from") == "singlemessage") {
      let str = window.location.href;
      str = str.replace("from=singlemessage", "");
      if (utils.getQueryString("isappinstalled") == "0") {
        let str1;
        str1 = str.replace("isappinstalled=0", "");
        if (str1.indexOf("?#")) {
          let redirectUrl = "http://" + location.hostname + '/';
          let url2 = redirectUrl + '?#' + to.fullPath;
          window.location.href = url2;
        } else {
          let redirectUrl = "http://" + location.hostname + '/';
          let url2 = redirectUrl + '?#' + to.fullPath;
          window.location.href = url2;
        }
      } else {
        window.location.href = str;
      }
    }

    })
      .finally(()=>{
        next();
      });

  } else {
    // console.log('外置浏览器');
    next();
  }


});
router.afterEach((to, from, next) => {

  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    // console.log('微信浏览器')
    wxShare(wxData)
  } else {
    // console.log('外置浏览器');
  }

})
