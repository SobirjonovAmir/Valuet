const aside = document.querySelector('#custom-aside')
let isResizing = false;
let initialWidth = 0;
let initialMouseX = 0;

aside.onmousemove = (event) => {
    const asideRect = aside.getBoundingClientRect();
    const mouseX = event.clientX;
    
  if (asideRect.right - mouseX < 5) {
    aside.style.cursor = 'ew-resize';
    aside.style.borderRight = "3px solid #1288e8"
  } else {
    aside.style.cursor = 'default';
    aside.style.borderRight = "0"
  }
}

aside.onmousedown = (event) => {
  const asideRect = aside.getBoundingClientRect();
  const mouseX = event.clientX;

  if (asideRect.right - mouseX < 5) {
    isResizing = true;
    aside.style.cursor = 'ew-resize';
    aside.style.borderRight = "3px solid #1288e8"
    initialWidth = aside.offsetWidth;
    initialMouseX = mouseX;
  }
}

document.onmousemove = (event) => {
  if (isResizing) {
    const newWidth = initialWidth + (event.clientX - initialMouseX);
    aside.style.width = `${Math.min(Math.max(newWidth, 255), 600)}px`;
    aside.style.borderRight = "3px solid #1288e8"
  }
}

document.onmouseup = () => {
  isResizing = false;
  aside.style.cursor = 'default';
  aside.style.borderRight = "0"
}
