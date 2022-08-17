$(document).ready(function(){
  // nav
  $("#GNB .main li").hover(function(){
    $(".header__bg").stop().slideDown(200);
    $("#GNB .sub").stop().slideDown(200);
  },function(){
    $(".header__bg").stop().slideUp(200);
    $("#GNB .sub").stop().slideUp(200);
  });

  // slide
  $(".slide__box > div").hide();
  $(".slide__box > div:first").show();
  function slidemove(){
    $(".slide__box > div:first").fadeOut().next().fadeIn().end().appendTo(".slide__box");
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide()
  $("#notice ul li:first-child").click(function(){
    $("#pop").show();
  })
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  })

});