// JavaScript to add fade-in effect on load
document.addEventListener("DOMContentLoaded", function () {
    const headerText = document.querySelector('.header-text');
    headerText.style.opacity = 0;
    headerText.style.transition = "opacity 2s ease-in-out";

    // Trigger fade-in after a slight delay
    setTimeout(() => {
        headerText.style.opacity = 1;
    }, 500);
});
