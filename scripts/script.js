// Wait for document to be fully loaded
$(document).ready(function() {

    // ========================
    // FLOATING ICONS ANIMATION
    // ========================
    function animateFloatingIcons() {
        // Animate the Bat
        $('.bat').animate({
            top: '+=50px',
            left: '+=30px'
        }, 3000, function() {
            $(this).animate({
                top: '-=50px',
                left: '-=30px'
            }, 3000, animateFloatingIcons);
        });

        //Animate the Stars with rotation effect
        $('.stars').animate({
            top: '+=40px',
            right: '+=40px',
            opacity: 0.8
        }, 2500, function() {
            $(this).animate({
                top: '-=40px',
                right: '-=40px',
                opacity: 0.6
            }, 2500);
        });
    }

});