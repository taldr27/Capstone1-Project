window.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger-about');
  function toggleBar() {
    const sideBar = document.getElementById('hide-menu');
    const body = document.getElementById('body');
    if (sideBar.style.display === 'block') {
      sideBar.style.display = 'none';
      burger.style.color = 'var(--primary-dark)';
      body.style.overflow = 'scroll';
    } else {
      sideBar.style.display = 'block';
      body.style.overflow = 'hidden';
      burger.style.color = 'transparent';
    }
  }
  burger.addEventListener('click', toggleBar);
  document.getElementById('close-nav-about').addEventListener('click', toggleBar);
});