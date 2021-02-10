export default function reservations() {
  const header = document.createElement('h1');
  const name = document.createElement('input');
  const email = document.createElement('input');
  const nberOfPeople = document.createElement('input');
  const date = document.createElement('input');
  const submit = document.createElement('input');
  const form = document.createElement('form');
  const formWrapper = document.createElement('div');

  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'Full Names');
  email.setAttribute('type', 'text');
  email.setAttribute('placeholder', 'Email');
  nberOfPeople.setAttribute('type', 'number');
  nberOfPeople.setAttribute('placeholder', 'Number Of People');
  date.setAttribute('type', 'date');
  date.setAttribute('placeholder', 'Date');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Reserve Table');

  form.appendChild(name);
  form.appendChild(email);
  form.appendChild(nberOfPeople);
  form.appendChild(date);
  form.appendChild(submit);
  formWrapper.appendChild(header);
  formWrapper.appendChild(form);
  header.innerHTML = 'Reserve Table';

  return formWrapper;
}
