function removeSelected(id) {
  const buttons = document.querySelectorAll(`#${id}`);
  const arrButtons = Array.from(buttons);
  arrButtons.map((el) => {
    el.removeAttribute('selected');
    el.style.border = `none`;
  });
}

export function addSelected(element, id, colorBorder) {
  element.preventDefault();
  removeSelected(id);
  element.target.setAttribute('selected', '');
  element.target.style.borderBottom = `3px solid ${colorBorder}`;
}
