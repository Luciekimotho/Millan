(function () {

    var documentEl = $(document) //new variable
    parallaxBg = $('div.home_div, div.contact_div');

    documentEl.on('scroll', function () {
        var currScrollPos = documentEl.scrollTop(); //gets how much scrolled from top in pixels
        paralaxBg.css('background-position', '0' + -currScrollPos / 4 + 'px'); //the minus makes the background move one step up when we scroll.the zero means we dont change the margin.
    });

})();
