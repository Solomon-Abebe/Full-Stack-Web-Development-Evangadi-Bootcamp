   // Why it is not working without refreshing?

   

$(document).ready(function () {
  $(".footer-links-wrapper h3").on("click", function() {
    $(this).next("ul").slideToggle(500);
    $(this).toggleClass("expanded");
  });
  if ($(window).width() > 768) {
    $(".footer-links-wrapper h3").off("click");
    $(".footer-links-wrapper ul").show();
  }
});
$(window).resize(function(){
  window.location.reload();
});

/************************ */
// $(document).ready(function() {
//   $(".footer-links-wrapper h3").on("click", () => {
//     $(this).next("ul").slideToggle(500);
//     $(this).toggleClass("expanded");
//   }).bind(this); // Bind `this` to the function

//   if ($(window).width() > 768) {
//     $(".footer-links-wrapper ul").show();
//   }
// });
/********** */

// $(window).resize(function () {
//   if ($(window).width() > 768) {
//     $(".footer-links-wrapper ul").show();
//     $(".footer-links-wrapper h3").removeClass("expanded");
//   } else {
//     $(".footer-links-wrapper ul").hide();
//   }
// });
// $(".footer-links-wrapper ul li").on("click", function (e) {
//   e.preventDefault();
// });
