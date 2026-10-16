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
            dots.forEach((dot) => dot.classList.remove("active"));

            slideAtual = (index + slides.length)
                % slides.length;

                slides[slideAtual].classList.add("active");
                dots[slideAtual].classList.add("active");
        }

        function nextSlide() {
            showSlide(slideAtual + 1);
        }

        function prevSlide() {
            showSlide(slideAtual - 1);
        }

        function startSlide() {
            slideIntervalo = setInterval(nextSlide, 5000);
        }
        
        function stopSlide() {
            clearInterval(slideIntervalo);
        }

        nextBtn.addEventListener("click", () => {
            nextSlide();
            stopSlide();
            startSlide();
        });

        prevBtn.addEventListener("click", () => {
            prevSlide();
            stopSlide();
            startSlide();
        });

        dots.forEach((dot) => {
            dot.addEventListener("click", (e) => {
                const index = parseInt(e.target.getAttribute("data-index"));
                showSlide(index);
                stopSlide();
                startSlide();
            });
        });
        startSlide();

        const contatoForm = document.getElementById("contatoForm");
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        contatoForm.addEventListener("submit", (event) => {
            event.preventDefault();

            let isValid = true;

            // Validação do campo nome (min 3 carac.)
            if(nome.value.trim().length < 3)
            {
                showErro(nome, "O nome deve ter no mínimo três caracteres");
                isValid = false;
            }

            // Validação do campo email
            if(!isEmailValid(email.value.trim()))
            {
                showErro(email, "Insira um e-mail válido");
                isValid = false;
            }
        
            // Validação do campo mensagem (min 10 carac.)
            if(mensagem.value.trim().length < 10)
            {
                showErro(mensagem, "A mensagem deve ter no mínimo dez caracteres");
                isValid = false;
            }

            // Verificar se ocorreu tudo bem
            if(isValid)
            {
                clearError();
                alert("Mensagem enviada com sucesso!");
                contatoForm.reset();
            }
        });

        function isEmailValid(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        function showErro(inputElement, mensagem) {
            const formGroup = inputElement.parentElement;
            clearFieldError(inputElement);
            const erroMensagem = document.createElement("small");
            erroMensagem.className = "error-text";
            erroMensagem.innerText = mensagem;
            formGroup.appendChild(erroMensagem);
        }

    }); // Fechamento do evento carregar página html