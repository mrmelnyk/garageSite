const showroom = document.querySelector('.showpic');
let zoomed = false;

  showroom.addEventListener('click', (e) => {
    if(!zoomed) return;
    e.preventDefault();
    showroom.classList.remove('zoom');
    zoomed = false;
  });

  showroom.addEventListener('click', () => {
    showroom.classList.add('zoom');
    zoomed = true;
  });
