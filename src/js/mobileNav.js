const menuBtn = $('.menu-btn');
const closeBtn = $('.close-btn');
const menuOverlay = $('.menu-container');

menuBtn.click(() => {
    menuOverlay.css('opacity', '100');
    menuOverlay.css('pointer-events', 'all');
    menuOverlay.css('transform', 'translateY(0px)');
});

closeBtn.click(() => {
    menuOverlay.css('opacity', '0');
    menuOverlay.css('pointer-events', 'none');
    menuOverlay.css('transform', 'translateY(200px)');
});