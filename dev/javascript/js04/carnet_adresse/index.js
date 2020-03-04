let toggle = document.getElementById('toolbar-toggle');
let toolbar = document.getElementById('toolbar');

function addEventListenerToToggle() {
  toggle.addEventListener('click', () => {
    if(getComputedStyle(toolbar).display != 'none') {
      return toolbar.style.display = 'none';
    }

    toolbar.style.display = 'block';
  });
}
