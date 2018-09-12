(function() {
  // 创建互动广告容器
  var container = document.createElement('div');
  container.id = 'hdgg-container';
  container.className = 'hdgg-container';
  container.style = 'position: absolute;  top: 3px;  right: 50%;  width: 180px;  height: 180px;  margin-right: -500px;'
  document.body.appendChild(container);

  // 还原Error为构造函数
  var Err_pre = Error || {};
  console.log(Err_pre)
  window.Error = function() {};
  for (var key in Err_pre) {
    if (Err_pre.hasOwnProperty(key)) {
      Error[key] = Err_pre[key]
    }
  }

  // 动态植入广告js
  var scriptNode = document.createElement('script');
  scriptNode.type = 'text/javascript';
  scriptNode.onload = scriptNode.onreadystatechange = loadEvent

  function loadEvent() {
    INTERACTIVE_PLUGIN.render({
      showid: 'Ag947e',
      w: 220,
      h: 180,
      game: 'wheel_browser',
      showClose: true,
      placeholderId: 'hdgg-container'
    })
  };
  scriptNode.src = 'interactive_plugin.js';
  document.body.appendChild(scriptNode);

  function isNewer(ver1, ver2) {
    var arr1 = ver1.split('.'),
      arr2 = ver2.split('.'),
      len = Math.max(arr1.length, arr2.length),
      val;
    for (var i = 0; i < len; i++) {
      var num1 = parseInt(arr1[i]) || 0,
        num2 = parseInt(arr2[i]) || 0;
      if (num1 > num2) {
        return true;
      } else if (num1 < num2) {
        return false;
      }
    }
    return true;
  };
})();