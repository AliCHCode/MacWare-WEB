document.addEventListener("DOMContentLoaded", function () {
    const yukariButon = document.getElementById("yukariCik");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            yukariButon.style.display = "block"; // Kaydırınca buton görünsün
        } else {
            yukariButon.style.display = "none"; // Yukarı çıkınca buton gizlensin
        }
    });

    yukariButon.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Yumuşak kaydırma
    });
});