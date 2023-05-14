
//========================= preloader =====================//

let preloader = document.querySelector('[data-preloader]')

  window.addEventListener('load',()=>{
    preloader.classList.add('remove')
  })

//========================= MENU =====================//
let menu = document.querySelector(".fa-bars");

let nav_list = document.querySelector(".nav_list");
menu.onclick = () => {
  if (nav_list.style.right == "-100%") {
    nav_list.style.right = "0";
  } else {
    nav_list.style.right = "-100%";
  }
};
//========================= Class Active =====================//

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        };
    });
};
//========================= Scroll Reveal =====================//

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});
// Scroll Home
sr.reveal(".home_title", {});
sr.reveal(".home_scroll", { delay: 200 });
sr.reveal(".home_img", { origin: "right", delay: 200});

// Scroll about

sr.reveal(".about_img", {delay: 400 });
sr.reveal(".about_subtitle", { delay: 300 });
sr.reveal(".about_profession", { delay: 400 });
sr.reveal(".about_text", { delay: 400 });
sr.reveal(".list_5", { delay: 400, interval: 200 });

// Scroll skills

sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_name", { distance: "20px", delay: 40, interval: 100 });
sr.reveal(".skills_img", { delay: 400 });

// Scroll PORTFOLIO
sr.reveal('.portfolio_img', {interval: 200})

// Scroll CONTACT

sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', {interval: 200})
sr.reveal('.contact_input', {delay: 300})
sr.reveal('.contact_button', {delay: 400})
