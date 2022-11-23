const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;

// Theme
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const searchBox = document.querySelector('#search');

/* Modal */


/*Create HTML from data*/
const cards = [ {
  open: 'web-1',
  id:'modal',
  dataAnimation:'slideInOutTop',
  dataItem:'web',
  img: './assets/images/portfolio-1.jpg',
  link: '#',
  title:'Web development',
  modalHeader:'Web project 1',
  subheader:'Food Website',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'

},
 {
  open: 'web-2',
  id:'modal',
  dataAnimation:'slideInOutTop',
  img: './assets/images/portfolio-2.jpg',
  link: '#',
  title:'Web development',
  modalHeader:'Web project 2',
  subheader:'Food Website',
  dataItem:'web',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'

},
 {
  open: 'web-3',
  id:'modal',
  dataAnimation:'slideInOutTop',
  img: './assets/images/portfolio-3.jpg',
  link: '#',
  title:'Web development',
  modalHeader:'Web project 3',
  subheader:'Food Website',
  dataItem:'web',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'

},
{
  open: 'app-1',
  id:'modal',
  dataAnimation:'slideInOutTop',
  dataItem: 'app',
  img: './assets/images/portfolio-4.jpg',
  link: '#',
  title:'App development',
  modalHeader:'App project 1',
  subheader:'Eating Website',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'

},
{
  open: 'app-2',
  id:'modal',
  dataAnimation:'slideInOutTop',
  dataItem: 'app',
  img: './assets/images/portfolio-5.jpg',
  link: '#',
  title:'App development',
  modalHeader:'App project 2',
  subheader:'Eating Website',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'

},
{
  open: 'app-3',
  id:'modal',
  dataAnimation:'slideInOutTop',
  dataItem: 'app',
  img: './assets/images/portfolio-6.jpg',
  link: '#',
  title:'App development',
  modalHeader:'App project 3',
  subheader:'Eating Website',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'

},
{
  open: 'ui-1',
  id:'modal',
  dataAnimation:'slideInOutTop',
  dataItem: 'ui',
  img: './assets/images/portfolio-7.jpg',
  link: '#',
  title:'UI development',
  modalHeader:'UI project 1',
  subheader:'Calendar Website',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'
},
{
  open: 'ui-2',
  id:'modal',
  dataAnimation:'slideInOutTop',
  dataItem: 'ui',
  img: './assets/images/portfolio-8.jpg',
  link: '#',
  title:'UI development',
  modalHeader:'UI project 2',
  subheader:'Calendar Website',
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeModal: 'data-close'
},
]

let portfolioGrid = document.getElementById('portfolio-grid');

const portfolioItems = document.querySelectorAll(portfolioData);

const popup = document.getElementById('popUp')


cards.forEach((card) => {
  let portfolioCard = document.createElement('div');
  portfolioCard.classList.add('portfolio-card')
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  let portfolioIcon = document.createElement('img');
  let link = document.createElement('div');
  link.classList.add('card-popup-box');
  let title = document.createElement('div');
  let subheader = document.createElement('h3');
  
  portfolioCard.dataset.item = `${card.dataItem}`
  portfolioCard.dataset.open = `${card.open}`
  portfolioCard.id = `${card.id}`
  portfolioIcon.src = `${card.img}`
  link.href = `${card.link}`
  title.innerHTML = `${card.title}`
  subheader.innerHTML = `${card.subheader}`
  
  portfolioGrid.appendChild(portfolioCard).appendChild(cardBody)
  cardBody.appendChild(portfolioIcon) 
  cardBody.appendChild(link)
  link.appendChild(title)
  link.appendChild(subheader)
})

const createModals = () => {
  const popUps = cards
  .map(({dataAnimation, img, modalHeader, text, open, closeModal }) => (
    `
    <div class="modal" id=${open} data-animation=${dataAnimation}>
    <div class="modal-dialogue"> 
    <header class="modal-header">
    <h3>${modalHeader}</h3> 
    <i class="fas fa-times" ${closeModal}></i> 
    </header> 
    <div class="modal-body"> 
    <div class="image-wrapper"> 
    <img src="${img}" alt="portfolio image"> 
    </div> 
    <div class="text-wrapper"> 
     <p><strong>My first awesome website</strong></p> 
     <p>${text}</p> 
     <p>${text}</p>
     <p>${text}</p> 
    </div> 
    </div> 
    </div> 
    </div> 
     `
     )).join('')
     popup.innerHTML = popUps
  }
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);



const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  } 
  elm.classList.add(active);
}

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  })

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    //set active state
    setActive(elm, switcherBtn);
    setTheme(toggle);
  }) 
}

searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  })
}) 

for (const link of filterLink) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      }else if (card.dataset.item === filter) {
        card.style.display = 'block';
      }else {
        card.style.display = 'none';
      } 
    })
  })
}

// Modal/Full site modal "open buttons"

 for (const elm of openModal) {
   elm.addEventListener('click', function() {
     const modalId = this.dataset.open;
     createModals()
    document.getElementById(modalId).classList.add(isVisible);  
  })
 }

for (const elm of closeModal) {
  elm.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove(isVisible);
  })
}

//Modal
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    createModals();
  }
})


document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

//close About page 

document.querySelector('.fa-times').addEventListener('click', () => {
  document.getElementById('about').classList.remove(isVisible)
})

//get elements displayed
const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elements', marqueeContent.children.length);

for (i = 0; i < elmsDisplayed; i +=1) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}