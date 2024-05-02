
window.addEventListener('load', function() {
    // Hide the title-container div using jQuery syntax
    $('.title-container').hide();

    // Fade in the title-container div using jQuery syntax
    $('.title-container').fadeIn(2000);

    // Wait for 3 seconds and then fade out the title-container div using jQuery syntax
    setTimeout(function() {
        $('.title-container').fadeOut(2000, function() {
            // Redirect to a different HTML link after fade out
            window.location.href = 'home.html';
        });
    }, 1000);
});