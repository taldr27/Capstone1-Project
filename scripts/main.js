window.addEventListener('DOMContentLoaded', () => {
  function toggleBar() {
    const sideBar = document.getElementById('hide-menu');
    const body = document.getElementById('body');
    if (sideBar.style.display === 'flex') {
      sideBar.style.display = 'none';

      body.style.overflow = 'scroll';
    } else {
      sideBar.style.display = 'flex';
      body.style.overflow = 'hidden';
    }
  }
  document.getElementById('burger').addEventListener('click', toggleBar);
  document.getElementById('close-nav').addEventListener('click', toggleBar);
});