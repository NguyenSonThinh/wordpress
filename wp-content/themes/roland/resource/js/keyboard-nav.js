! function(e) {
    "use strict";
    jQuery(document).ready(function(e) {
        e("#primary-menu,#second-menu");
        e("#primary-menu,#second-menu").KeyboardAccessibleDropDown()
    }), e.fn.KeyboardAccessibleDropDown = function() {
        var n = e(this);
        e("a", n).focus(function() {
            e(this).parents("li").addClass("active-focus")
        }).blur(function() {
            e(this).parents("li").removeClass("active-focus")
        })
    }
}(jQuery);