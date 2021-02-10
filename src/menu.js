export default function menu() {
  const wrapperDiv = document.createElement('div');
  const menu = [
    {
      name: 'Sticky Stem Ginger Pudding',
      price: '$33.00',
    },
    {
      name: 'Aunty Gloria’s Knickerbocker',
      price: '$13.00',
    },
    {
      name: 'Chocolate Mélange for Two',
      price: '$24.00',
    },
    {
      name: 'Earl Grey Panna Cotta',
      price: '$15.00',
    },
  ];

  menu.forEach(el => {
    const menuDiv = document.createElement('div');
    const menuName = document.createElement('p');
    const menuPrice = document.createElement('p');

    menuName.innerHTML = el.name;
    menuPrice.innerHTML = el.price;

    menuDiv.appendChild(menuName);
    menuDiv.appendChild(menuPrice);

    wrapperDiv.appendChild(menuDiv);
  });

  return wrapperDiv;
}
