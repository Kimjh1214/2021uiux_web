$(document).ready(function(){
  $(".thumb_container li").click(function(){
    let s = $(this).index();
    $("#img p").hide().eq(s).show();
  });
  let scroll = 0; // page
  $(".right").click(function(){
    scroll++;
    if(scroll == 3){scroll = 0}
    // console.log(scroll);
    thumbScroll();
  });
  $(".left").click(function(){
    scroll--;
    if(scroll == -1){scroll = 2}
    console.log(scroll);
    thumbScroll();
  });
  function thumbScroll(){
    let sNum = scroll*-1*760; //
    $(".thumb_container ul").stop().animate({left:sNum},1000);
  }
});
