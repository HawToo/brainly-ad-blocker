
localStorage.setItem('registration-toplayer/expires', '2147483647000');
localStorage.setItem('offer-modal/timestamp', '2147483647000');
localStorage.setItem('welcome-payment-form/timestamp', '2147483647000');


Object.keys(localStorage).forEach((key) => {
  localStorage.removeItem(key);
});


const pathName = window.location.pathname;
if (pathName.startsWith('/tarefa') || pathName.startsWith('/question')) {
  const banner = document.querySelector('.js-react-bottom-banner');
  if (banner) {
    banner.parentNode.removeChild(banner);
  }
}
