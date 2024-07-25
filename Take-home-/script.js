document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        // Basic form validation
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!email || !message) {
            alert('Please fill out all required fields.');
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
