const form = document.querySelector('.login-form');
const button = document.querySelector('button');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {
    const obj = {
      email: form.elements.email.value.trim(),
      password: form.elements.password.value.trim(),
    };
    console.log(obj);
    form.reset();
  }
});
