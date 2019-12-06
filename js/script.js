let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')


menu.addEventListener('click', function () {
    sidebar.classList.toggle('active')
})