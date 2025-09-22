// ==========================
// DARK/LIGHT MODE
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("toggleTheme");
  const savedTheme = localStorage.getItem("theme");

  // Aplica o tema salvo imediatamente
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) {
      const icon = themeToggle.querySelector("i");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const icon = themeToggle.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
      }
    });
  }
});

// ==========================
// FORM VALIDATION (Bootstrap)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        alert("Mensagem enviada com sucesso!");
      }
      form.classList.add("was-validated");
    }, false);
  }
});

// ==========================
// CHART.JS GRÁFICOS (Página Gráficos)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("chartTemperatura")) {
    new Chart(document.getElementById("chartTemperatura"), {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
          label: "Temperatura (°C)",
          data: [22, 24, 21, 25, 27, 23],
          borderColor: "red",
          fill: false
        }]
      }
    });

    new Chart(document.getElementById("chartUmidade"), {
      type: "bar",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
          label: "Umidade (%)",
          data: [70, 68, 75, 72, 74, 73],
          backgroundColor: "blue"
        }]
      }
    });

    new Chart(document.getElementById("chartVelocidade"), {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [{
          label: "Velocidade (m/s)",
          data: [1.2, 1.5, 1.4, 1.7, 1.9, 2.0],
          borderColor: "green",
          fill: false
        }]
      }
    });
  }
});