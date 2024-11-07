import $ from "jquery";

$(document).ready(function () {
  $(".footer-links-wrapper h3").on("click", function () {
    $(this).next("ul").slideToggle(500);
    $(this).toggleClass("expanded");
  });
  if ($(window).width() > 768) {
    $(".footer-links-wrapper h3").off("click");
    $(".footer-links-wrapper ul").show();
  }
});
$(window).resize(function () {
  window.location.reload();
});
