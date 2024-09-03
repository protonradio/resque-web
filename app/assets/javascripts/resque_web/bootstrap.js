/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
jQuery(function() {
  $("a[rel=popover]").popover();
  $(".tooltip").tooltip();
  return $("a[rel=tooltip]").tooltip();
});