const menuBtn = $('.menu-btn');
const closeBtn = $('.close-btn');
const menuOverlay = $('.menu-container');

menuBtn.click(() => {
    menuOverlay.css('display', 'flex');
});

closeBtn.click(() => {
    menuOverlay.css('display', 'none');
});