'use strict';
//共通のもの
//画像をふわっとだす
$(window).on('scroll load', function() {
  $('.fade-in').each(function() {
    var target = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > target - windowHeight + 100) {
      $(this).addClass('is-active');
    }
  });
});

// 共通のスクロール発火設定
const scrollObserve= () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, { 
    threshold: 0.2, // 20%見えたら発火
    rootMargin: "0px 0px -50px 0px" // 画面下から50px手前で発火（微調整用）
  });

  // 修正箇所：クラス名なのでドットが必要
  const targets = document.querySelectorAll('.js-scroll-trigger');
  targets.forEach(el => observer.observe(el));
};

// 読み込み完了時に実行
window.addEventListener('load', scrollObserve);

// ハンバーガーメニュー
$(function () {
  // 開くボタン
  $('.menu_btn').on('click', function () {
    $('.nav').addClass('active');
  });

  // 閉じるボタン（×ボタン、リンク、背景など）
  $('.nav_btn, .nav_item a, .nav_btnClose').on('click', function () {
    $('.nav').removeClass('active');
  });
});


  // VOICE（スマホだけ slick）
//   const $slider = $('.autoplay');

//   function setVoiceSlider() {
//     const isMobile = window.matchMedia('(max-width: 600px)').matches;

//     if (isMobile) {
//       // スマホ: slick未初期化なら起動
//       if ($.voice_slider.hasClass('slick-initialized')) {
//         $('.voice_slider').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: true,
//           autoplaySpeed: 3000,
//           dots: true,
//           infinte:true,
//           arrows: true,
//           adaptiveHeight: true
//         });
//       });
//     }else {
//       // PC: slickが動いてたら解除
//       if (.voice_slider.hasClass('slick-initialized')) {
//         .voice_slider.slick('unslick');
//       }
//     }
//   setVoiceSlider();
//   $(window).on('resize orientationchange', setVoiceSlider);
// });

// $(document).ready(function(){
//     $('.voice_slider').slick({
//     // autoplay: true,      // 自動再生
//     // autoplaySpeed: 3000, // スライドの切り替え時間（ms）
//     // dots: true,          // 下にドット（ページ送り）を表示
//     // arrows: true,        // 左右の矢印を表示
//     // infinite: true,      // 無限ループ
//     // slidesToShow: 1,     // 表示するスライド数
//     // slidesToScroll: 1    // スクロールするスライド数
//     });
// });

