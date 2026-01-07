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


// svの写真スライダー
{
    const swiper = new Swiper(".swiper", {
    loop: true, 
    speed: 6000, // 6秒かけて次のスライド
    allowTouchMove: false, // ユーザーの操作を無効化
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    // 表示枚数の設定
    slidesPerView: 4.5, // スマホでは1.5枚見せる
    spaceBetween: 10,   // 写真同士の隙間
    
    // 1024px以上のときの設定
    breakpoints: {
        1024: {
        slidesPerView: 3, 
        spaceBetween: 20,
        },
    },
    });
}

//voice　スライダー
{
  const swiperVoice = new Swiper('.voice_base', {
        loop: true, 
        slidesPerView: 1, 
        spaceBetween: 20, 
        
        // ページネーション
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // 矢印
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // PC版レスポンシブ
        breakpoints: {
            769: {
            slidesPerView: 2, // 769px以上では2枚出す
            centeredSlides: false,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 3, // 1024px以上では3枚出す
            centeredSlides: false, 
            spaceBetween: 40,
            },
            1440: {
            slidesPerView: 4, // 1440px以上では4枚出す
            centeredSlides: false,
            spaceBetween: 40,
            }
        }
    });
}

//studio スライダー　スマホのみ   
$(document).ready(function(){
  $('.slick-studio').slick({
    rtl: true,
    autoplay:true,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,         // 矢印を有効化
    prevArrow: '.studio_prev', // HTMLにある自作ボタンを指定
    nextArrow: '.studio_next',
    dots: true,           // ドットナビが必要なら
    responsive: [
      {
        breakpoint: 768,  // 768px以上のデスクトップ設定
        settings: 'unslick'
        }
      
    ]
  });
});



//faqのアコーディオン
$(function() {
    $('.faq_inner').on('click', function() {
        $(this).find('.faq_answer').slideToggle();
        // クラスを切り替えてアイコン（＋/ー）の表示を制御
        $(this).toggleClass('open');
    });
});
