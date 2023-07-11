// querySelector

const heading = document.querySelector('.header__texto h2');
console.log(heading);

// querySslectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto';
enlaces[0].classList.add('nueva-clase');

//