/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
jQuery(function() {
  const poll_interval = 2;

  const poll_start = function(el) {
    const href = el.attr("href");
    el.parent().text("Starting...");
    $("#main").addClass("polling");
    setInterval((() => $.ajax({
      dataType: "text",
      type: "get",
      url: href,
      success(data) {
        $("#main").html(data);
        return $("#main .time").relativeDate();
      }})), poll_interval * 1000);
    return location.hash = "#poll";
  };

  // auto start if hash is poll
  if (location.hash === "#poll") { poll_start($("a[rel=poll]")); }

  // start when click on link
  return $("a[rel=poll]").click(function(e) {
    e.preventDefault();
    return poll_start($(this));
  });
});
