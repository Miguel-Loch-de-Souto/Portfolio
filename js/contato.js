  
        // Validação do formulário Bootstrap
        (function () {
            'use strict';
            const form = document.getElementById('contactForm');
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    alert('Mensagem enviada com sucesso!');
                }
                form.classList.add('was-validated');
            }, false);
        })();

        // Toggle Dark/Light Mode
        const themeToggle = document.getElementById("toggleTheme");
        const themeIcon = document.getElementById("themeIcon");

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Alterna ícone
            if (document.body.classList.contains("dark-mode")) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            } else {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
            }
        });
