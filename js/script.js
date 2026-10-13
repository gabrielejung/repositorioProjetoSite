document.addEventListener("DOMContentLoaded",() => {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click",() =>{
        navMenu.classList.toggle("active")
    });

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((Link)=>{
        Link.addEventListener("click", ()=>{
            navMenu.classList.remove("active");
          })
        })

        const slides = document.querySelectorAll(".carousel-slide");
        const dots = document.querySelectorAll(".dot");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        let slideAtual = 0;
        let slideIntervalo;

        function showSlide(index){
            slides.forEach((slide) => slide.classList.remove("active"));
            dots.forEach((dots) => dots.classList.remove("active"));

            slideAtual = (index + slides.length)
                % slides.length;

                slides[slideAtual].classList.add("active");
                dots[slideAtual].classList.add("active");
        }

    }); // Fechamento do evento carregar página html

    