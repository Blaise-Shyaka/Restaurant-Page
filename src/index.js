import homepage from './homepage';
import menu from './menu';

function render() {
  const contentDisplay = document.querySelector('#content');
  // const { nav, restaurantDetails } = homepage();
  // contentDisplay.appendChild(nav);
  // contentDisplay.appendChild(restaurantDetails);
  const wrapperDiv = menu();
  contentDisplay.appendChild(wrapperDiv);
}

render();
