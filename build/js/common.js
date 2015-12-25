    $(document).ready(function(){
      $('.slider').slider({
      	'interval': 10000,
      	'transition': 800
      });

	$('.slider-next').click(function() {
   $('.slider').slider('next');
});
$('.slider-prev').click(function() {
   $('.slider').slider('prev');
});
	$('#slide-out li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

$('.review').bxSlider({
  mode: 'horizontal',
  pagerCustom: '#bx-pager',
  captions: false,
  adaptiveHeight: true,
  controls: false
});
var slider = $('.review').bxSlider();
$('a.pager-prev').click(function () {
    var current = slider.getCurrentSlide();
    slider.goToPrevSlide(current) - 1;
});
$('a.pager-next').click(function () {
    var current = slider.getCurrentSlide();
    slider.goToNextSlide(current) + 1;
});

$('.start').bxSlider({
  mode: 'horizontal',
  infiniteLoop: false,
  controls: true
});
$('.start_master').bxSlider({
  mode: 'horizontal',
  infiniteLoop: false,
  controls: true
});
$('.start_pro').bxSlider({
  mode: 'horizontal',
  infiniteLoop: false,
  controls: true
});

    });

$(document).ready(function(){
  $('.positions').bxSlider({
  mode: 'horizontal',
  pagerCustom: '#bx-pager',
  captions: false,
  adaptiveHeight: true,
  controls: false
});
var slider = $('.positions').bxSlider();
$('a.prev').click(function () {
    var current = slider.getCurrentSlide();
    slider.goToPrevSlide(current) - 1;
});
$('a.next').click(function () {
    var current = slider.getCurrentSlide();
    slider.goToNextSlide(current) + 1;
});
    
   
});

$(document).ready(function(){
  $("#prices").lightTabs();

  });