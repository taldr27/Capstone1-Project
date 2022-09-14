window.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
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
  document.getElementById('close-nav').addEventListener('click', toggleBar);

  const speakers = [
    {
      speakerImg: 'images/speaker_kiko.png',
      speakerName: 'Kiko Loureiro',
      speakerSchool: 'Megadeth s guitarrist',
      speakerDescription: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    },
    {
      speakerImg: 'images/speaker_kiko.png',
      speakerName: 'Kiko Loureiro',
      speakerSchool: 'Megadeth s guitarrist',
      speakerDescription: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    },
    {
      speakerImg: 'images/speaker_kiko.png',
      speakerName: 'Kiko Loureiro',
      speakerSchool: 'Megadeth s guitarrist',
      speakerDescription: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    },
    {
      speakerImg: 'images/speaker_kiko.png',
      speakerName: 'Kiko Loureiro',
      speakerSchool: 'Megadeth s guitarrist',
      speakerDescription: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    },
    {
      speakerImg: 'images/speaker_kiko.png',
      speakerName: 'Kiko Loureiro',
      speakerSchool: 'Megadeth s guitarrist',
      speakerDescription: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    },
    {
      speakerImg: 'images/speaker_kiko.png',
      speakerName: 'Kiko Loureiro',
      speakerSchool: 'Megadeth s guitarrist',
      speakerDescription: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    },
  ];
});