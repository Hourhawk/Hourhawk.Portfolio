var workCategoryList = ['all','frontend','backend','resources'];
var currentWork = 'all';
workCategoryList.forEach(function(work) {
	$('#work-list-' + work).click(function() {
		$('#work-list-' + work).addClass('work-list-active');
		$('#work-list-' + currentWork).removeClass('work-list-active');
		currentWork = work;
	});
});

var workList = ['codesessions','hourhawk','lossrp'];
workList.forEach(function(work) {
	$('#work-block-' + work).mouseenter(function() {
		$('#work-block-' + work).css('box-shadow', 'inset 0 0 60px rgba(0,0,0,0.7)').css('filter','grayscale(100%)');
		$('#work-block-' + work + '-info').css('display', 'block');
	});
	$('#work-block-' + work).mouseleave(function() {
		$('#work-block-' + work).css('box-shadow', '').css('filter','');
		$('#work-block-' + work + '-info').css('display', '');
	});
});

var sections = ['navbar','work','about', 'contact']
var currentSection = 0;
var canScroll = true;
$(window).bind('mousewheel', function(event) {
    if(!canScroll) {
        return;
    }
    canScroll = false;
    if (event.originalEvent.wheelDelta < 0) {
        if(currentSection < sections.length-1) {
         currentSection = currentSection + 1;
        }
    }
    else {
        if(currentSection > 0) {
         currentSection = currentSection - 1;
        }
    }
   console.log("Scrolling to: " + sections[currentSection] + " " + currentSection)
    $('html').animate({
      scrollTop: $('.' + sections[currentSection]).offset().top
    }, 1000);
   setTimeout(function() {
    canScroll = true;
   }, 1500);
});
$('html').on('scroll touchmove mousewheel', function(e){
  if(!canScroll) {
      e.preventDefault();
      e.stopPropagation();
      return false;
  }
})