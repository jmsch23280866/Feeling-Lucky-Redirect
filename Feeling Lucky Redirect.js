// ==UserScript==
// @name         Google 搜尋直接跳轉至目標網頁
// @namespace    https://github.com/jmsch23280866/
// @version      1.0
// @description  此腳本用於刪除前綴https://www.google.com/url?q= 並直接導向目標網址。(此腳本由ChatGPT協助撰寫)
// @author       特務E04
// @match        *://*.google.*
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 檢查當前網址是否包含指定的前段
    if (window.location.href.includes("/url?q=")) {
        // 提取目標網址，去除前綴部分
        var url = window.location.href.split("/url?q=")[1];
        
        // 移除所有 '&' 後的部分，僅保留目標網址
        if (url.includes("&")) {
            url = url.split("&")[0];
        }

        // 解碼網址並進行跳轉
        window.location.replace(decodeURIComponent(url));
    }

    // 處理頁面中的所有鏈接，去除前綴並清理參數
    document.querySelectorAll('a[href*="/url?q="]').forEach(function(link) {
        var originalUrl = link.href.split("/url?q=")[1];

        if (originalUrl.includes("&")) {
            originalUrl = originalUrl.split("&")[0];
        }

        link.href = decodeURIComponent(originalUrl);
    });
})();
