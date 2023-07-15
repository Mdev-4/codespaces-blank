var scrollPos = 0;
var prenom = document.querySelector('.prenom');
var nom = document.querySelector('.nom');

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > scrollPos) {
        // Scrolling down
        prenom.classList.add('moveLeft');
        prenom.classList.remove('moveRight');
        nom.classList.add('moveRight');
        nom.classList.remove('moveLeft');
    } else {
        // Scrolling up
        prenom.classList.remove('moveLeft');
        prenom.classList.add('moveRight');
        nom.classList.remove('moveRight');
        nom.classList.add('moveLeft');
    }

    scrollPos = currentScrollPos;
});


//////////////////////// animation scroll /////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElementsFinishedWork = document.querySelectorAll('.deuxio > .container > .finished-work > p');
  hiddenElementsFinishedWork.forEach((el) => observer.observe(el));
  
  const hiddenElementsWeddingPics = document.querySelectorAll('.deuxio > .container > .working > .wedding > .wedding-pics > img');
  hiddenElementsWeddingPics.forEach((el) => observer.observe(el));
  
/////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function changeBackgroundOnScroll() {
  var weddingPics = document.querySelector('.wedding-pics');
  var body = document.body;

  if (isElementInViewport(weddingPics)) {
    body.classList.add('green-bg');
  } else {
    body.classList.remove('green-bg');
  }
}

window.addEventListener('scroll', changeBackgroundOnScroll);

// Appel initial de la fonction changeBackgroundOnScroll
changeBackgroundOnScroll();

