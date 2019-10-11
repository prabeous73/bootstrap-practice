// Jquery for tooltip

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });


//Jquery for carousel play/pause buttons
$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});


//Jquery for Modal funtionalities
$(document).ready(function() {

    // Show login modal on click
    $('a[href$="#loginModal"]').on( "click", function() {
        $('#loginModal').modal('show');
    } );

    // Show reserve table modal on click
    $('a[href$="#reserveTableModal"]').on( "click", function() {
        $('#reserveTableModal').modal('show');
    } );

});