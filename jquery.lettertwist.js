/**
*
*	Lettertwist - jQuery plugin to rotate letters in a text.
*	by Bärnt & Ärnst 
*
*   Simply -  $(element).lettertwist(20) 
*   to rotate each letter of that element with 20 degrees.
*   
*   Defualt degrees: 15
*
**/	
(function($) {
  $.fn.lettertwist = function(degrees) {
    if(typeof degrees === 'undefined') { degrees = 15; }
    return this.each(function() {
    	var title = ($(this).text()).split('');
    	var all = '';
    	for(var i in title) {
    		all += "<div style='display: inline-block; padding-right: 5px; -webkit-transform: rotate("+degrees+"deg); -moz-transform: rotate("+degrees+"deg); -o-transform: rotate("+degrees+"deg);'>"+title[i]+"</div>";
    	}
    	$(this).html(all);
    });
  };
})(jQuery);