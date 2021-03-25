AOS.init();



if (window.innerWidth > 767.98) {       
  $("#headerSection").css({"min-height":window.innerHeight - $("#topNav").height() + "px"});
  $("#headerSection>div").css({"min-height":window.innerHeight - $("#topNav").height() + "px"});
  $("#headerSection>div>div").css({"min-height":window.innerHeight - $("#topNav").height() + "px"});
}else{
  $("#headerSection").css({"min-height":"unset"});
  $("#headerSection>div").css({"min-height":"unset"});
  $("#headerSection>div>div").css({"min-height":"unset"});
}

$(window).on('resize once onload change', function(){
  if (window.innerWidth > 767.98) {       
      $("#headerSection").css({"min-height":window.innerHeight - $("#topNav").height() + "px"});
      $("#headerSection>div").css({"min-height":window.innerHeight - $("#topNav").height() + "px"});
      $("#headerSection>div>div").css({"min-height":window.innerHeight - $("#topNav").height() + "px"});
  }else{
      $("#headerSection").css({"min-height":"unset"});
      $("#headerSection>div").css({"min-height":"unset"});
      $("#headerSection>div>div").css({"min-height":"unset"});
  }
  
});