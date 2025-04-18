emailjs.init("9i5zUMtfunjicp3D6");

document.getElementById('formularioInscripcion').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_zzvtlcq', 'template_rn01z6f', this)
    .then(() => {
      alert('¡Inscripción enviada con éxito!');
      this.reset();
    }, (error) => {
      alert('Ocurrió un error al enviar el formulario. Intentá de nuevo.');
      console.error('Error:', error);
    });
});
