// scripts.js

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.getElementById("tripForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    modal.style.display = "block"; // Display the modal
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    // Initialize datepicker
flatpickr('.date-picker', {
    dateFormat: 'Y-m-d', // Set desired date format
    minDate: 'today', // Set minimum selectable date to today
    // You can add more options as needed
});

};
