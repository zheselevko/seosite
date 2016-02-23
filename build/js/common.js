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
   $('.diagrams').bxSlider({
  mode: 'horizontal',
  pagerCustom: '#bx-pager',
  captions: false,
  adaptiveHeight: true,
  controls: false
});
var slider = $('.diagrams').bxSlider();
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
        
        var $container  = $('.service_item'),
          $articles = $container.children('.box'),
          timeout;
        
        $articles.on( 'mouseenter', function( event ) {
            
          var $article  = $(this);
          clearTimeout( timeout );
          timeout = setTimeout( function() {
            
            if( $article.hasClass('active') ) return false;
            
            $articles.not( $article.removeClass('blur').addClass('active') )
                 .removeClass('active')
                 .addClass('blur');
            
          }, 85 );
          
        });
        
        $container.on( 'mouseleave', function( event ) {
          
          clearTimeout( timeout );
          $articles.removeClass('active blur');
          
        });
      
      });
$(document).ready(function(){
  $("#prices").lightTabs();

  });
$(function(){
  var rightCta_selfOffset = $("#navigation_vert").offset().top - $('.header').height();
  var rightCta_parent = $("#navigation_vert").parent().parent();
  var rightCta_max = rightCta_parent.offset().top + rightCta_parent.height() - $('#navigation_vert').height();

  $(window).scroll(function(){

    
    var set = $(document).scrollTop();
    
    
    // console.log('selfOffset:'+rightCta_selfOffset);
    // console.log('scrollTop:'+set);
    // console.log('max:'+rightCta_max);
    if (set > rightCta_max) {
      // console.log('set>max: ' + set + '>'+rightCta_max);
      set = rightCta_max;// - $("#right-form").height();
    }
    set -= rightCta_selfOffset - 10;
    if (set<0) set=0;
    set=set+"px";
    // console.log('marginTop:'+set);
    $("#navigation_vert").animate({marginTop:set}, {duration:1000,queue:false})
  })
});
$(function(){
  var rightCta_selfOffset = $("#request").offset().top - $('.header').height();
  var rightCta_parent = $("#request").parent().parent();
  var rightCta_max = rightCta_parent.offset().top + rightCta_parent.height() - $('#request').height();

  $(window).scroll(function(){

    
    var set = $(document).scrollTop();
    
    
    // console.log('selfOffset:'+rightCta_selfOffset);
    // console.log('scrollTop:'+set);
    // console.log('max:'+rightCta_max);
    if (set > rightCta_max) {
      // console.log('set>max: ' + set + '>'+rightCta_max);
      set = rightCta_max;// - $("#right-form").height();
    }
    set -= rightCta_selfOffset - 10;
    if (set<0) set=0;
    set=set+"px";
    // console.log('marginTop:'+set);
    $("#request").animate({marginTop:set}, {duration:1000,queue:false})
  })
});
$(document).ready(function(){
  $('.companies').bxSlider({
    slideWidth: 200,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 10,
    captions: false,
    adaptiveHeight: true,
    controls: true,
    pager: false
  });
});
    function setEqualHeight(columns) {
        var tallestcolumn = 0; columns.each( function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight; } } );
        columns.height(tallestcolumn); }
    $(document).ready(function() { setEqualHeight($(".stage > div")); });
    $(document).ready(function(){
        $('.cont_result').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            captions: false,
            adaptiveHeight: true,
            controls: true,
            pager: false
        });
    });

