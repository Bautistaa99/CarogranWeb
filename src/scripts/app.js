//Formulario
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_c2h56lf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
      document.getElementById('form').reset(); // Limpiar los campos del formulario
      window.location.href = '#index'; // Redirigir al inicio
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});





