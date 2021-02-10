import homepage from './homepage';
import menu from './menu';
import reservations from './reservations';

function cleanElement(identifier) {
  const elt = document.querySelector(identifier);
  elt.innerHTML = '';
}

function render() {
  const contentDisplay = document.querySelector('#content');
  const navElements = [document.querySelector('#home'), document.querySelector('#menu'), document.querySelector('#reservations')];

  contentDisplay.appendChild(homepage());

  navElements.forEach(el => {
    el.addEventListener('click', (event) => {
      if (event.currentTarget.id === 'home') {
        cleanElement('#content');
        const restaurantDetails = homepage();
        contentDisplay.appendChild(restaurantDetails);
        return;
      }

      if (event.currentTarget.id === 'menu') {
        cleanElement('#content');
        const header = document.createElement('h1');
        header.innerHTML = 'Menu';
        const wrapperDiv = menu();
        contentDisplay.appendChild(header);
        contentDisplay.appendChild(wrapperDiv);
        return;
      }

      if (event.currentTarget.id === 'reservations') {
        cleanElement('#content');
        const reservationsContent = reservations();
        contentDisplay.appendChild(reservationsContent);
      }
    });
  });
}

render();
