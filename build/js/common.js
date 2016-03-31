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
	if ( $("#navigation_vert").length ) {
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
  });
  }
});
$(function(){
	if ( $("#request").length ){
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
  });
  }
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
	$(document).ready(function(){
		$('body').on('click','.input-file .input-file-button',function(e){
			$(this).parents('.input-file:eq(0)').find('input[type="file"]').trigger('click');
			e.preventDefault();
		});
		
		$('body').on('click','.input-file .input-field input',function(e){
			$(this).parents('.input-file:eq(0)').find('input[type="file"]').trigger('click');
			e.preventDefault();
		});

		$('body').on('change','.input-file input[type="file"]',function(){
			var file = $(this).val();   
			var reWin = /.*\\(.*)/;
			var fileTitle = file.replace(reWin, "$1"); //выдираем название файла для windows
			var reUnix = /.*\/(.*)/;
			fileTitle = fileTitle.replace(reUnix, "$1"); //выдираем название файла для unix-систем   
			$(this).parents('.input-file:eq(0)').find('input[type=text]').val(fileTitle); 
		});
		
		/* tabs */
		if ( $('.js-tabs-wrap').length ) {
			$('.js-tab-controls-list a').on('click',function(e){
				var cur = $(this);
				var cur_li = cur.parents('li:eq(0)');
				if ( !cur_li.hasClass('current') ){
					cur_li.addClass('current').siblings().removeClass('current');
					var cur_li_index = cur_li.index();
					var parent = cur.parents('.js-tabs-wrap:eq(0)');
					var content = parent.find('.js-tabs:eq(0)');
					var cur_tab = content.children('.js-tab:eq('+cur_li_index+')');
					cur_tab.fadeIn().siblings().fadeOut(0);
					
					// reload maps
					if ( cur_tab.find('.yandex-map').length )
						yandexMap.container.fitToViewport(true);
					if ( cur_tab.find('#google-map').length ){
						google.maps.event.trigger(googleMap,'resize');
						googleMap.setCenter(googleMap_center);	
					}
				}
				e.preventDefault();
			});
		}
		/* tabs end */
		
		/* yandexMap */
		if ( $('.yandex-map').length ) {
			$('.yandex-map').each(function(index){
				var obj = $(this);
				var objIndex = index + 1;
				var className = obj.attr('class');
				obj.attr('id', 'map-'+objIndex);
				var id = obj.attr('id');
				var left = obj.data('left');
				var right = obj.data('right');
				var left_placemark = obj.data('placemark-left');
				var right_placemark = obj.data('placemark-right');
				var title_placemark = obj.data('title');
				var zoom = obj.data('zoom');
				ymaps.ready(function () {
					// Create map
					yandexMap = new ymaps.Map(id, {
						center: [left, right],
						zoom: zoom
					});
					myPlacemark = new ymaps.Placemark([left_placemark, right_placemark], {
						hintContent: title_placemark,
						help_hint: title_placemark,
						balloonContent: '<div>'+title_placemark+'</div>'
					});
					// Add buttons and placemarks
					yandexMap.controls.add('zoomControl', {top: '10px', left:'10px', height: '50px'});
					yandexMap.geoObjects.add(myPlacemark);
				});
				
			});
		}
		/* yandexMap end */
		
		var googleMap;
		/* googleMap */
		if ($('#google-map').length) {
			function initialize() {
				var mapOptions = {
				  zoom: 16,
				  center: new google.maps.LatLng(55.837560776866766, 37.44540149999996),
				  mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			googleMap = new google.maps.Map(document.getElementById('google-map'),mapOptions);
			googleMap_center = googleMap.getCenter();
			}
		google.maps.event.addDomListener(window, 'load', initialize);
		}
		/* googleMap end */
		
		// single-accord-toggle
		if ( $('.single-accord-toggle').length ) {
			$('.single-accord-toggle').on('click',function(e){
				var cur = $(this);
				var parent = cur.parents('.single-accord-wrap');
				var block = parent.find('.single-accord-content');
				if ( cur.hasClass('active') )
					cur.html('Перечень работ ↓');
				else
					cur.html('Свернуть ↑');
				block.slideToggle();
				cur.toggleClass('active');
				e.preventDefault();
			});
		}
		
		
		// fancybox
		if ( $('.js-popup-link').length ) {
			$('.js-popup-link').fancybox({
				wrapCSS		: 'fancybox-popup', 
				padding: ['0','0','0','0']
			});
			
			$('body').on('click','.js-popup-close',function(e){
				$.fancybox.close();
				e.preventDefault();
			});
		}
		
		// phone-mask
		$('.phone-mask').mask('+7 (999) 999-99-99');
		
		/* dropdowns */
		if ( $('.js-header-blog-drop-link').length ) {
			$('.js-header-blog-drop-link').on('click',function(e) {
				var cur = $(this);
				$(document).unbind('click.jsHeaderBlogDrop');
				$('.js-header-blog-drop').fadeOut();
				$('.js-header-blog-drop-link').not(cur).removeClass('active');
				if ( !cur.hasClass('active') ) {
					var yourClick = true;
					var drop = cur.next('.js-header-blog-drop');
					drop.fadeIn();
					cur.addClass('active');
					
					$(document).bind('click.jsHeaderBlogDrop', function (e) {
						if (!yourClick  && !$(e.target).closest(drop).length ) {
							drop.fadeOut();
							$('.js-header-blog-drop-link').removeClass('active');
							$(document).unbind('click.jsHeaderBlogDrop');
						}
						yourClick  = false;
					});
				} else {
					cur.removeClass('active');
					$('.js-header-blog-drop').fadeOut();
				}
				e.preventDefault();
			});
		}
		/* dropdowns end */
		
		// construction-about-slider
		if ( $('.construction-about-slider').length ) {
			var construction_slider = $('.construction-about-slider').bxSlider({
				adaptiveHeight: true,
				prevText:'',
				nextText:'',
				prevSelector:$('.construction-about-slider-controls-left'),
				nextSelector:$('.construction-about-slider-controls-right'),
				infiniteLoop:false,
				pager: false,
				useCSS:false,
				onSlideBefore:function($slideElement, oldIndex, newIndex){
					var cur_li = $('.construction-about-pager-list li:eq('+newIndex+')');
					cur_li.nextAll().removeClass('active');
					cur_li.addClass('active').prevAll().addClass('active');
				}
			});
			
			$('.construction-about-pager-list a').on('click',function(e){
				if ( !$('.construction-about-slider').is(':animated') ){
					var cur = $(this);
					var cur_li = cur.parents('li:eq(0)');
					var index = cur_li.index();
					cur_li.nextAll().removeClass('active');
					cur_li.addClass('active').prevAll().addClass('active');
					construction_slider.goToSlide(index);
				}
				e.preventDefault();
			});
		}
		
		// js-online-order-toggle
		if ( $('.js-online-order-toggle').length ){
			var online_order = $('.online-order');
			$('.js-online-order-toggle').on('click',function(e){
				var cur = $(this);
				if ( cur.hasClass('active') ){
					online_order.animate({height:0},500,function(){
						$('.header__nav').insertAfter($('.header__info'));
					});
				} else {
					$('.header__nav').appendTo($('.site-top-fixed .header'));
					online_order.css('height','auto');
					var online_order_h = online_order.innerHeight();
					online_order.removeAttr('style');
					online_order.animate({height:online_order_h},500,function(){
						online_order.css('height','auto');
					});
				}
				cur.toggleClass('active');
				e.preventDefault();
			});
		}
		
		
		
		
		
		
		
		
	});

