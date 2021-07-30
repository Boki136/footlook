$(document).ready(function () {

    // Make Navigation Sticky

    $(window).scroll(function () {
        $('.navbar').css({
            position: 'sticky',
            top: 0,
            background: '#303841',
            'z-index': 1000
        })

        if ($(this).scrollTop() <= 0) {
            $('.navbar').css({
                position: 'static',
                background: '#3A4750',
            })
        }
    });

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
        $('.rotate-selector i').css('transform', 'rotateZ(90deg)')
    });

    // Show log-in modal when hovering profile icon

    $('.profile-icon').mouseover(function () {
        $('.login_modal').fadeIn();
    })

    $('.login_modal').mouseleave(function () {
        $(this).fadeOut();
    })

    // Show Learn more button on product hover

    $('.product-card,.product-slider_item').mouseover(function () {
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

    // Show additional image on click
    $('.product-images-additional img').click(function () {
        let image_url = $(this).attr('src');
        $('.product-images img:eq(0)').attr('src', `${image_url}`)
    })

    // Calculate product rating & show correct number of stars

    let rating_score = $('.rating-score').text()

    function calculateStars(num) {

        // if score is zero, display message no ratings
        if (num == 0) {
            $('.product-rating').replaceWith(`<h4>No Ratings</h4>`)
        }
        //checking 0.1 - 0.99
        else if (num > 0 && num < 0.99) {
            let empty_stars = $('.product-rating i').slice(1, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
            $('.product-rating i:eq(0)').removeClass('fa-star')
            $('.product-rating i:eq(0)').addClass('fa-star-half-alt')
        }
        //checking 1 - 1.99
        else if (num == 1) {
            $('.product-rating i').slice(1, 5)
            let empty_stars = $('.product-rating i').slice(1, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
        } else if (num > 1 && num < 1.99) {
            let empty_stars = $('.product-rating i').slice(2, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
            $('.product-rating i:eq(1)').removeClass('fa-star')
            $('.product-rating i:eq(1)').addClass('fa-star-half-alt')
            //checking 2 - 2.99
        } else if (num == 2) {
            $('.product-rating i:eq(1)').removeClass('fa-star-half-alt')
            $('.product-rating i:eq(1)').addClass('fa-star')
            let empty_stars = $('.product-rating i').slice(2, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
        } else if (num > 2 && num < 2.99) {
            let empty_stars = $('.product-rating i').slice(3, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
            $('.product-rating i:eq(2)').removeClass('fa-star')
            $('.product-rating i:eq(2)').addClass('fa-star-half-alt')
            //checking 3 - 3.99
        } else if (num == 3) {
            $('.product-rating i').slice(3, 5)
            let empty_stars = $('.product-rating i').slice(3, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
        } else if (num > 3 && num < 3.99) {
            let empty_stars = $('.product-rating i').slice(3, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
            $('.product-rating i:eq(3)').removeClass('far')
            $('.product-rating i:eq(3)').addClass('fas fa-star-half-alt')
            //checking 4 - 4.99
        } else if (num == 4) {
            let empty_stars = $('.product-rating i').slice(4, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
            $('.product-rating i:eq(3)').removeClass('fa-star-half-alt')
            $('.product-rating i:eq(3)').addClass('fa-star')
        } else if (num > 4 && num < 4.99) {
            let empty_stars = $('.product-rating i').slice(4, 5);
            empty_stars.removeClass('fas')
            empty_stars.addClass('far')
            $('.product-rating i:eq(4)').removeClass('far')
            $('.product-rating i:eq(4)').addClass('fas fa-star-half-alt')
        }
    }

    calculateStars(rating_score);

    // Transition for next button on homepage slider

    $('.slider-navigation').mouseover(function () {
        $('.slider-navigation img').css({
            left: '15px',
            position: 'relative'
        })
    }).mouseleave(function () {
        $('.slider-navigation img').css({
            left: '0',
            position: 'relative'
        })
    })


    // Homepage Category slider, move to right on click

    let cellArray1 = document.getElementsByClassName("product-slider_item");
    let cellArray = Object.values(cellArray1);


    $(".slider-navigation").click(moveFoward);

    function moveFoward() {
        let firstImg = cellArray[0];
        let lastImg = cellArray[9];
        let lastImgOrder = parseInt($(lastImg).css("order"));
        let moveValue = parseInt($(".product-slider-container").css("margin-left"));
        let imgWidth = parseInt($(".product-slider-container img").css("width")) + 25;
        $(".product-slider-container").animate({
            marginLeft: moveValue - imgWidth + 'px'
        })
        $(".slider-navigation").unbind("click");
        $(".slider-navigation").unbind("click");
        setTimeout(function () {
            $(firstImg).css("order", lastImgOrder + 1);
            $(".product-slider-container").css("margin-left", moveValue + 'px');
            cellArray.push(cellArray[0]);
            cellArray.shift();
            $(".slider-navigation").click(moveFoward);
        }, 650);
    }


    // Show correct review on hover

    $('.person-info-card:eq(0)').mouseover(function () {
        $('.review_one').show();
        $('.review_two, .review_three').hide();
    })

    $('.person-info-card:eq(1)').mouseover(function () {
        $('.review_two').show();
        $('.review_one, .review_three').hide();

    })

    $('.person-info-card:eq(2)').mouseover(function () {
        $('.review_three').show();
        $('.review_one, .review_two').hide();

    })

    // Show shop now button when hovering over category

    $('.category-box').mouseover(function () {
        $(this).find(".background-overlay").addClass('category-opacity')
        $(this).find('a').show().animate({
            left: '55%',
        })
    }).mouseleave(function () {
        $(this).find('a').hide()
        $(this).find('a').animate({
            left: '50%',
        })
        $(this).find(".background-overlay").removeClass('category-opacity')

    })


});