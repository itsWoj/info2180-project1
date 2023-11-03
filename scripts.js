document.addEventListener('DOMContentLoaded', function() {

    var form = document.querySelector('form');

    var messageElement = document.querySelector('.message');

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        var email = document.getElementById('email').value;

        if (email === '' || !isValidEmail(email)) {
         
            messageElement.textContent = "Please enter a valid email address.";
        } else {
        
            messageElement.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    });


    function isValidEmail(email) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

});