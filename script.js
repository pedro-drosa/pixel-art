let selectedColor = 'rgb(0,0,0)';
const clearBtnEl = document.querySelector('button[data-clear]').addEventListener('click', clearAll);

function createPixelBoard(size, tableEl) {
  const pixelBoardEl = document.querySelector(tableEl);

  for (let i = 0; i < size; i++) {
    const trEl = document.createElement('tr');
    pixelBoardEl.appendChild(trEl);
    for (let i = 0; i < size; i++) {
      const tdEl = document.createElement('td');
      tdEl.classList.add('pixel');
      trEl.appendChild(tdEl);
    }
  }

  document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.addEventListener('click', toPaint);
    pixel.addEventListener('dblclick',toClean);
  });
}

function createColorPallet(colors, tableEl) {
  const colorPaletteEl = document.querySelector(tableEl);
  const trEl = document.createElement('tr');
  colorPaletteEl.appendChild(trEl);

  colors.forEach((color) => {
    const tdEl = document.createElement('td');
    tdEl.classList.add('color');
    tdEl.setAttribute('data-color', color);
    tdEl.style.backgroundColor = color;
    trEl.appendChild(tdEl);
  });

  document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', selectColor);
  })
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
  document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.removeAttribute('style')
  });
}

createPixelBoard(5, '#pixel-board');
createColorPallet(['rgb(0,0,0)','rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)'],'#color-palette')
