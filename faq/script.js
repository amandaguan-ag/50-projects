// Bring in toggle buttons
// loop through nodelist
// Add click event
// Toggle active class on faq
// Toggle icon
// Toggle answer

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});