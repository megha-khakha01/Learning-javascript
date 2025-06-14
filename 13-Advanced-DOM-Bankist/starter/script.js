'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//tabbed component
const tabs = document.querySelectorAll('.operations_tab');
const tabsContainer = document.querySelector('.operations_tab_container');
const tabsContent = document.querySelectorAll('operations_content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations_tab');
    console.log(clicked);

    //guard clause
    if (!clicked) return;
    // remove active classes
tabs.forEach(t => t.classList.remove
        ('operations_tab--active'));
        tabsContent.forEach(c => c.classList.remove('operations_content--active'));

//     // active tab

    
//     clicked.classList.add('operations_tab_active');

//     // activate content area
//     console.log (clicked.dataset.tab);
//     document.querySelector('.operations_content--${clicked.dataset.tab}')
//     .classList.add('operations_content_active');
// });
// passing "argument" into handler
// navigator.addEventListner ('mouseover' , handleHover.bind(0.5));
// navigator.addEventListner('mouseout', handleHover.bind(1));

// //sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListner('scroll', function () {
//     console.log(window.scrollY);

//     if(window.scrollY > initialCoords.top) navigator.userAgentclassList.add('sticky');
//     else navigator.classList.remove('sticky');  
// })
// Sticky navigation: Intersection Observer API

// const obsCallback = function (entries, observer){
// entries.forEach(entry =>{
//     console.log(entry);
// });
// };

// const obsOptions ={
//     root: null,
//     threshold: 0.1
// };

// const observer = new IntersectionObserver
// (obsCallback, obsOptions);
// observer.observe(section1);

// const header = document.querySelector('.header');

// const headerObserver = new IntersectionObserver()

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //Creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// //message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie"> Got it!</button>';

// //header.prepend(message);
// header.append(message);
// //header.append(message.cloneNode(true));
 
// //header.before(message);
// //header.after(message);

// // DELETE ELEMENTS
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//   //message.remove();
//   message.parentElement.removeChild(message);
// });

// Styles Attributes and Classes

//  Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // Don't use
// logo.clasName = 'shivi';


//Implementing Smooth Scorlling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function(e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   console.log
//   ('height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   // Scrolling
//     window.scrollTo(
//      s1coords.left + window.pageXOffset,
//      s1coords.top + window.pageYOffset
//    );

//    window.scrollTo({
//      left: s1coords.left + window.pageXOffset,
//      top: s1coords.top + window.pageYOffset,
//      behavior: 'smooth',
//    });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// Types of Event And Event Handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// const h1 = document.querySelector('h1');

// //going downward: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.computedStyleMap.color='white';
// h1.lastElementChild.computedStyleMap.color = 'orangered';

// //going upward : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(.'header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var()--gradient-primary';

// //going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (eg) {
//     if (el !==h1) el.style.transform = 'scale(0.5)';
// });

// Lifecycle DOM Events
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and DOM tree built!', e);
// });

// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

