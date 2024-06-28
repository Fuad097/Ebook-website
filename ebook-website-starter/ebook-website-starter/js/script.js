// Add custom JavaScript here
function userScroll() {
    const navbar = document.querySelector ('.navbar');

    window.addEventListener ('scroll', () => {
        if(window.scrollY) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-fade');
        } else{
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-fade')
        }
    })
}

document.addEventListener ('DOMContentLoaded' , userScroll);

