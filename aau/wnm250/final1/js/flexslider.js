$(document).ready(function(){

	 $('.flexslider').flexslider(
         {
			slideshow: false,
            animation: "slide",
			prevText: "<",
			nextText: ">",
            slideshowSpeed: 3000,
            pauseOnHover: true,
            start: function(slider){
              $('body').removeClass('loading');
            }
      }
    );

});
