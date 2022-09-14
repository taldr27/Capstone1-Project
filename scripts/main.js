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
      speakerSchool: 'Megadeth s Guitarrist',
      speakerDescription: 'Pedro Henrique "Kiko" Loureiro is a Brazilian guitarist. He has been a member of several heavy metal bands, including Angra and Megadeth.',
    },
    {
      speakerImg: 'images/speaker_petrucci.png',
      speakerName: 'John Petrucci',
      speakerSchool: 'Dream Theater\'s Guitarrist',
      speakerDescription: 'John Peter Petrucci is an American guitarist, best known as a founding member of the progressive metal band Dream Theater.',
    },
    {
      speakerImg: 'images/speaker_mustaine.png',
      speakerName: 'Dave Mustaine',
      speakerSchool: 'Megadeth\'s Guitarrist',
      speakerDescription: 'He is the co-founder, lead vocalist, rhythm guitarist and primary songwriter of the thrash metal band Megadeth, as well as their sole consistent member.',
    },
    {
      speakerImg: 'images/speaker_king.png',
      speakerName: 'Kerry King',
      speakerSchool: 'Slayer\'s Guitarrist',
      speakerDescription: 'Best known for being the co-lead guitarist and songwriter of thrash metal band Slayer. He co-founded the band with Jeff Hanneman in 1981.',
    },
    {
      speakerImg: 'images/speaker_turner.png',
      speakerName: 'Alex Turner',
      speakerSchool: 'Artic Monkey\'s Guitarrist',
      speakerDescription: 'He is best known as the frontman and principal songwriter of the rock band Arctic Monkeys, with whom he has released six albums.',
    },
    {
      speakerImg: 'images/speaker_jeff.png',
      speakerName: 'Jeff Hanneman',
      speakerSchool: 'Slayer\'s Guitarrist',
      speakerDescription: 'Best known as a founding member and rhythm/lead guitarist of the thrash metal band Slayer. Hanneman composed both music and lyrics for every Slayer album.',
    },
  ];

  const program = document.getElementById('program');

  function speakersHTML() {
    const mainSection = document.createElement('section');
    mainSection.id = 'speakers';
    mainSection.className = 'speakers';
    program.insertAdjacentElement('afterend', mainSection);

    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'wrapper wrapper-speakers';
    mainSection.appendChild(wrapperDiv);

    const programDiv = document.createElement('div');
    programDiv.className = 'program-title';
    wrapperDiv.appendChild(programDiv);

    const h3 = document.createElement('h3');
    h3.innerHTML = 'Featured Musicians';
    programDiv.appendChild(h3);

    const line = document.createElement('div');
    line.className = 'guide_bar';
    programDiv.appendChild(line);

    const speakerContainer = document.createElement('div');
    speakerContainer.className = 'speakers-list';
    wrapperDiv.appendChild(speakerContainer);

    for (let i = 0; i < 6; i += 1) {
      const speakersDetails = document.createElement('div');
      speakersDetails.className = 'speakers-list-details';
      speakerContainer.appendChild(speakersDetails);

      const speakerImg = document.createElement('img');
      speakerImg.className = '';
      speakerImg.src = speakers[i].speakerImg;
      speakersDetails.appendChild(speakerImg);

      const speakerDivDetails = document.createElement('div');
      speakerDivDetails.className = 'speaker-text';
      speakersDetails.appendChild(speakerDivDetails);

      const spanSpeaker = document.createElement('span');
      spanSpeaker.className = 'speaker-name';
      spanSpeaker.innerHTML = speakers[i].speakerName;
      speakerDivDetails.appendChild(spanSpeaker);

      const pSpeaker = document.createElement('p');
      pSpeaker.className = 'speaker-school';
      pSpeaker.innerHTML = speakers[i].speakerSchool;
      speakerDivDetails.appendChild(pSpeaker);

      const line = document.createElement('div');
      line.className = 'guide_bar';
      speakerDivDetails.appendChild(line);

      const pDescripSpeaker = document.createElement('p');
      pDescripSpeaker.className = 'speaker-description';
      pDescripSpeaker.innerHTML = speakers[i].speakerDescription;
      speakerDivDetails.appendChild(pDescripSpeaker);
    }
  }
  window.onload = speakersHTML();
});