$.fn.scrollBottom = function(scroll){
  if(typeof scroll === 'number'){
    window.scrollTo(0,$(document).height() - $(window).height() - scroll);
    return $(document).height() - $(window).height() - scroll;
  } else {
    return $(document).height() - $(window).height() - $(window).scrollTop();
  }
}
$(window).scroll(function(){
if($(window).scrollBottom()<250){
$('#scroll-h').css({opacity: 0}
    );
} else {
            $('#scroll-h').css({opacity: 1}
    );

        }

})