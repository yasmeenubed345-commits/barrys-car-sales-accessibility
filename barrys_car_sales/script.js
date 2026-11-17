document.addEventListener('DOMContentLoaded', function () {
    console.log("Barry's Car Sales website loaded successfully.");
    
    const enquiryForm = document.querySelector('form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (event) {
            // Check if required fields are filled
            const email = document.getElementById('email');
            if (email && email.value.trim() === '') {
                alert('Please enter your email address before submitting.');
                event.preventDefault(); // Stop form from submitting if empty
            } else {
                alert('Thank you! Your enquiry has been sent. We aim to respond within two working days.');
            }
        });
    }

    
    const carCards = document.querySelectorAll('.car');
    carCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.borderColor = '#14365d';
        });
        card.addEventListener('mouseleave', function() {
            card.style.borderColor = '#cccccc';
        });
    });
});
