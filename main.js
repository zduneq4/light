const btn = document.querySelector('.switcher');
let light = document.querySelector('.light');



btn.addEventListener('click', function () {
    light.classList.toggle('yellow')
})