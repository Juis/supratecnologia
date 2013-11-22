/*!
 * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
 * Scroll smooth to any element in your DOM.
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/17
 **/
$.scrollTo = $.fn.scrollTo = function(x, y, options){
    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

    options = $.extend({}, {
        gap: {
            x: 0,
            y: 0
        },
        animation: {
            easing: 'swing',
            duration: 600,
            complete: $.noop,
            step: $.noop
        }
    }, options);

    return this.each(function(){
        var elem = $(this);
        elem.stop().animate({
            scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
            scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
        }, options.animation);
    });
};
(function () {

    "use strict";
    
	// Sticky Topo
	if (!!$('.sticky').offset()) { // make sure ".sticky" element exists

	var stickyTop = $('.sticky').offset().top; // returns number 

	$(window).scroll(function(){ // scroll event

	  var windowTop = $(window).scrollTop(); // returns number 

	  if (stickyTop < windowTop){
	    $('.sticky').css({ position: 'fixed', top: 0 });
	  }
	  else {
	    $('.sticky').css('position','static');
	  }

	});

	}

    // Sticky Topo
    if (!!$('.sticky-up').offset()) { // make sure ".sticky" element exists

    var stickyTop = $('.sticky').offset().top; // returns number 

    $(window).scroll(function(){ // scroll event

      var windowTop = $(window).scrollTop(); // returns number 

      if (stickyTop < windowTop){
        $('.sticky-up').css({ position: 'fixed', bottom: 200 });
      }
      else {
        $('.sticky-up').css('position','absolute');
      }

    });

    }


	// Menu Dropdown
	var $dropdowns = $('li.dropdown'); 

    $dropdowns
    .on('mouseover', function() 
    {
        var $this = $(this);

        if ($this.prop('hoverTimeout'))
        {
            $this.prop('hoverTimeout', clearTimeout($this.prop('hoverTimeout')));
        }

        $this.prop('hoverIntent', setTimeout(function()
        {
            $this.addClass('hover');
        }, 250));
    })
    .on('mouseleave', function()
    {
        var $this = $(this);

        if ($this.prop('hoverIntent'))
        {
            $this.prop('hoverIntent', clearTimeout($this.prop('hoverIntent')));
        }

        $this.prop('hoverTimeout', setTimeout(function()
        {
            $this.removeClass('hover');
        }, 250));
    });

    if ('ontouchstart' in document.documentElement)
    {
        $dropdowns.each(function()
        {
            var $this = $(this);

            this.addEventListener('touchstart', function(e)
            {
                if (e.touches.length === 1)
                {
                    
                    e.stopPropagation();

                    
                    if (!$this.hasClass('hover'))
                    {
                        
                        if (e.target === this || e.target.parentNode === this)
                        {
                            e.preventDefault();
                        }

                        
                        $dropdowns.removeClass('hover');
                        $this.addClass('hover');

                        
                        document.addEventListener('touchstart', closeDropdown = function(e)
                        {
                            e.stopPropagation();

                            $this.removeClass('hover');
                            document.removeEventListener('touchstart', closeDropdown);
                        });
                    }
                }
            }, false);
        });
    }

    function show(){
         document.location.href ="http://www.java2s.com";
    }

    // Sobe e Desçe
	$('#down_button a, #up_button a, #btn-go-novidades').click(function(e){
	    $('html,body').scrollTo(this.hash, this.hash);
	    e.preventDefault();
	});
    
    /* Paginação Infinita
    jQuery.ias({
        container : '.posts',
        item: '.post-model',
        pagination: '.bloco .navigation',
        next: '.next-post a',
        loader: '<img src="https://raw.github.com/webcreate/infinite-ajax-scroll/master/dist/images/loader.gif"/>',
        triggerPageThreshold: 2
    });
    */

})();

// (JS) Selecionar todos os Checkboxes
function do_this(){

    var checkboxes = document.getElementsByName('approve[]');
    var button = document.getElementById('toggle');

    if(button.value == 'select'){
        for (var i in checkboxes){
            checkboxes[i].checked = 'FALSE';
        }
        button.value = 'deselect'
    }else{
        for (var i in checkboxes){
            checkboxes[i].checked = '';
        }
        button.value = 'select';
    }
}





