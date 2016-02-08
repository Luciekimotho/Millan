
(function () {

    var documentEl = $(document) //new variable
    parallaxBg = $('div.home_div, div.contact_div');

    documentEl.on('scroll', function () {
        var currScrollPos = documentEl.scrollTop(); //gets how much scrolled from top in pixels
        paralaxBg.css('background-position', '0' + -currScrollPos / 4 + 'px'); //the minus makes the background move one step up when we scroll.the zero means we dont change the margin.
    });

    $( document ).ready(function() {
            $('.dropdown-button').dropdown();
            console.log("dropdown");
        });

})(jQuery);


/*(function($) {
		$(function() {

$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );

		}); // End Document Ready
})(jQuery); // End of jQuery name space*/


