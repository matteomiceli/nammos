const menuBtn = $(".menu-btn");
const closeBtn = $(".close-btn");
const menuOverlay = $(".menu-container");

$(window).on('resize', function () {
  console.log('resizing')
  menuOverlay.css('display', 'none')
  setTimeout(() => {
  menuOverlay.css('display', 'flex')
  }, 500);

});

menuBtn.click(() => {
  menuOverlay.css("opacity", "100");
  menuOverlay.css("display", "flex");
  menuOverlay.css("pointer-events", "all");
  menuOverlay.css("transform", "translateY(0px)");
});

closeBtn.click(() => {
  menuOverlay.css("opacity", "0");
  menuOverlay.css("display", "hidden");
  menuOverlay.css("pointer-events", "none");
  menuOverlay.css("transform", "translateY(-50px)");
});
