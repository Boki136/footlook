$(document).ready(function () {

    // Make Navigation Sticky & back to the top of the page

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

        if ($(this).scrollTop() > 600) {
            $('.arrow-to-top').fadeIn(200)
        }

        if ($(this).scrollTop() < 600) {
            $('.arrow-to-top').fadeOut(200)
        }

    });

    $('.arrow-to-top').click(function () {
        $("html").scrollTop(0);
    })

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
        $('.login_modal').css('position', 'fixed');
    })

    $('.shopping-bag-wrapper').mouseover(function () {
        $('.login_modal').css('display', 'none');
    })

    $('.login_modal').mouseleave(function () {
        $(this).fadeOut();
    })


    // Show basket on icon click
    $('.shopping-bag-wrapper').click(function () {
        $('.bag_wrapper').animate({
            width: 'toggle'
        }, 350);

        $('body').css('overflow', 'hidden')
        $('.body-overlay').fadeIn()

    })

    $('.close-bag').click(function () {

        $('body').css('overflow', 'scroll')
        $('.bag_wrapper').animate({
            width: 'toggle'
        }, 150);

        $('.body-overlay').fadeOut()

        let product_count = $('.product-box');

        for (let i = 0; i <= product_count.length - 1; i++) {
            let item_q_original = $('.item_quantity_original:eq(' + parseInt(i) + ')').html()
            let item_p_original = $('.product-price:eq(' + parseInt(i) + ')').html()
            $('.qty_input_bag:eq(' + parseInt(i) + ')').val(item_q_original)
            $('.product-total:eq(' + parseInt(i) + ')').text(parseFloat(item_p_original * 0.011).toFixed(2) * item_q_original);
        }

    });

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

    // Detach product page results message on screen < 990px
    if ($(window).width() < 990) {
        let result_message = $('.product-result-message').detach()
        result_message.insertAfter($('.product-tools-wrapper'))
        result_message.addClass('product-result-message_mobile')

        $('.sort-filter').html('Filters ')

        // Move basket subtotal to top of the basket sidebar

        $('.bottom-menu-actions-wrapper').insertAfter($('.top-menu-actions'));
    }

    // Show sort by filter on hover only screens > 1200
    if ($(window).width() > 990) {

        $('.sort-filter').mouseover(function () {
            $('.filter-box').fadeIn(200)
        })

        $('.product-tools-wrapper').mouseleave(function () {
            $('.filter-box').fadeOut(200)
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


    // Show correct testemonial on hover
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


    // Update Price On quantity changes
    let product_count = $('.product-box');

    for (let i = 0; i <= product_count.length - 1; i++) {
        let quantity_value = $('.qty_input_bag:eq(' + parseInt(i) + ')').val()
        let product_price = $('.product-price:eq(' + parseInt(i) + ')').text()
        let sum = parseFloat(quantity_value * (product_price * 0.011)).toFixed(2);
        $('.product-total:eq(' + parseInt(i) + ')').text(sum)
    }

    function update_price() {
        let product_count = $('.product-box');
        for (let i = 0; i <= product_count.length - 1; i++) {
            let quantity_value = $('.qty_input_bag:eq(' + parseInt(i) + ')').val()
            let product_price = $('.product-price:eq(' + parseInt(i) + ')').text()
            let sum = parseFloat(quantity_value * (product_price * 0.011)).toFixed(2)
            $('.product-total:eq(' + parseInt(i) + ')').text(sum)
        }
    }

    // Prevent keyboard input to basket qty field & paste function

    function preventNumberInput(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
            e.preventDefault();
        }
    }

    $('.qty_input_bag, .qty_input').keypress(function (e) {
        preventNumberInput(e);
    });

    $(function () {
        $(document).on("cut copy paste", ".qty_input_bag, .qty_input", function (e) {
            e.preventDefault();
        });
    });

    // Update / calculate totals on product qty change

    $('.qty_input_bag').change(function () {

        let item_quantity_in_bag = $(this).parent().parent().parent().parent().find($('.item_quantity_original'))
        item_quantity_in_bag = item_quantity_in_bag.html();

        update_price();
        calculate_basket_total()
    })

    // Calculate basket total

    function calculate_basket_total() {

        let product_total = $('.product-total')
        let all_total_array = [];
        for (i = 0; i < product_total.length; i++) {
            all_total_array.push(parseFloat($('.product-total:eq(' + parseInt(i) + ')').text()))
        }

        let basket_total = 0;
        for (var i = 0; i < all_total_array.length; i++) {
            basket_total += all_total_array[i]
        }

        if (basket_total < 75) {
            basket_total = basket_total + 6.99
            $('.delivery_treshold').show();
            $('.delivery_treshold span').html(parseFloat((75 - basket_total) + 6.99).toFixed(2))
        } else if (basket_total >= 75) {
            basket_total = basket_total
            $('.delivery_amount').html("FREE")
            $('.delivery_treshold').hide();
        }

        $('.basket-total').html(parseFloat(basket_total).toFixed(2))
    }

    calculate_basket_total();

    // Calculate amount of items in the bag

    function calculate_items_in_basket() {
        let items_total = $('.qty_input_bag')
        let all_items_total_qty = [];
        for (i = 0; i < items_total.length; i++) {
            all_items_total_qty.push(parseFloat($('.qty_input_bag:eq(' + parseInt(i) + ')').val()))
        }

        let all_total_test = 0;
        for (var i = 0; i < all_items_total_qty.length; i++) {
            all_total_test += all_items_total_qty[i]
        }

        $('.total_items_in_bag span').html(all_total_test)
        $('.shopping-bag-wrapper span').html(all_total_test)
    }

    calculate_items_in_basket();

    $('.qty_input_bag').change(calculate_items_in_basket)

    // Shoe size selection

    $('.size_selector').click(function () {
        let size_selected = $(this).html()
        $('.size_selector').removeClass('selected_box')
        $(this).addClass('selected_box')
        $('.product_size').val(size_selected)
        $('.product_size').attr('data-product_size', size_selected)
    })

    // Make product size selection required

    $('#add_to_bag').click(function (e) {
        $('.warning_message').remove();
        let size_button = $('.size_selector').hasClass('selected_box')
        if (size_button == false) {
            e.preventDefault();
            $('.product-action').append(`<h5 class='warning_message'>Please select the size</h5>`)
            $('.warning_message').fadeOut(4000);
        } else if (size_button == true) {
            $('#add_to_bag').submit()
        }
    });

    // Remove item from bag on click
    $('.remove-item').click(function () {
        setTimeout(function () {
            calculate_items_in_basket();
            calculate_basket_total();
            let basket_count = $('.total_items_in_bag span').html()
            if (basket_count == 0) {
                $('.bottom-menu-actions-wrapper, .products-wrapper').hide()
                $('.shopping-bag-wrapper span').hide()
                $('.basket_contents_and_action').append(` 
                <div class="shop_options">
                <h4 class='no_products_in_basket'>
                    No products in your basket at the moment.
                </h4>
    
                <hr>
                <div class="shop_by_cat">
                    <h4>Shop by Category:</h4>
                    <a aria-current="page" href="{% url 'products' %}?category=men">Men</a>
                    <a aria-current="page" href="{% url 'products' %}?category=women">Women</a>
                </div>
    
    
                <div class="shop_by_brand">
    
                    <h4>Shop by Brand:</h4>
                    <a href="{% url 'products' %}?brand=ORIGINALS">Originals</a>
                    <a href="{% url 'products' %}?brand=CORE / NEO">CORE / NEO</a>
                    <a href="{% url 'products' %}?brand=SPORT PERFORMANCE">Sport Performance</a>
                </div>
            </div>`)
            }
        }, 1);

        $(this).closest($('.product-box')).remove();
    })

    // Remove message after 3.5 seconds
    $('.message-wrapper').delay(3000).fadeOut(400);

});