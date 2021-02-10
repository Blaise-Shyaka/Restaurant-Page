import homepage from './homepage';

function render() {
  const contentDisplay = document.querySelector('#content');
  const { nav, restaurantDetails } = homepage();
  contentDisplay.appendChild(nav);
  contentDisplay.appendChild(restaurantDetails);
}

render();
