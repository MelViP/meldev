// JavaScript to handle scroll and apply the animation dynamically
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax1, .parallax2');

    parallaxElements.forEach(element => {
      const parallaxFactor = element.getAttribute('data-parallax-factor') || 0.2;
      const translateY = scrollPosition * parallaxFactor;
      element.style.transform = `translateY(${translateY}px)`;
    });
  });