import 'normalize.css'
import './styles/base.scss';
import './styles/main.scss';

const btnFavorite = document.querySelector('.header__btn--favorite');

btnFavorite.addEventListener('click', () => {
    btnFavorite.classList.toggle('active')
})