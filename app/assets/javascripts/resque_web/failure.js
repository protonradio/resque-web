/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
jQuery(function() {
  $(".backtrace").click(function(e) {
    e.preventDefault();
    return $(this).next().toggle();
  });

  return $("ul.failed li").hover(function() {
    return $(this).toggleClass("hover");
  });
});
