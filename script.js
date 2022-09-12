/* სელექტორები */
const nav = document.querySelector('.nav');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');

/* ნავმენიუ ივენთი */
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };
  
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));

/* მოდალის გახსნა */
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
   
    overlay.classList.remove('hidden');
  };
  
  /* მოდალის დახურვა */
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  
  /* ერთი და იგივე კლასით რო მივწვდეთ ორ ელემენტს და ისე გავხსნათ მოდალი */
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
  
  btnCloseModal.addEventListener('click', closeModal);
  //overlay ბლარავს ბექგრაუნდს როცა აქტიურია
  overlay.addEventListener('click', closeModal);
  
 
  document.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

//სექციების სქროლი
  document.querySelector(".nav__links").addEventListener("click", (e)=>{
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  })
  
/* სლაიდერი*/

const slider = function () {
    //სელექტორები
    const slides = document.querySelectorAll('.slide');
    const dotContainer = document.querySelector('.dots');
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      //ყველა დოტს ვუშლით ექთივ კლას
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
    //სლაიდერის ფუნქცია 
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${75 * (i - slide)}%)`)
      );
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
    init();
    
    // Event handler
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();

/* questions bar */

const openQuestion = document.querySelector(".openQuestion")
const selectParagraph = document.querySelector(".selectParagraph")
const questionBtn = document.querySelector(".questionBtn")

openQuestion.addEventListener("click", ()=>{
    selectParagraph.classList.toggle("hidden")
    questionBtn.classList.toggle("start-rotate")
})


const openQuestion1 = document.querySelector(".openQuestion--1")
const selectParagraph1 = document.querySelector(".selectParagraph--1")
const questionBtn1 = document.querySelector(".questionBtn--1")

openQuestion1.addEventListener("click", ()=>{
  console.log("click")
  selectParagraph1.classList.toggle("hidden")
  questionBtn1.classList.toggle("start-rotate")
})

const openQuestion2 = document.querySelector(".openQuestion--2")
const selectParagraph2 = document.querySelector(".selectParagraph--2")
const questionBtn2 = document.querySelector(".questionBtn--2")

openQuestion2.addEventListener("click", ()=>{
  console.log("click")
  selectParagraph2.classList.toggle("hidden")
  questionBtn2.classList.toggle("start-rotate")
})


const openQuestion3 = document.querySelector(".openQuestion--3")
const selectParagraph3 = document.querySelector(".selectParagraph--3")
const questionBtn3 = document.querySelector(".questionBtn--3")

openQuestion3.addEventListener("click", ()=>{
  console.log("click")
  selectParagraph3.classList.toggle("hidden")
  questionBtn3.classList.toggle("start-rotate")
})
