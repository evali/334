/* ==========================================================================
Scroll spy: https://jsfiddle.net/mekwall/up4nu/
========================================================================== */

// Cache selectors
var lastId,
    progress = $(".progress-nav"),
    progressHeight = 0, //progress.outerHeight()+15,

// All list items
menuItems = progress.find("a"),

// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-progressHeight+1;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+progressHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
    .parent().removeClass("active")
    .end().filter("[href=#"+id+"]").parent().addClass("active");
    }
});


//http://stackoverflow.com/questions/27308425/how-to-make-navigation-bar-change-color-when-you-scroll-down-the-page-solved
// $(document).ready(function(){
//    var scroll_start = 0;
//    var startchange = $('.header-container');
//    var offset = startchange.offset();
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $('.nav').css('background-color', 'rgba(34,34,34,0.9)');
//        } else {
//           $('.nav').css('background-color', 'transparent');
//        }
//    });
// });

;(function($) {
  'use strict';

  var $body = $('html, body'),
      content = $('#main-section').smoothState({
        prefetch: true,
        pageCacheSize: 4,
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);