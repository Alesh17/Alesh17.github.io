webpackJsonp([2],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(1);

__webpack_require__(14);

__webpack_require__(2);

// Импорт скриптов плагина justifiedGallery

// Функция отрабатывает, как только DOM полностью загрузился
// Импорт стилей плагина justifiedGallery

$(function () {

    //---------------- Plugins (Использование плагинов) -----------------
    //------------------------------------------

    // This is a JQuery plugin that allows you to create an high quality justified gallery of images.
    // Это плагин JQuery, который позволяет создавать высококачественную галерею изображений
    // Ссылка на плагин - http://miromannino.github.io/Justified-Gallery/

    // Использование плагина justifiedGallery с заранее определенными настройками
    $('#portfolio-grid').justifiedGallery({
        rowHeight: 200, // Предпочтительная высота строк с изображениями
        margins: 20, // Отступы между изображениями
        lastRow: 'justify' // Изображение в последней строке растянуть на всю ширину контейнера
    });

    //------------------------------------------
    //------------------------------------------
}); // Импорт стилей для страницы portfolio.html
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[13]);