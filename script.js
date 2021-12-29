const overlayer = document.querySelector('.overlayer');
const cart = document.querySelector('#cart');
const times = document.querySelector('#times');
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const navItems = document.querySelectorAll('.nav-item');
const specialClickBtn = document.querySelector('#specialOffer');
// const alertMessages = document.querySelector('.alert-messages');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tabs.forEach(x => {
            x.classList.remove('selected-li');
        });
        target.classList.add('active');
        tab.classList.add('selected-li');
    });
});

setTimeout(() => {
    specialClickBtn.style.display = 'none';
}, 9000);









