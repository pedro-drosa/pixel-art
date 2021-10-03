let selectedColor = 'rgb(0,0,0)';
const clearBtnEl = document.querySelector('button[data-clear]');

clearBtnEl?.addEventListener('click', clearAll);

function createPixelBoard(size: number, tableEl: string): void {
  const pixelBoardEl = document.querySelector(tableEl);

  for (let i = 0; i < size; i++) {
    const trEl = document.createElement('tr');
    pixelBoardEl?.appendChild(trEl);
    for (let i = 0; i < size; i++) {
      const tdEl = document.createElement('td');
      tdEl.classList.add('pixel');
      trEl.appendChild(tdEl);
    }
  }

  document.querySelectorAll('.pixel').forEach((pixel: any) => {
    pixel.addEventListener('click', toPaint);
    pixel.addEventListener('dblclick',toClean);
  });
}

function createColorPallet(colors: string[], tableEl:string):void {
  const colorPaletteEl = document.querySelector(tableEl);
  const trEl = document.createElement('tr');
  colorPaletteEl?.appendChild(trEl);

  colors.forEach((color) => {
    const tdEl = document.createElement('td');
    tdEl.classList.add('color');
    tdEl.setAttribute('data-color', color);
    tdEl.style.backgroundColor = color;
    trEl.appendChild(tdEl);
  });

  document.querySelectorAll('.color').forEach((color: any) => color.addEventListener('click', selectColor))
}

type selectColor = { target: { getAttribute:(selector: string) => string} }

function selectColor(event: selectColor): void {
  selectedColor = event.target.getAttribute('data-color');
}

type ToPaint = { target: { style: { backgroundColor: string } } }

function toPaint(event: ToPaint): void {
  event.target.style.backgroundColor = selectedColor;
}

type ToClean = { target: { style: {backgroundColor: string} } }

function toClean(event: ToClean): void {
  event.target.style.backgroundColor = document.body.style.backgroundColor;
  selectedColor = 'rgb(0,0,0)';
}

function clearAll(): void {
  document.querySelectorAll('.pixel').forEach(pixel => {
    pixel.removeAttribute('style')
  });
}

createPixelBoard(5, '#pixel-board');
createColorPallet(['rgb(0,0,0)','rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)'],'#color-palette')
