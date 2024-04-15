// ==UserScript==
// @name         Google 好手氣直接跳轉至目標網頁
// @namespace    https://github.com/jmsch23280866/
// @version      0.6
// @description  此腳本用於刪除前綴https://www.google.com/url?q=
// @author       特務E04
// @match        *://www.google.com/url?q=*
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 檢查當前網址是否包含指定的前段
    if (window.location.href.startsWith("https://www.google.com/url?q=")) {
        // 將指定前段刪去並跳轉至剩餘的部分
        var url = window.location.href.replace("https://www.google.com/url?q=", "");
        window.location.replace(decodeURIComponent(url)); // 解碼網址中的特殊字符並使用 replace() 方法進行跳轉
    }
})();
