export default function homepage() {
  // const contentDisplay = document.querySelector('#content');
  const nav = document.createElement('nav');
  const restaurantDetails = document.createElement('div');
  const logoDiv = document.createElement('div');
  const linksList = document.createElement('ul');
  const homeLi = document.createElement('li');
  const menuLi = document.createElement('li');
  const reservationsLi = document.createElement('li');
  const restaurantAddress = document.createElement('p');
  const restaurantSlogan = document.createElement('p');
  const eat = document.createElement('span');
  const drink = document.createElement('span');
  const chat = document.createElement('span');
  const homepageBg = document.createElement('p');

  // contentDisplay.innerHTML += nav.outerHTML + restaurantDetails.outerHTML;
  nav.appendChild(logoDiv);
  nav.appendChild(linksList);
  logoDiv.appendChild(homepageBg);
  linksList.appendChild(homeLi);
  linksList.appendChild(menuLi);
  linksList.appendChild(reservationsLi);
  restaurantDetails.appendChild(restaurantAddress);
  restaurantDetails.appendChild(restaurantSlogan);
  restaurantSlogan.appendChild(eat);
  restaurantSlogan.appendChild(drink);
  restaurantSlogan.appendChild(chat);

  homeLi.innerHTML = 'Home';
  menuLi.innerHTML = 'Menu';
  reservationsLi.innerHTML = 'Reservations';
  restaurantAddress.innerHTML = 'Kigali, KG 546 St, House No. 56';
  eat.innerHTML = 'Eat';
  drink.innerHTML = 'Drink';
  chat.innerHTML = 'Chat';
  homepageBg.innerHTML = 'A&U Restaurant';

  return { nav, restaurantDetails };
}