// ==UserScript==
// @name         Google I'm Feeling Lucky Auto Redirect
// @namespace    https://github.com/jmsch23280866/
// @version      0.1
// @description  在 Google 好手氣跳轉頁面自動點擊網址
// @author       Agent E04
// @match        https://www.google.com/url?q=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 在頁面加載後，自動點擊指定的元素
    window.addEventListener('load', function() {
        // 在這裡選擇要點擊的元素，這是一個示例選擇器
        var elementToClick = document.querySelector('body > div.fTk7vd > a:nth-child(1)');
        
        // 如果找到了元素，則進行點擊
        if (elementToClick) {
            elementToClick.click();
        }
    });
})();
