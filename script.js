

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang === "es") {
            window.location.href = "index-es.html";
        } else {
            window.location.href = "index.html";
        }
    });
});