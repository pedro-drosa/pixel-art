"use strict";
var selectedColor = 'rgb(0,0,0)';
var clearBtnEl = document.querySelector('button[data-clear]');
clearBtnEl === null || clearBtnEl === void 0 ? void 0 : clearBtnEl.addEventListener('click', clearAll);
function createPixelBoard(size, tableEl) {
    var pixelBoardEl = document.querySelector(tableEl);
    for (var i = 0; i < size; i++) {
        var trEl = document.createElement('tr');
        pixelBoardEl === null || pixelBoardEl === void 0 ? void 0 : pixelBoardEl.appendChild(trEl);
        for (var i_1 = 0; i_1 < size; i_1++) {
            var tdEl = document.createElement('td');
            tdEl.classList.add('pixel');
            trEl.appendChild(tdEl);
        }
    }
    document.querySelectorAll('.pixel').forEach(function (pixel) {
        pixel.addEventListener('click', toPaint);
        pixel.addEventListener('dblclick', toClean);
    });
}
function createColorPallet(colors, tableEl) {
    var colorPaletteEl = document.querySelector(tableEl);
    var trEl = document.createElement('tr');
    colorPaletteEl === null || colorPaletteEl === void 0 ? void 0 : colorPaletteEl.appendChild(trEl);
    colors.forEach(function (color) {
        var tdEl = document.createElement('td');
        tdEl.classList.add('color');
        tdEl.setAttribute('data-color', color);
        tdEl.style.backgroundColor = color;
        trEl.appendChild(tdEl);
    });
    document.querySelectorAll('.color').forEach(function (color) { return color.addEventListener('click', selectColor); });
}
function selectColor(event) {
    selectedColor = event.target.getAttribute('data-color');
}
function toPaint(event) {
    event.target.style.backgroundColor = selectedColor;
}
function toClean(event) {
    event.target.style.backgroundColor = 'rgb(255,255,255)';
    selectedColor = 'rgb(0,0,0)';
}
function clearAll() {
    document.querySelectorAll('.pixel').forEach(function (pixel) {
        pixel.removeAttribute('style');
    });
}
createPixelBoard(5, '#pixel-board');
createColorPallet(['rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'], '#color-palette');
