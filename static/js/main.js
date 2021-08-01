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
                background: '#3A4750',
            })
        }
    });

    // Open Mobile Menu

    $(".navbar-toggler").click(function () {
        $('.mobile_nav').fadeIn(200);
        $('.nav-content-wrapper').css('display', 'none');
        $('.navbar').css('height', '0')
    })

    // Close Mobile Menu
    $('.fa-times').click(function () {
        $('.mobile_nav').fadeOut(200);
        $('.nav-content-wrapper').show();
        $('.navbar').css('height', '110px')
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

    if ($(window).width() > 990) {
        $('.product-card,.product-slider_item').mouseover(function () {
            $(this).find('.learn-more-wrapper').children().fadeIn(100);
        }).mouseleave(function () {
            $(this).find('.learn-more-wrapper').find('.background-overlay, .learn-more-btn, .product-price').fadeOut(100);
        })

        $('.product-card').mouseover(function () {
            var second_image = $(this).find('.additional_img_hover').attr('src')
            $(this).find('.primary_img').attr('src', second_image);

        }).mouseleave(function () {
            var first_img = $(this).find('.primary-img_link').html()
            $(this).find('.primary_img').attr('src', first_img);
        })
    }

    // Detach results message on screen < 990px

    if ($(window).width() < 990) {
        let result_message = $('.product-result-message').detach()
        result_message.insertAfter($('.product-tools-wrapper'))
        result_message.addClass('product-result-message_mobile')

        $('.sort-filter').html('Filters ')
    }

    // Show sort by filter on hover only screens > 1200

    if ($(window).width() > 990) {

        $('.sort-filter').mouseover(function () {
            $('.filter-box').fadeIn(200)
        })

        $('.product-listing-wrapper, .brand-box-wrapper').mouseover(function () {
            $('.filter-box').fadeOut(200)
        })

    }

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