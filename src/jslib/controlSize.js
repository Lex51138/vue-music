//通过随着屏幕改变document的fontSize来达到rem自适应的效果
 function getRootFontSize() {
  let root = document.documentElement;
  let clientWidth = root.clientWidth;
  root.style.fontSize = clientWidth * 100 /  750 + 'px';
}

window.addEventListener('orientationchange', getRootFontSize);//用户水平或者垂直翻转设备（即方向发生变化）时触发的事件
window.addEventListener('resize', getRootFontSize);
getRootFontSize();






