window.$ = window.jQuery = require('jquery');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function(){

    $('.ancle').click(function(e){
        e.preventDefault();
        linkDown($(this).data('ancle'));
    });  

    function linkDown(lala){
        $('html, body').animate({
            scrollTop: $('body').find('[data-ship="'+lala+'"]').offset().top
        }, 900);
    }
});

