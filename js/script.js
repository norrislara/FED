
const switchTheme = document.querySelector("footer input");  // Bron: https://dev.to/daveyhert/how-to-implement-a-dark-mode-with-css-and-3-simple-lines-of-javascript-576

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("darkmode");
});

const header = document.querySelector("header");

if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

//Ik heb met chatgpt mijn code verbeterd door de console.errors toe te voegen, zodat de code zich maar op 1 pagina toepast
const volgendeButton = document.querySelector('.ddnieuws div img:nth-of-type(2)');
const vorigeButton = document.querySelector('.ddnieuws div img:first-of-type');

if (!vorigeButton || !volgendeButton) {
  console.error("Kan nieuwsitems niet vinden");
} else {
  volgendeButton.addEventListener('click', volgende);
  vorigeButton.addEventListener('click', vorige);

  function vorige() {
    document.querySelector(".ddnieuws ul").scrollLeft -= 320;
  }

  function volgende() {
    document.querySelector(".ddnieuws ul").scrollLeft += 320;
  }

  function volgende() {
    const ul = document.querySelector(".ddnieuws ul");
    const itemWidth = 320;
    const totaalItems = ul.children.length;
    const maxScrollLeft = itemWidth * (totaalItems - 1);

    if (ul.scrollLeft >= maxScrollLeft) {
      // Scroll terug naar het eerste item
      ul.scrollLeft = 0;
    } else {
      // Scroll normaal naar het volgende item
      ul.scrollLeft += itemWidth;
    }
  }
}

//Ik heb met chatgpt mijn code verbeterd door de console.errors toe te voegen, zodat de code zich maar op 1 pagina toepast

const gifMeisje = document.querySelector('.dunkin img:first-of-type'); // Bron: https://chatgpt.com/
const gifBakker = document.querySelector('.dunkin img:nth-of-type(2)');

if (!gifMeisje || !gifBakker) {
  console.error("Kan afbeeldingen niet vinden");
} else {
  let startMeisje = -20;
  let startBakker = 20;

  const startWidth1 = 320;
  const startHeight1 = 190;

  const startWidth2 = 300;
  const startHeight2 = 190;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Rotatie voor de eerste afbeelding
    gifMeisje.style.transform = `rotate(${startMeisje + scrollPosition / 40}deg)`;
    gifMeisje.style.width = `${startWidth1}px`;
    gifMeisje.style.height = `${startHeight1 + scrollPosition / 10}px`;

    // Rotatie voor de tweede afbeelding
    gifBakker.style.transform = `rotate(${startBakker - scrollPosition / 45}deg)`;
    gifBakker.style.width = `${startWidth2}px`;
    gifBakker.style.height = `${startHeight2 + scrollPosition / 10}px`;
  });
}


const letters = document.querySelectorAll('.dunkin h2 span');
const interval = 40;
const startPunt = 200;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  letters.forEach((letter, index) => {
    if (scrollY >= startPunt + (index * interval)) {
      letter.classList.add('visible');
    } else {
      letter.classList.remove('visible');
    }
  });
});

const hamMenu = document.querySelector("header nav:first-of-type ul li:nth-of-type(3)");
const offScreenMenu = document.querySelector('header nav:nth-of-type(2) ul');
const kleurVerandering = document.querySelector('header nav:first-of-type ul');
const stoptScrollen = document.querySelector('body');
const socialMediaAchtergrond = document.querySelector('header nav:nth-of-type(2) div');

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle('inbeeld');
  offScreenMenu.classList.toggle('inbeeld');
  kleurVerandering.classList.toggle('inbeeld');
  stoptScrollen.classList.toggle('inbeeld');
  socialMediaAchtergrond.classList.toggle('inbeeld');
})

let loader = document.querySelector("body > div"); // Bron: https://www.youtube.com/watch?app=desktop&v=Yf5d_Zx3AaI

window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none"; 
    }, 3000);
});

function myFunction() { // Bron: https://www.w3schools.com/howto/howto_js_filter_lists.asp

  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector('.storefinder input');
  filter = input.value.toUpperCase();
  ul = document.querySelector(" .storefinder ul");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}