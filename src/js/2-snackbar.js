import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      iziToast.success({
        icon: '',
        backgroundColor: ' #59a10d',
        messageSize: '32px',
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: 'rgba(255, 255, 255, 1)',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        icon: '',
        backgroundColor: '#f38888ff',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        messageColor: 'rgba(255, 255, 255, 1)',
        messageSize: '16px',
      });
    });
});
