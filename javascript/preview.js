(function() {
    $(document).ready(function() {
        console.log('init finished...');
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var valueOrigin = localStorage.getItem(key);
            var value = (valueOrigin);
            $("#" + key).html(value.replace(/ /g, '&nbsp;'));
            console.log(key, value);
        }
    });
})();


(function() {
    $('#copyBtn').click(function () {
      var wholeDOM = $(".container");
      wholeDOM.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      alert("已复制好，可贴粘。");
    })
})();
