    $(document).ready(function(){
      $('.slider').slider();

	$('.slider-next').click(function() {
   $('.slider').slider('next');
});
$('.slider-prev').click(function() {
   $('.slider').slider('prev');
});
    });
