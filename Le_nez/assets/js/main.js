'use strict';
// ハンバーガーメニュー
$(function(){
    $('.stick_menu').on('click', function(){
        $('.nav').toggleClass('active');

        // .navに.activeがあるかどうかで、.stick_menuの表示切り替え
        if ($('.nav').hasClass('active')) {
            $('.stick_menu').hide();
        } else {
            $('.stick_menu').show();
        }
    });

    $('.nav_btn, .nav_item a').on('click', function(){
        $('.nav').removeClass('active');
        // メニューを閉じたときは、.stick_menu を表示する
        $('.stick_menu').show();
    });

    $('.menu_tag').on('click', function() {
        $('.menu_tag').removeClass('active');
        $(this).addClass('active');
        
        const target = $(this).data('target');
        $('.menu_content').removeClass('active');
        $('.content-' + target).addClass('active');
        });      
});

// ページ読み込み時にFVにクラスをつける
    $(window).on('load', function() {
        $('.fv_container, .fv_lead').addClass('is-visible');
    });

//h2 の動き
$(function() {
    $(window).on('scroll', function() {
        $('.aroma-fade').each(function() {
            const elemPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
        
        // 画面の3/4くらいまでスクロールしたら発火
        if (scroll > elemPos - windowHeight + (windowHeight / 4)) {
            $(this).addClass('is-active');
            }
        });
    });
// ロード時にも一度実行（最初から画面内にある見出しのため）
    $(window).trigger('scroll');
});


//slick　ケーキの一覧（productセクション）
$(function(){
    $('.autoplay').slick({
        dots: true,
        infinite: false,
        speed: 300,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {slidesToShow: 3,slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1240,
                    settings: {slidesToShow: 2,slidesToScroll: 1,
                }
            },
            {
                breakpoint: 786,
                settings: {slidesToShow: 1,slidesToScroll: 1
                }
            },
        ]
    })
})


//menu.htmlのタグの切り替え
$(function() {
    $('.menu_tag').on('click', function() {
    $('.menu_tag').removeClass('active');
    $(this).addClass('active');

    const target = $(this).data('target');
    $('.menu_content').removeClass('active');
    $('.content-' + target).addClass('active');
    });
});

document.querySelector('.stick_top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズに上に戻る
});
