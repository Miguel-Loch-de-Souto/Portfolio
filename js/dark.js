
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