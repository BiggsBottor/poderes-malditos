const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkedInputs = form.querySelectorAll('input:checked');
  console.log('checkedInputs', {checkedInputs});
});
