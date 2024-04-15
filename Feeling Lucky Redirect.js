// ==UserScript==
// @name         Google 跳轉直接連結
// @namespace    https://github.com/jmsch23280866/
// @version      0.2
// @description  Google 好手氣直接跳轉網頁
// @author       Agent E04
// @match        *://www.google.com/url?q=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 檢查當前網址是否包含指定的前段
    if (window.location.href.startsWith("https://www.google.com/url?q=")) {
        // 將指定前段刪去並跳轉至剩餘的部分
        var url = window.location.href.replace("https://www.google.com/url?q=", "");
        window.location.href = decodeURIComponent(url); // 解碼網址中的特殊字符
    }
})();
