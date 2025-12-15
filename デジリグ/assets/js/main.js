'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // --- 要素の取得 ---
    // メニュー本体 
    const nav = document.querySelector('.nav_conatiner'); 
    // ハンバーガーアイコン (ID: btn_menu)
    const btn = document.getElementById('btn_menu');
    // メニュー内のすべてのリンク/ボタン (クラス: nav_item a)
    const navLinks = document.querySelectorAll('.nav_item a');
    
    // 開閉時に付与するクラス名
    const OPEN_CLASS = 'open'; 
    
    // --- 開閉処理を行う関数 ---
    const toggleMenu = () => {
        // nav要素に 'open' クラスを付け外し
        nav.classList.toggle(OPEN_CLASS);
        // btn要素に 'open' クラスを付け外し
        btn.classList.toggle(OPEN_CLASS);
        
        // オプション: bodyにクラスを付与し、背景固定などの制御を可能にする場合
        // document.body.classList.toggle('no-scroll'); 
    };

    // --- イベントリスナー設定 ---

    // 1. ハンバーガーアイコンクリック時の動作
    if (btn) {
        btn.addEventListener('click', toggleMenu);
    }
    
    // 2. メニュー内のリンククリック時の動作 (自動で閉じる)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 'open' クラスを削除してメニューを閉じる
            nav.classList.remove(OPEN_CLASS);
            btn.classList.remove(OPEN_CLASS);
        });
    });

    // ※ マスクを実装する場合は、#mask要素を取得し、同様にイベントを追加してください。
});

// FVのスクロールダウンアニメーション

// FAQセクションのアコーディオン開閉

// スクロール時のナビゲーション表示制御（オプション）