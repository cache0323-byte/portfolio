'use strict';

/* 画像をふわっと出す */
{
    const fadeElements = document.querySelectorAll('.fadein');
    // 画面に入ったかどうかを判定する
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // もし要素が画面内に入ったら
        if (entry.isIntersecting) {
        // 「is-animated」というクラスを付与する
        entry.target.classList.add('is-animated');
        }
    });
    }, {
    threshold: 0.2 // 要素が20%見えたら実行
    });

    // すべての「fadein」要素を見張る
    fadeElements.forEach(el => {
    observer.observe(el);
    });
}

// ハンバーガーメニュー
{
    $(function(){
        
        // --- 要素の定義 ---
        const $btn = $('#btn_menu');          
        const $nav = $('.nav_container');     
        const $navLinks = $('.nav_item a');     
        const openClass = 'open';               

        // 1. ハンバーガーアイコンクリック時の動作
        $btn.on('click', function(){
            $nav.toggleClass(openClass);
            $btn.toggleClass(openClass);
        });

        // 2. メニュー内のリンククリック時の動作 (自動で閉じる)
        $navLinks.on('click', function(){
            // 'open' クラスを削除してメニューを閉じる
            $nav.removeClass(openClass);
            $btn.removeClass(openClass);
        });


        // 3. タブ切り替え機能 
        $('.menu_tag').on('click', function() {
            $('.menu_tag').removeClass('active');
            $(this).addClass('active');
          
            const target = $(this).data('target');
            $('.menu_content').removeClass('active');
            $('.content-' + target).addClass('active');
        });
    });
}

//voice　スライダー
$('.slick-voice').slick({
    mobileFirst: true,
    autoplay: false,
    speed: 600,
    cssEase: 'ease-in-out',
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    centerMode: true,   
    centerPadding: '20px',
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '0'
            }
        }
    ]
});

function initSlick() {
    const $slider = $('.slick-studio');

    // 768px未満かつ、まだスライダーが初期化されていない場合のみ実行
    if (window.innerWidth < 768) {
        if (!$slider.hasClass('slick-initialized')) {
            $slider.slick({
                mobileFirst: true,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 500,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                swipe: true,
                draggable: true,
                waitForAnimate: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            });
        }
    }
}

// 1. ページ読み込み時に実行
$(function() {
    initSlick();
});

// 2. 画面サイズが変わった時に実行
$(window).on('resize', function() {
    initSlick();
});

//faqのアコーディオン
$(function() {
    $('.faq_inner').on('click', function() {
        $(this).find('.faq_answer').slideToggle();
        // クラスを切り替えてアイコン（＋/ー）の表示を制御
        $(this).toggleClass('open');
    });
});
