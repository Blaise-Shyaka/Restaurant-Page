import homepage from './homepage';
import menu from './menu';
import reservations from './reservations';

function render() {
  const contentDisplay = document.querySelector('#content');
  const restaurantDetails = homepage();
  contentDisplay.appendChild(restaurantDetails);
  // const wrapperDiv = menu();
  // contentDisplay.appendChild(wrapperDiv);
  // const reservationsContent = reservations();
  // contentDisplay.appendChild(reservationsContent);
}

render();
