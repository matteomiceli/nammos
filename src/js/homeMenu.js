const toggleExpand = $('#toggle-menu-btn');
const arrow = $('#arrow');
const menuContainer = $('#menusContainer');
const sectionText = $('#s1  h2');

const showMenu = `
See Our Menu
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
  id="arrow"
  viewBox="0 0 129 129"
  version="1.1"
  id="svg4"
  sodipodi:docname="down_arrow.svg"
  inkscape:version="1.1 (c68e22c387, 2021-05-23)"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"
>
  <defs id="defs8" />
  <sodipodi:namedview
    id="namedview6"
    pagecolor="#505050"
    bordercolor="#eeeeee"
    borderopacity="1"
    inkscape:pageshadow="0"
    inkscape:pageopacity="0"
    inkscape:pagecheckerboard="0"
    showgrid="false"
    inkscape:zoom="6.0155039"
    inkscape:cx="64.416881"
    inkscape:cy="64.5"
    inkscape:window-width="1920"
    inkscape:window-height="1011"
    inkscape:window-x="0"
    inkscape:window-y="0"
    inkscape:window-maximized="1"
    inkscape:current-layer="svg4"
  />
  <path
    d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
    id="path2"
  />
</svg>
`

const hideMenu = `
Hide Menu
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
  id="arrow"
  viewBox="0 0 129 129"
  version="1.1"
  transform = "rotate (180)"
  id="svg4"
  sodipodi:docname="down_arrow.svg"
  inkscape:version="1.1 (c68e22c387, 2021-05-23)"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"
>
  <defs id="defs8" />
  <sodipodi:namedview
    id="namedview6"
    pagecolor="#505050"
    bordercolor="#eeeeee"
    borderopacity="1"
    inkscape:pageshadow="0"
    inkscape:pageopacity="0"
    inkscape:pagecheckerboard="0"
    showgrid="false"
    inkscape:zoom="6.0155039"
    inkscape:cx="64.416881"
    inkscape:cy="64.5"
    inkscape:window-width="1920"
    inkscape:window-height="1011"
    inkscape:window-x="0"
    inkscape:window-y="0"
    inkscape:window-maximized="1"
    inkscape:current-layer="svg4"
  />
  <path
    d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
    id="path2"
  />
</svg>
`

toggleExpand.on('click', (e) => {
    e.preventDefault();
    if (!menuContainer.hasClass('expanded')) {
        menuContainer.addClass('expanded');
        toggleExpand.html(hideMenu);
        sectionText.css('margin-bottom', '40px');
    } else {
        menuContainer.removeClass('expanded');
        toggleExpand.html(showMenu);
        sectionText.css('margin-bottom', '0px')
    }
})