/*
 Entry point of app
 */

 const formMessage = document.querySelector('.form__message');

 formMessage.addEventListener('submit', (e) => {
   e.preventDefault();
 
   fetch('http://localhost:7070/')
     .then(response => response.json())
     .then(data => {
       console.log(data);
     })
     .catch(error => {
       console.error('Ошибка при выполнении запроса', error);
     });
 });
 
 