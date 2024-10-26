document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('#botao button').addEventListener('click', function(evento) {
        evento.preventDefault();

        document.getElementById('span').style.display = 'block';
    })
})