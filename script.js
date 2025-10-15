// simple handler: show an alert on submit (Formspree will still submit)
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('leadForm');
  form && form.addEventListener('submit', function(e){
    // let Formspree handle it; optionally show a small message
    setTimeout(()=> alert('Спасибо! Ваша заявка отправлена. Мы свяжемся в ближайшее время.'), 200);
  });
});
