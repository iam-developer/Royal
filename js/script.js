
$(document).ready(function() {
    $(".burger_menu").click(function() {
        $("#header_buttons").slideToggle(500);
           
        });    
});

let burger_menu = document.querySelector('.burger_menu');

burger_menu.addEventListener('click', () => {
    burger_menu.classList.toggle('change');
})

