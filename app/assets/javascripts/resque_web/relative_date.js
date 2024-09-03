/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
jQuery(function() {
  const relatizer = function() {
    const dt = $(this).text();
    $(this).relativeDate();
    const relatized = $(this).text();
    if (($(this).parents("a").length > 0) || $(this).is("a")) {
      $(this).relativeDate();
      if (!$(this).attr("title")) { return $(this).attr("title", dt); }
    } else {
      return $(this).html(`\
<a href='#'' class='toggle_format' title='${dt}'>
  <span class='date_time'>${dt}</span>
  <span class='relatized_time'>${relatized}</span>
</a>\
`
      );
    }
  };

  const format_toggler = function(e) {
    e.preventDefault();
    $(".time a.toggle_format span").toggle();
    return $(this).attr("title", $("span:hidden", this).text());
  };

  // changed html when doom is ready
  $(".time").each(relatizer);
  $(".time a.toggle_format .date_time").hide();

  // add event on click in relative time to show date_time
  return $(".time").on("click", "a.toggle_format", format_toggler);
});
