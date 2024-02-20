import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(() => {
    const formLocalData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formLocalData));
}, 500));

window.addEventListener('load', => {
    const storedLocalData = localStorage.getItem('feedback-form-state');
    if(storedLocalData) {
        const formLocalData = JSON.parse(storedData);
        emailInput.value = formLocalData.email;
        messageInput.value = formLocalData.message;
    }
});