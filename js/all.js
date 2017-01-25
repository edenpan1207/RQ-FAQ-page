$(document).ready(function(){

   // hide all the p section except first one
	var contentHide = $('.container > ul > li > p');
	contentHide.hide();
	contentHide.first().show();
	contentHide.first().parent().find('img').toggleClass('rotate');


   // click h3 to show p section
	var contentToggle = $('.container > ul > li > h3');
   contentToggle.click(function(){
   	$(this).parent().find('p').slideToggle();
   	$(this).parents().siblings().find('p').slideUp();

   	// click and arrow transform  
   	$(this).find('img').toggleClass('rotate');
   	$(this).parents().siblings().find('img').removeClass('rotate');
   })


   // section-move  is scroll move to target 
    $('.section-move').click(function(event) {
        event.preventDefault();
        var connect = $(this).attr('href');
        var position = $(connect).offset().top;
        $('body').animate({
            scrollTop: position}, 700);
    });

    // scroll top button show and hide
    $('.scroll-top').hide(300);
    $(window).scroll(function() {
        if ($(document).scrollTop() > '300') {
            $('.scroll-top').show(300);
        } else {
            $('.scroll-top').hide(300);
        }
    });

    // scroll to top click
    $('.scroll-top img').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 700);
    });
})