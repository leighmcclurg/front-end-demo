//code for form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    alert(`Thanks for your message, ${name}! We will get back to you at ${email} asap!`);
    form.reset();
});


//code for form submission
const form1 = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form1.elements.name.value;
    const topic= form1.elements.topic.value;
    alert(`${name} loves ${topic}`);
    form.reset();
});