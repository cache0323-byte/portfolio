'use strict';

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
