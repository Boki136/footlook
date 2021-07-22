$(document).ready(function () {

    // Open Mobile Menu

    $(".navbar-toggler").click(function () {
        $('.mobile_nav').fadeIn(200);
    })

    // Close Mobile Menu
    $('.fa-times').click(function () {
        $('.mobile_nav').fadeOut(200);
    })


    // Insert HR after each mobile link

    $('.mobile_nav_links li').each(function () {
        $(this).append(`<hr class="hr-lg">`);
    });

    $('.social-sidebar').mouseover(function () {
        $('.social-sidebar').removeClass('rotate_back');
        $('.rotate-selector i').css('transform', 'rotateZ(0deg)')
    }).mouseleave(function () {
        $('.social-sidebar').addClass('rotate_back');
    });

    // Show log-in modal when hovering profile icon

    $('.profile-icon').mouseover(function () {
        $('.login_modal').fadeIn();
    })

    $('.login_modal').mouseleave(function () {
        $(this).fadeOut();
    })

    // Show Learn more button on product hover

    $('.product-card').mouseover(function () {
        $(this).find('.learn-more-wrapper').children().fadeIn(100);
    }).mouseleave(function () {
        $(this).find('.learn-more-wrapper').find('.background-overlay, .learn-more-btn, .product-price').fadeOut(100);
    })

    // Show sort by filter on hover

    $('.sort-filter').mouseover(function () {
        $('.filter-box').fadeIn(200)
    })

    $('.navbar, .product-listing-wrapper').mouseover(function () {
        $('.filter-box').fadeOut(200)
    })

    // prepend social footer icons on screen < 1200px

    if ($(window).width() < 1200) {
        $('.footer-social').insertAfter($('.footer-seperator'))
        $('.footer-social').css('margin-right', '0')
    }

    // Remove fist image in the list

    $('.product-images-additional img').first().remove();

});