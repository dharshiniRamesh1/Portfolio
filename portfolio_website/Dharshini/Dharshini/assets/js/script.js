
document.addEventListener("DOMContentLoaded", function() {
// Select all progress bars
const progressBars = document.querySelectorAll('.progress-bar');

// Iterate over each progress bar
progressBars.forEach(function(bar) {
// Get the percentage value from the aria-valuenow attribute
const value = bar.getAttribute('aria-valuenow');
// Set the width of the progress bar to the percentage value
bar.style.width = value + '%';
});
});