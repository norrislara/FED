const switchTheme = document.querySelector("footer > div input");  // Bron: https://dev.to/daveyhert/how-to-implement-a-dark-mode-with-css-and-3-simple-lines-of-javascript-576

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("darkmode");
});

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}
