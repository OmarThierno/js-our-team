const teamWork = [
  {
    photo: 'wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
  },
  {
    photo: 'angela-caroll-chief-editor.jpg',
    name: 'Angela Caroll',
    role: 'Chief Editor',
  },
  {
    photo: 'walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    role: 'Office Manager',
  },
  {
    photo: 'angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    role: 'Social Media Manager',
  },
  {
    photo: 'scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    role: 'Developer',
  },
  {
    photo: 'barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
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

    if (key === 'photo') {
      myStrin += `<div><img src="img/${curPersonObj[key]}" alt=""></div>`;
    } else if (key === 'role') {
      myStrin += `
        <div>
          <i class="fa-brands fa-github"></i>
          ${curPersonObj[key]}
        </div>`
    } else {
      myStrin += `<div>${curPersonObj[key]}</div>`
    }
  }

  containerElem.innerHTML += `<div class="col">${myStrin}</div>`
}
