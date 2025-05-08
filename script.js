window.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";

    document.querySelectorAll("a").forEach(link => {
      if (
        link.href &&
        link.origin === location.origin &&
        !link.hash &&
        !link.hasAttribute("download") &&
        !link.target
      ) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          document.body.style.opacity = "0";
          setTimeout(() => {
            window.location.href = link.href;
          }, 500);
        });
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
  
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
      });
    }
  });