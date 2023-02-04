window.addEventListener('DOMContentLoaded', () => {
  // Get the burger element
  const burger = document.getElementById('burger-about');

  // Define the toggleBar function
  function toggleBar() {
    // Get the sideBar and body elements
    const sideBar = document.getElementById('hide-menu');
    const body = document.querySelector('body');

    // Check the display property of the sideBar element
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
