/* $(function(){
  
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
});*/

$(function () {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let stalkerX = mouseX;
    let stalkerY = mouseY;

    $(window).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {

        cursorX += (mouseX - cursorX) * 0.25;
        cursorY += (mouseY - cursorY) * 0.25;

        stalkerX += (cursorX - stalkerX) * 0.12;
        stalkerY += (cursorY - stalkerY) * 0.12;

        $("#cursor_main").css({
            left: cursorX + "px",
            top: cursorY + "px"
        });

        $("#cursor_stalker").css({
            left: stalkerX + "px",
            top: stalkerY + "px"
        });

        requestAnimationFrame(animate);
    }

    animate();

    $(document).on("mouseenter", ".clickable", function () {
    $("#cursor_main").addClass("cursor-hover");
});

$(document).on("mouseleave", ".clickable", function () {
    $("#cursor_main").removeClass("cursor-hover");
});

});