function nhaplai(){
    document.getElementById("myform").reset();
};
window.onscroll = function() {scrollFunction(),header()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btngototop").style.display = "block";
  } else {
    document.getElementById("btngototop").style.display = "none";
  }
};
function header() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("header-body").style.position ="fixed";
  }else {
    document.getElementById("header-body").style.position ="relative";
  }
};
$(document).ready(function(){
    $("#btngototop").click(function(){
      $("body,html").animate({scrollTop:0 },"slow");
    });

});