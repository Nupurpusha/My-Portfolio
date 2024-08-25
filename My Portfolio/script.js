
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function toggleSectionActivation() {
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        if (isInViewport(section)) {
            section.classList.add('active');
        }
    });
}


document.addEventListener('scroll', function() {
    toggleSectionActivation();
});


toggleSectionActivation();




  
const scriptURL = 'https://script.google.com/macros/s/AKfycbz6R5x6-OvIh87z6jwhwyoiL-K6l5Vw3TShw4ypK_VUvRr6Q91zuIda0R7R1AHeZAKB/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
