const selectors = $('.menu-selector');

// menu buttons
const brunch = $('#brunch');
const dinner = $('#dinner');
const drinks = $('#drinks');
const dessert = $('#dessert');

// iframe
const menuIframe = $('iframe');
const url = "https://menus.singleplatform.com/widget"

// list of 
const listOfMenuUrls = {
  'brunch': 'http://places.singleplatform.com/nammos-estiatorio-0/menu_widget?api_key=ke09z8icq4xu8uiiccighy1bw&base_font_size=16px&display_menu=3070970&hide_cover_photo=true&hide_disclaimer=true&menu_desc_background_color=%23ffffff&primary_background_color=%23ffffff&section_desc_background_color=%23ffffff&section_title_background_color=%23ffffff&widget_background_color=rgba%280%2C%200%2C%200%2C%200%29',
  'dinner': 'http://places.singleplatform.com/nammos-estiatorio-0/menu_widget?api_key=ke09z8icq4xu8uiiccighy1bw&base_font_size=16px&display_menu=2090069&hide_cover_photo=true&hide_disclaimer=true&menu_desc_background_color=%23ffffff&primary_background_color=%23ffffff&section_desc_background_color=%23ffffff&section_title_background_color=%23ffffff&widget_background_color=rgba%280%2C%200%2C%200%2C%200%29',
  'drinks': 'http://places.singleplatform.com/nammos-estiatorio-0/menu_widget?api_key=ke09z8icq4xu8uiiccighy1bw&base_font_size=16px&display_menu=2946394&hide_cover_photo=true&hide_disclaimer=true&menu_desc_background_color=%23ffffff&primary_background_color=%23ffffff&section_desc_background_color=%23ffffff&section_title_background_color=%23ffffff&widget_background_color=rgba%280%2C%200%2C%200%2C%200%29',
  'dessert': ''
}

// set dinner as active
dinner.addClass('menu-selector-active')


// switches to active menu
function switchMenu (eventTarget, url) {
  //set clicked selector to active
  const selector = $(`#${eventTarget.id}`) // convert event to selector
  selector.addClass('menu-selector-active');
  console.log(selector)

  // // change menu iframe menu id
  menuIframe.attr('src', url)

  // // // reload iframe
  // menuIframe.attr( 'src', function ( i, val ) { return val; });
}


selectors.on('click', (e) => {
  e.preventDefault();
  const eventTarget = e.currentTarget;

console.log(selectors)
  menuIframe.attr('src', url)

  // strip all selectors of active class
  selectors.removeClass('menu-selector-active');
  
  // call switch function
  switchMenu(eventTarget, listOfMenuUrls[eventTarget.id])
})