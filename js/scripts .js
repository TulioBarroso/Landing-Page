function enviou(){
    alert('Mensagem enviada com sucesso!')
}
//jquery-> recolher o botão mobile
    $('.nav-link').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

//Frases digitando...
const typed = new Typed("#digitando", {
strings: [
    "Ter a confiança do nosso cliente.",
    "Ser a melhor transportadora do Brasil.",
    "Trabalhar de forma etica e responsável.",
],
typeSpeed: 60,
backSpeed: 40,
loop: true,
backDelay: 1500,
showCursor: true,
cursorChar: "|",
});

//MODO ESCURO
$('.themes-list li').on('click', function(){
    let linkElement = $(this).find('a');
    let theme = linkElement.data('theme');
    $('html').attr('data-bs-theme', theme);
})




