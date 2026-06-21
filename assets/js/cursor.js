function initCursor() {
  //カーソル要素の指定
  var cursor = $("#cursor");
  var cursorSub = $("#cursor_sub");

  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove", function(e) {
    //カーソルの座標位置を取得
    var x = e.clientX;
    var y = e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      "opacity": "1",
      "top": y + "px",
      "left": x + "px"
    });
    cursorSub.css({
      "opacity": "1",
      "top": y + "px",
      "left": x + "px"
    });
  });
}

// common.js実行後に初期化
window.addEventListener('load', initCursor);