"use strict";

console.log('connected');
let header_nav = document.getElementById('header_nav');
let wrapper = document.getElementById('wrapper');
let btn_degato = document.getElementById('btn_remove_gato');
let resume = document.getElementById('resume');
let main = document.getElementById('main');
let phrase = document.getElementById('phrase');
let spacer = document.getElementById('spacer');
let portrait = document.getElementById('portrait');
let portrait_label = document.getElementById('portrait_label');

// project buttons

let worx = document.getElementById('worx')
let ysfs = document.getElementById('ysfs')

worx.onclick = () => window.open('https://github.com/bddowningjennings-dev/worx_-valley_hackathon-', '_blank')
ysfs.onclick = () => window.open('https://github.com/bddowningjennings-dev/yourstuff4sale', '_blank')

let gatos = [];

btn_degato.onclick = () => {
  if (gatos.length > 0) {
    if (gatos.length === 1) btn_degato.classList.add('empty')
    let blah = gatos.pop();
    main.removeChild(blah);
  } else {
    alert('All gatos gato removed already...');
  }
}
let clickGato = () => {
  getGat()
  btn_degato.classList.remove('empty')
}

let clickResume = () => {
  if (resume.className.split(' ').includes('hidden')) {
    resume.classList.remove('hidden');
  } else {
    resume.classList.add('hidden');
  }
}

const phraseFactory = () => {
  let tidbits = [
    'and I\'m currently open to joining a great dev team...',
    'and I enjoy food and eating it...',
    'and I know Mathematics...',
    'and I have 100+ years experience... (that I can google)',
    'and I love dogs... but mine the most...',
    'and I guess I like humor just fine...',
    '& ❤❤❤ long walks on the beach.......',
  ];
  let letter_count = 0, phrase_count = 0, counter = 0;

  let printPhrase = () => {
    if (phrase.innerHTML.length < tidbits[phrase_count].length) {
      phrase.innerHTML = phrase.innerHTML + tidbits[phrase_count][letter_count];
      letter_count ++;
    } else if (counter < 10) {
      counter ++;
      if (spacer.className.split(' ').includes('flash')) {
        spacer.classList.remove('flash');
      } else {
        spacer.classList.add('flash');
      }
    } else {
      counter = 0;
      letter_count = 0;
      phrase.innerHTML = '';
      phrase_count ++;
      if (phrase_count === tidbits.length) {
        phrase_count = 0;
      }
    }
  };
  let shufflePhrases = (num = 1) => {
    for (let round in Array(num).fill()) {
      for (let order in tidbits) {
        let indx = Math.floor(Math.random() * (tidbits.length - order));
        tidbits.push(tidbits[indx]);
        tidbits.splice(indx, 1);
      }
    }
  }
  let getPhrases = setInterval(printPhrase, 120);
  let stopPhrases = () => {
    clearInterval(getPhrases);
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  return {
    shufflePhrases: shufflePhrases,
    printPhrase: printPhrase,
    getPhrases: () => getPhrases
  }
};

let hoverPortrait = () => {
  if (portrait.className.split(' ').includes('hover_portrait')) {
    portrait.classList.remove('hover_portrait');
    portrait_label.classList.remove('hover_label');
  } else {
    main.setAttribute('style', 'z-index: 3');    
    portrait.classList.add('hover_portrait');
    portrait_label.classList.add('hover_label');
  }
}
let hoverNonPortrait = () => {
  portrait.classList.remove('hover_portrait');
  portrait_label.classList.remove('hover_label');
  main.setAttribute('style', 'z-index: 0');
}

let phrasePlace = phraseFactory();
phrasePlace.shufflePhrases(7);
phrasePlace.getPhrases();

let lastPosition = 0;
window.onscroll = () => {
  if (window.scrollY - lastPosition > 0) {
    header_nav.classList.add('shrink');
    wrapper.classList.add('shrink');
  } else if (window.scrollY - lastPosition < 0) {
    header_nav.classList.remove('shrink');
    wrapper.classList.remove('shrink');
  }
  lastPosition = window.scrollY;
}
const getGat = async () => {
  let blah = document.createElement("div");

  try {
    const resp = await fetch('https://aws.random.cat/meow')
    const img_src = (await resp.json()).file
    blah.innerHTML = `<img class="gato" src="${img_src}" />`
  } catch(err) {
    console.warn('Something went wrong.', err)
    blah.innerHTML = '<img class="gato" src="assets/gato.jpg" />'
  }
  gatos.push(blah);
  main.appendChild(blah);
}

