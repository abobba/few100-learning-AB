import './styles.css';
import { getRandomInt } from './utils';

let guessCount = 0;
const squares = document.querySelectorAll('.square');
const count = document.getElementById('count') as HTMLSpanElement;
const secret = getRandomInt(1, 6);

squares.forEach((sq, idx) => {
    const el = sq as HTMLDivElement;
    if ((idx + 1) === secret) {
        el.dataset.secret = 'true';
    }
    sq.addEventListener('click', handleClick)
});

function handleClick() {
    const el = this as HTMLDivElement;
    guessCount++;

    if (el.dataset.secret) {
        el.classList.add('winner');
        count.innerHTML = `: <small>You have made <b>${guessCount}</b> guess(es)</small>`;
        squares.forEach(sq => sq.removeEventListener('click', handleClick));
    } else {
        el.classList.add('loser');
        el.removeEventListener('click', handleClick);
    }
}