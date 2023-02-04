window.addEventListener('DOMContentLoaded', () => {
  // Get the burger element
  const burger = document.getElementById('burger');
  // Define the toggleBar function
  function toggleBar() {
    // Get the sideBar and body elements
    const sideBar = document.getElementById('hide-menu');
    const body = document.getElementById('body');

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

  function createSpeakersSection() {
    const mainSection = document.createElement('section');
    mainSection.id = 'speakers';
    mainSection.className = 'speakers';
    program.insertAdjacentElement('afterend', mainSection);

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper wrapper-speakers';
    mainSection.appendChild(wrapper);

    const title = document.createElement('div');
    title.className = 'program-title';
    wrapper.appendChild(title);

    const heading = document.createElement('h3');
    heading.innerHTML = 'Featured Musicians';
    title.appendChild(heading);

    const line = document.createElement('div');
    line.className = 'guide_bar';
    title.appendChild(line);

    const speakerContainer = document.createElement('div');
    speakerContainer.className = 'speakers-list';
    wrapper.appendChild(speakerContainer);

    speakers.forEach((speaker) => {
      const speakerDetails = document.createElement('div');
      speakerDetails.className = 'speakers-list-details';
      speakerContainer.appendChild(speakerDetails);

      const speakerImg = document.createElement('img');
      speakerImg.src = speaker.speakerImg;
      speakerDetails.appendChild(speakerImg);

      const speakerText = document.createElement('div');
      speakerText.className = 'speaker-text';
      speakerDetails.appendChild(speakerText);

      const speakerName = document.createElement('span');
      speakerName.className = 'speaker-name';
      speakerName.innerHTML = speaker.speakerName;
      speakerText.appendChild(speakerName);

      const speakerSchool = document.createElement('p');
      speakerSchool.className = 'speaker-school';
      speakerSchool.innerHTML = speaker.speakerSchool;
      speakerText.appendChild(speakerSchool);

      const speakerDescription = document.createElement('p');
      speakerDescription.className = 'speaker-description';
      speakerDescription.innerHTML = speaker.speakerDescription;
      speakerText.appendChild(speakerDescription);

      const line = document.createElement('div');
      line.className = 'guide_bar';
      speakerText.appendChild(line);
    });
  }

  window.onload = createSpeakersSection;
});