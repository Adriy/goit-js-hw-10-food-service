import menuElArray from '../db/menuElArray.json';
import template from '../templates/menuByArray.hbs';
import refs from './refs';
import Theme from '../js/theme';

const { menuEl, checkboxBtn } = refs;

const { DARK, LIGHT } = Theme;

let result = template(menuElArray);
console.log(checkboxBtn.checked);
menuEl.insertAdjacentHTML('beforeend', result);

checkboxBtn.addEventListener('change', e => {
  //console.log(e.target.checked);
  if (e.target.checked) {
    document.querySelector('body').classList.add(DARK);
    document.querySelector('body').classList.remove(LIGHT);

    localStorage.removeItem('theme', LIGHT);
    localStorage.setItem('theme', DARK);
  } else {
    document.querySelector('body').classList.add(LIGHT);
    document.querySelector('body').classList.remove(DARK);

    localStorage.removeItem('theme', DARK);
    localStorage.setItem('theme', LIGHT);
  }
});

let theme = localStorage.getItem('theme');

if (theme === DARK) {
  document.querySelector('body').classList.add(DARK);
  checkboxBtn.checked = true;
} else {
  document.querySelector('body').classList.add(LIGHT);
  checkboxBtn.checked = false;
}
