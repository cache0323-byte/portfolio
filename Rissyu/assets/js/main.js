'use strict';

$(function () {
  // ハンバーガーメニュー
  $('.menu').on('click', function () {
    $('.nav').toggleClass('active');
  });

  $('.nav_btn, .nav_item a, .nav_btnClose').on('click', function () {
    $('.nav').removeClass('active');
  });


  // VOICE（スマホだけ slick）
  var $slider = $('.autoplay');

  function setVoiceSlider() {
    var isMobile = window.matchMedia('(max-width: 600px)').matches;

    if (isMobile) {
      // スマホ: slick未初期化なら起動
      if (!.voice_slider.hasClass('slick-initialized')) {
        $('.voice_slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          infinte:true;
          arrows: true,
          adaptiveHeight: true
        });
      });
});

      }
    } else {
      // PC: slickが動いてたら解除
      if (.voice_slider.hasClass('slick-initialized')) {
        .voice_slider.slick('unslick');
      }
    }
  }

  setVoiceSlider();
  $(window).on('resize orientationchange', setVoiceSlider);
});

$(document).ready(function(){
    $('.voice_slider').slick({
    // autoplay: true,      // 自動再生
    // autoplaySpeed: 3000, // スライドの切り替え時間（ms）
    // dots: true,          // 下にドット（ページ送り）を表示
    // arrows: true,        // 左右の矢印を表示
    // infinite: true,      // 無限ループ
    // slidesToShow: 1,     // 表示するスライド数
    // slidesToScroll: 1    // スクロールするスライド数
    });
});

