$(document).ready(function () {

    // Enable all tooltips 
    $('[data-toggle="tooltip"]').tooltip();

    // Replace brand with dropdown on add product form

    $('#id_brand').replaceWith(`
    <select name="brand" class="add-product-form-input" id="id_brand">
    <option value="ORIGINALS">Originals</option>
    <option value="CORE / NEO">CORE / NEO</option>
    <option value="SPORT PERFORMANCE">Sport Performance</option>
    </select>
    `);

    // Make Navigation Sticky & back to the top of the page

    $(window).scroll(function () {
        $('.navbar').css({
            position: 'sticky',
            top: 0,
            background: '#303841',
            'z-index': 100000
        });

        if ($(this).scrollTop() <= 0) {
            $('.navbar').css({
                background: '#3A4750',
            });
        }

        if ($(this).scrollTop() > 600) {
            $('.arrow-to-top').fadeIn(200);
        }

        if ($(this).scrollTop() < 600) {
            $('.arrow-to-top').fadeOut(200);
        }

    });

    $('.arrow-to-top').click(function () {
        $("html").scrollTop(0);
    });

    // Open Mobile Menu
    $(".navbar-toggler").click(function () {
        $('.mobile_nav').fadeIn(200);
        $('.nav-content-wrapper').css('display', 'none');
        $('.navbar').css('height', '0');
    });

    // Close Mobile Menu
    $('.fa-times').click(function () {
        $('.mobile_nav').fadeOut(200);
        $('.nav-content-wrapper').show();
        $('.navbar').css('height', '110px');
    });

    // Insert HR after each mobile link

    $('.mobile_nav_links li').each(function () {
        $(this).append(`<hr class="hr-lg">`);
    });

    $('.social-sidebar').mouseover(function () {
        $('.social-sidebar').removeClass('rotate_back');
        $('.rotate-selector i').css('transform', 'rotateZ(0deg)');
    }).mouseleave(function () {
        $('.social-sidebar').addClass('rotate_back');
        $('.rotate-selector i').css('transform', 'rotateZ(90deg)');
    });

    // Show log-in modal when hovering profile icon

    $('.profile-icon').mouseover(function () {
        $('.login_modal').fadeIn();
        $('.login_modal').css('position', 'fixed');
    });

    $('.shopping-bag-wrapper').mouseover(function () {
        $('.login_modal').css('display', 'none');
    });

    $('.login_modal').mouseleave(function () {
        $(this).fadeOut();
    });


    // Show basket on icon click & close handler
    $('.shopping-bag-wrapper').click(function () {
        $('.bag_wrapper').animate({
            width: 'toggle'
        }, 350);
        $('body').css('overflow', 'hidden');
        $('.body-overlay').fadeIn();
    });

    $('.close-bag').click(function () {

        $('body').css('overflow', 'scroll');
        $('.bag_wrapper').animate({
            width: 'toggle'
        }, 150);
        $('.body-overlay').fadeOut();
    });

    // Show Learn more button on product hover

    if ($(window).width() > 990) {
        $('.product-card,.product-slider_item').mouseover(function () {
            $(this).find('.learn-more-wrapper').children().fadeIn(100);
        }).mouseleave(function () {
            $(this).find('.learn-more-wrapper').find('.background-overlay, .learn-more-btn, .product-price, .product-rrp_main').fadeOut(100);
        });

    }
    
    
    // Img fallback
    
    $('.primary_img').each(function() {
    if ( !this.complete
    ||   typeof this.naturalWidth == "undefined"
    ||   this.naturalWidth == 0                  ) {
      // image was broken, replace with your new image
      this.src = 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwc2hvZXN8ZW58MHx8MHx8&w=1000&q=80';
    }
  });
    
    $('.product-images-additional img').each(function() {
    if ( !this.complete
    ||   typeof this.naturalWidth == "undefined"
    ||   this.naturalWidth == 0                  ) {
      // image was broken, replace with your new image
      this.src = 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwc2hvZXN8ZW58MHx8MHx8&w=1000&q=80';
    }
  });
    

    // Detach product page results message on screen < 990px
    if ($(window).width() < 990) {
        let result_message = $('.product-result-message').detach();
        result_message.insertAfter($('.product-tools-wrapper'));
        result_message.addClass('product-result-message_mobile');

        $('.sort-filter').html('Filters ');

        // Move basket subtotal to top of the basket sidebar

        $('.bottom-menu-actions-wrapper').insertAfter($('.top-menu-actions'));
    }

    // Show sort by filter on hover only screens > 1200
    if ($(window).width() > 990) {
        $('.sort-filter').mouseover(function () {
            $('.filter-box').fadeIn(200);
        });

        $('.product-tools-wrapper').mouseleave(function () {
            $('.filter-box').fadeOut(200);
        });

        $('.product-listing-wrapper, .brand-box-wrapper').mouseover(function () {
            $('.filter-box').fadeOut(200);
        });
    }

    // prepend social footer icons on screen < 1200px
    if ($(window).width() < 1200) {
        $('.footer-social').insertAfter($('.footer-seperator'));
        $('.footer-social').css('margin-right', '0');
    }

    // Show additional image on click
    $('.product-images-additional img').click(function () {
        let image_url = $(this).attr('src');
        $('.product-images img:eq(0)').attr('src', `${image_url}`);
    });

    // Transition for next button on homepage slider

    $('.slider-navigation').mouseover(function () {
        $('.slider-navigation img').css({
            left: '15px',
            position: 'relative'
        });
    }).mouseleave(function () {
        $('.slider-navigation img').css({
            left: '0',
            position: 'relative'
        });
    });


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
        });
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
    });

    $('.person-info-card:eq(1)').mouseover(function () {
        $('.review_two').show();
        $('.review_one, .review_three').hide();
    });

    $('.person-info-card:eq(2)').mouseover(function () {
        $('.review_three').show();
        $('.review_one, .review_two').hide();
    });

    // Show shop now button when hovering over category
    $('.category-box').mouseover(function () {
        $(this).find(".background-overlay").addClass('category-opacity');
        $(this).find('a').show().animate({
            left: '55%',
        });
    }).mouseleave(function () {
        $(this).find('a').hide();
        $(this).find('a').animate({
            left: '50%',
        });
        $(this).find(".background-overlay").removeClass('category-opacity');

    });

    // Update Price On quantity changes
    let product_count = $('.product-box');

    for (let i = 0; i <= product_count.length - 1; i++) {
        let quantity_value = $('.qty_input_bag:eq(' + parseInt(i) + ')').val();
        let product_price = $('.product-price:eq(' + parseInt(i) + ')').text();
        let sum = parseFloat(quantity_value * (product_price * 0.011)).toFixed(2);
        $('.product-total:eq(' + parseInt(i) + ')').text(sum);
    }

    function update_price() {
        let product_count = $('.product-box');
        for (let i = 0; i <= product_count.length - 1; i++) {
            let quantity_value = $('.qty_input_bag:eq(' + parseInt(i) + ')').val();
            let product_price = $('.product-price:eq(' + parseInt(i) + ')').text();
            let sum = parseFloat(quantity_value * (product_price * 0.011)).toFixed(2);
            $('.product-total:eq(' + parseInt(i) + ')').text(sum);
        }
    }

    // Prevent keyboard input to basket qty field & paste function
    function preventNumberInput(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
            e.preventDefault();
        }
    }

    $(function () {
        $(document).on("cut copy paste", ".qty_input_bag, .qty_input", function (e) {
            e.preventDefault();
        });
    });

    // Update / calculate totals on product qty change

    $('.qty_input_bag').change(function () {
        let item_quantity_in_bag = $(this).parent().parent().parent().parent().find($('.item_quantity_original'));
        item_quantity_in_bag = item_quantity_in_bag.html();
        update_price();
        calculate_basket_total();
    });

    // Calculate basket total

    function calculate_basket_total() {
        let product_total = $('.product-total');
        let all_total_array = [];
        for (i = 0; i < product_total.length; i++) {
            all_total_array.push(parseFloat($('.product-total:eq(' + parseInt(i) + ')').text()));
        }

        let basket_total = 0;
        for (var i = 0; i < all_total_array.length; i++) {
            basket_total += all_total_array[i];
        }

        if (basket_total < 75) {
            basket_total = basket_total + 6.99;
            $('.delivery_treshold').show();
            $('.delivery_treshold span').html(parseFloat((75 - basket_total) + 6.99).toFixed(2));
        } else if (basket_total >= 75) {
            basket_total = basket_total;
            $('.delivery_amount').html("FREE");
            $('.delivery_treshold').hide();
        }
        $('.basket-total').html(parseFloat(basket_total).toFixed(2));
    }

    calculate_basket_total();

    // Calculate amount of items in the bag

    function calculate_items_in_basket() {
        let items_total = $('.qty_input_bag');
        let all_items_total_qty = [];
        for (i = 0; i < items_total.length; i++) {
            all_items_total_qty.push(parseFloat($('.qty_input_bag:eq(' + parseInt(i) + ')').val()));
        }

        let all_total_test = 0;
        for (var i = 0; i < all_items_total_qty.length; i++) {
            all_total_test += all_items_total_qty[i];
        }

        $('.total_items_in_bag span').html(all_total_test);
        $('.shopping-bag-wrapper span').html(all_total_test);
    }

    calculate_items_in_basket();

    $('.qty_input_bag').change(calculate_items_in_basket);

    // Shoe size selection
    $('.size_selector').click(function () {
        let size_selected = $(this).html();
        $('.size_selector').removeClass('selected_box');
        $(this).addClass('selected_box');
        $('.product_size').val(size_selected);
        $('.product_size').attr('data-product_size', size_selected);
    });

    // Make product size selection required
    $('#add_to_bag').click(function (e) {
        $('.warning_message').remove();
        let size_button = $('.size_selector').hasClass('selected_box');
        if (size_button == false) {
            e.preventDefault();
            $('.product-action').append(`<h5 class='warning_message'>Please select the size</h5>`);
            $('.warning_message').fadeOut(4000);
        } else if (size_button == true) {
            $('#add_to_bag').submit();
        }
    });

    // Remove item from bag on click
    $('.remove-item').click(function () {
        setTimeout(function () {
            calculate_items_in_basket();
            calculate_basket_total();
            let basket_count = $('.total_items_in_bag span').html();
            if (basket_count == 0) {
                $('.bottom-menu-actions-wrapper, .products-wrapper').hide();
                $('.shopping-bag-wrapper span').hide();
                $('.basket_contents_and_action').append(` 
                <div class="shop_options">
                <h4 class='no_products_in_basket'>
                    No products in your basket at the moment.
                </h4>
    
                <hr>
                <div class="shop_by_cat">
                    <h4>Shop by Category:</h4>
                    <a aria-current="page" href="/products/?category=men">Men</a>
                    <a aria-current="page" href="/products/?category=women">Women</a>
                </div>
    
    
                <div class="shop_by_brand">
                    <h4>Shop by Brand:</h4>
                    <a href="/products/?brand=ORIGINALS">Originals</a>
                    <a href="/products/?brand=CORE%20/%20NEO">CORE / NEO</a>
                    <a href="/products/?brand=SPORT%20PERFORMANCE">Sport Performance</a>
                </div>
            </div>`);
            }
        }, 1);
        $(this).closest($('.product-box')).remove();
    });

    // Remove message after 3 seconds
    $('.message-wrapper').delay(2000).fadeOut(400);
    let loggedInIconState = $('.profile_icon_loggedin').css('display');
    if (loggedInIconState == 'inline-block') {
        $('.img-test').remove();
        let profileIcon = $('.profile_icon_loggedin-wrapper').detach();
        $('.nav-icons').append(profileIcon);
        $(profileIcon).css('position', 'relative');
        $('.profile_icon_loggedin').css('visibility', 'visible');
        $('.profile_icon_loggedin-wrapper div').addClass('loggedin_elipse');
    }

    // Remove shipping info on profile if no address provided
    let addressInfoProfile = $('#id_default_address_line_1').val();

    if (addressInfoProfile == '') {
        $('#shipping-details-update').hide();
        $('.address-details').append(`
        <div class='add_address'>
        <i class="fas fa-plus"></i>
        <p>Add a new shipping address</p>
        </div>
        `);
        $('.address-details').find($('.fa-pen')).hide();
    }

    // Disable all inputs by default 
    $('.profile-details-wrapper').find($('input, select')).attr('disabled', 'true');

    // Enable profile fileds on button click
    $('#id_default_country').addClass('hide-arrow-select');




    // Enable details editing on profile page
    $('.btn-edit-details').click(function () {
        $(this).parent().parent().find($('.cancel-edit')).show();
        $(this).parent().parent().find($('form input, form select')).removeAttr('disabled');
        $(this).html(('<i class="fas fa-save"></i>'));
        $(this).addClass('edit-details-btn');
        $('.tooltip').hide();
        $('#id_default_address_line_2').attr('placeholder', 'address line 2');
        $('#id_default_phone_number').attr('placeholder', 'phone number');
        $('#id_default_country').removeClass('hide-arrow-select');

        // Submit form on click to update users details
        $('.fa-save').click(function () {
            let formSubmitDetails = $(this).parent().parent().parent().find('form');
            formSubmitDetails.validate();
            formSubmitDetails.submit();
            $('#username-error').slideOut();
        });
    });

    // Cancel any changes
    $('.cancel-edit').click(function () {
        $(this).parent().find(('.profile-details-header button')).html('<i class="fas fa-pen"></i>');
        $(this).parent().find(('form input, form select')).attr('disabled', 'true');
        $(this).hide();
        $('#id_default_country').addClass('hide-arrow-select');
        $(this).parent().find(('.profile-details-header button')).unbind("click", test);
    });

    // Add new address 
    $('.add_address').click(function () {
        $('#shipping-details-update').show();
        $('.address-details').find($('.fa-pen')).show();
        $(this).hide();
    });

    // Open order details popup

    $('.expand-order-details').click(function () {
        $(this).parent().next().fadeIn(300);
        $('.body-overlay').show();
        $('body').css('overflow-y', 'hidden');
    });

    $('.close-order-popup').click(function () {
        $(this).parent().parent().hide();
        $('.body-overlay').hide();
        $('body').css('overflow-y', 'scroll');
    });

    // Prompt to ask the user if the want to delete the profile

    $('.delete-profile-btn').click(function (e) {
        e.preventDefault();
        $.confirm({
            closeIcon: true,
            closeIconClass: 'fa fa-close',
            title: 'Are you sure you want to delete your profile?',
            content: 'All your previous orders and details will be deleted!',
            buttons: {
                confirm: function () {
                    $('.delete-profile-btn').unbind();
                    $('.delete-profile-btn').click();
                }
            }
        });
    });

    // Append message for image field on product upload

    $('#id_images').prev().attr({
        "data-toggle": "tooltip",
        "data-placement": "top",
        "title": "Please use URL for upload"
    });
    $('#id_discount').prev().attr({
        "data-toggle": "tooltip",
        "data-placement": "top",
        "title": "Please enter 0 if no discount"
    });
    $('#id_rating').attr({
        'max': 5,
        'min': 1
    });
    $('#add-product_form').submit(function () {
        $(this).validate();
    });

    // Prompt User to ask if they want to delete the product
    $('.remove_product').click(function (e) {
        e.preventDefault();
        href = $(this).attr('href');
        $.confirm({
            closeIcon: true,
            closeIconClass: 'fa fa-close',
            title: 'Are you sure you want to delete this product?',
            content: "By deleting this product, your customers won't have the visiblity anymore",
            buttons: {
                confirm: function () {
                    $('.remove_product').unbind();
                    window.location = href;
                }
            }
        });
    });

});
