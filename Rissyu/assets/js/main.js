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
          type   : 'loop',
          perPage: 1,
          autoplay: true,
          interval: 3000, 
          pauseOnHover: false,
          arrows: false,
          
          mediaQuery:'min',
          breakpoints :{
            769:{
            destroy:true,
            pagination:false,
            }
          }
      }).mount();
  }