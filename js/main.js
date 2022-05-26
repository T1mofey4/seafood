$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/images/prev.svg" alt="" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/images/next.svg" alt="" /></button>',
        vertical: true
    });

    $('.product__name').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="product-prev"><img src="/images/product-prev.svg" alt="" /></button>',
        nextArrow: '<button type="button" class="product-next"><img src="/images/product-next.svg" alt="" /></button>',
        focusOnSelect: true,
        asNavFor: '.product__content',
        centerMode: true,
        vertical: true
      });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
    });
});
