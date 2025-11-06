let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}


//----------- Toggle Search Form Updated----------------//
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');
const searchForm = document.querySelector('.search-form');

searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active');
});

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

// ===== Scroll To Top Button =====
document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const homeSection = document.getElementById('home');

  // Check scroll and toggle button visibility
  function toggleScrollBtn() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Show button only after leaving home section (adjust 300px as needed)
    if (scrollY > homeSection.offsetHeight - 200) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }

  // Run check when scrolling
  window.addEventListener('scroll', toggleScrollBtn);

  // Also run it once on load (important if page reloads mid-scroll)
  toggleScrollBtn();

  // Scroll back to top (smooth)
  scrollTopBtn.addEventListener('click', () => {
    homeSection.scrollIntoView({ behavior: 'smooth' });
  });
});


