(function ($) {


$(window).on('load resize',function(e) {
	if($(window).width() > 429) {
		$('.front .panel-col-second .pane-content a').each(function() {
			var buttonHeight = $('.front .panel-col-second .pane-content a').height();
			$('.front .panel-col-second .pane-content span:first-of-type').css('min-height', buttonHeight);
		});
	}
});

})(jQuery);

