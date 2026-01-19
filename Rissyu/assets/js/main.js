'use strict';

document.addEventListener('DOMContentLoaded', function () {
    
  
  // フェードイン
  // .fade-in と .js-scroll-trigger 両方を対象にする
  const fadeElements = document.querySelectorAll('.fade-in, .js-scroll-trigger');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
        // 一度表示されたら監視をやめる（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  }, {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    });
    
    fadeElements.forEach(el => observer.observe(el));
    
    //  ハンバーガーメニュー
    const menuBtn = document.querySelector('.menu_btn');
    const nav = document.querySelector('.nav');
    const closeBtns = document.querySelectorAll('.nav_btn, .nav_item a, .nav_btnClose');
    
    if (menuBtn && nav) {
      // 開く
      menuBtn.addEventListener('click', () => {
        nav.classList.add('active');
      });
      
      // 閉じる
      closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
  });
  //  Splide（お客様の声スライダー）
const voiceSlider = document.querySelector('#voice-carousel');
if (voiceSlider) {
    new Splide('#voice-carousel', {
        type: 'loop',
        perPage: 3,  // PC表示は3枚
        gap: '30px',
        autoplay: true,
        interval: 5000,  // 5秒に変更（読む時間を確保）
        speed: 800,  // スライド速度を800msに（デフォルトは400ms）
        pauseOnHover: true,  // ホバー時に一時停止
        pauseOnFocus: true,  // フォーカス時に一時停止
        arrows: true,
        pagination: true,
        
        breakpoints: {
            1023: {
                perPage: 1,  // モバイルは1枚
                gap: '0px',
                interval: 4000,  // モバイルは4秒
                speed: 600,
                arrows: true,
                pagination: true,
            }
        }
    }).mount();
}