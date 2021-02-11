import './homepage.css';

export default function homepage() {
  const restaurantDetails = document.createElement('div');
  const restaurantAddress = document.createElement('p');
  const restaurantSlogan = document.createElement('p');
  const eat = document.createElement('span');
  const drink = document.createElement('span');
  const chat = document.createElement('span');

  restaurantDetails.appendChild(restaurantAddress);
  restaurantDetails.appendChild(restaurantSlogan);
  restaurantSlogan.appendChild(eat);
  restaurantSlogan.appendChild(drink);
  restaurantSlogan.appendChild(chat);

  restaurantDetails.setAttribute('id', 'resto-details');
  restaurantAddress.setAttribute('id', 'resto-address');
  restaurantSlogan.setAttribute('id', 'resto-slogan');

  restaurantAddress.innerHTML = 'Kigali, KG 546 St, House No. 56';
  eat.innerHTML = 'Eat -';
  drink.innerHTML = 'Drink -';
  chat.innerHTML = 'Chat';

  return restaurantDetails;
}
