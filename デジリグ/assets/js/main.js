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



  // svの写真スライダー（Slick版）
$(function() {
    $('.slick-sv').slick({
        autoplay: true,
        autoplaySpeed: 0, // 止めずに動かし続ける
        speed: 6000,      // 6秒かけてゆっくり流れる
        cssEase: 'linear', // 流れる動きを滑らか（等速）にする
        slidesToShow: 4.5,
        swipe: false,      // ユーザー操作を無効化（SwiperのallowTouchMove相当）
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});


//voice　スライダー
$('.slick-base').slick({
        infinite: true,
        slidesToShow: 1,
        spaceBetween: 20, // 注: Slick自体にmargin機能はないためCSSで調整が必要
        dots: true,
        appendDots: '.swiper-pagination', // 既存のHTML構造に合わせる場合
        prevArrow: '.slick-button-prev',
        nextArrow: '.slick-button-next',
        responsive: [
            {
                breakpoint: 1440,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 769,
                settings: { slidesToShow: 2 }
            }
        ]
    });

//studio スライダー　スマホのみ   
//   $('.slick-studio').slick({
//     mobileFirst: true,
//     autoplay:true,
//     autoplaySpeed: 3000,
//     speed: 500,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,         // 矢印を有効化
//     // prevArrow: '.studio_prev', // HTMLにある自作ボタンを指定
//     // nextArrow: '.studio_next',
//     dots: true,           // ドットナビが必要なら
//     responsive: [
//       {
//         breakpoint: 768,  // 768px以上のデスクトップ設定
//         settings: 'unslick'
//         }
//     ]
//   });

  $('.slick-studio').slick({
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // スマホでは矢印よりドットの方が操作しやすいため一旦false
    dots: true,    // ページネーションを有効化
    responsive: [
        {
            breakpoint: 768,
            settings: 'unslick' // 768px以上でスライダー解除
        }
    ]
});




//faqのアコーディオン
$(function() {
    $('.faq_inner').on('click', function() {
        $(this).find('.faq_answer').slideToggle();
        // クラスを切り替えてアイコン（＋/ー）の表示を制御
        $(this).toggleClass('open');
    });
});
