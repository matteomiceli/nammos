const toggleExpand = $('#toggle-menu-btn');
const arrow = $('#arrow');
const menuContainer = $('#menusContainer');
const sectionText = $('#s1  h2');

toggleExpand.on('click', (e) => {
    e.preventDefault();
    if (!menuContainer.hasClass('expanded')) {
        menuContainer.addClass('expanded');
        arrow.css('transform', 'rotate(180deg)');
        sectionText.css('margin-bottom', '40px');
    } else {
        menuContainer.removeClass('expanded');
        arrow.css('transform', 'rotate(0deg)')
        sectionText.css('margin-bottom', '0px')
    }
})