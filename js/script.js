var contacts = document.querySelector('.contacts');
var dropDown = document.querySelector('.contacts__dropdown');
 
contacts.addEventListener('click', function(e){
    e.preventDefault();
    dropDown.classList.toggle('contacts__dropdown--active');
})

var phoneIcon = document.querySelector('.fa-phone_link');
phoneIcon.addEventListener('click', function(e){
    e.preventDefault();
    dropDown.classList.toggle('contacts__dropdown--active');
})