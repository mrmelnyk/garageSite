const slider = document.querySelector('.slider')
let isDown = false;
let startX;
let scrollLeft;

//Slider for the main landing page.
  slider.addEventListener('mousedown', mover);

  function mover(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
  
  //Showroom images for the cars page

  const showroom = document.querySelector('.showpic');
  let zoomed = false;
  
    showroom.addEventListener('click', () => {
      zoomed = true;
      showroom.classList.add('zoom');
      console.log('this is actually running!')
    });

    showroom.addEventListener('click', (a) => {
      a.preventDefault();
      zoomed = false;
      showroom.classList.remove('zoom');
    });

  
  
