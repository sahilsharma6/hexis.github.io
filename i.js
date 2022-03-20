const m = document.querySelector('.menubtn');
const n = document.querySelector('.header');

const togglenavlist = () => {

n.classList.toggle("active");
}
m.addEventListener('click', () =>togglenavlist());