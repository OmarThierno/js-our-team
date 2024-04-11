const teamWork = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  },
];

// console.log(teamWork);

const containerElem = document.querySelector('.container');
console.log(containerElem);

for (let i = 0; i < teamWork.length; i++) {
  const curPersonObj = teamWork[i];
  // console.log(curPersonObj);

  let myStrin = '';

  for (let key in curPersonObj) {
    console.log(key, curPersonObj[key]);

    myStrin += `<div>The ${key} is: ${curPersonObj[key]}</div>`
  }

  containerElem.innerHTML += `<div class="col">${myStrin}</div>`
}
