const menuBtn = $(".menu-btn");
const closeBtn = $(".close-btn");
const menuOverlay = $(".menu-container");

$("window").resize(function () {
  $("body").add(".resize-animation-handler");
  setTimeout(function () {
    $("body").remove(".stop-transitions");
  }, 400);
});

menuBtn.click(() => {
  menuOverlay.css("opacity", "100");
  menuOverlay.css("pointer-events", "all");
  menuOverlay.css("transform", "translateY(0px)");
});

closeBtn.click(() => {
  menuOverlay.css("opacity", "0");
  menuOverlay.css("pointer-events", "none");
  menuOverlay.css("transform", "translateY(-50px)");
});
