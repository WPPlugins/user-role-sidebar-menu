/*jQuery Role Base Menu plugin jQuery functions 
 *Date 2013-02-17
 */
//rj = role base jQuery variable
var $rj = jQuery.noConflict();
(function($rj) {
	$rj('.widget_user_role_base_widget_id ul li').addClass('expanded_parent');
	$rj('.widget_user_role_base_widget_id ul li ul li').addClass('leaf');
	$rj('.widget_user_role_base_widget_id ul li ul li').removeClass('expanded_parent');
	$rj('.widget_user_role_base_widget_id ul ul').hide();
	$rj('.widget_user_role_base_widget_id ul li.expanded_parent > a').mouseover(function(event){
		$rj(this).parent().find('ul').slideDown(400);
	});
	$rj('.widget_user_role_base_widget_id ul li.expanded_parent').mouseleave(function(event){
		$rj(this).parent().find('ul').slideUp(450);
	});
})(jQuery);
