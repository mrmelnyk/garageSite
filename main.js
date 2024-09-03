const slider = document.querySelector('.slider')
let isDown = false;
let startX;
let scrollLeft;

//Slider for the main landing page.
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('moving');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

   
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('moving');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('moving');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
  
  //Showroom images for the cars page

  const showroom = document.querySelectorAll('.showpic');
  let zoomed = false;
  
    showroom.addEventListener('click', (a) => {
      a.preventDefault();
      zoomed = true;
      showroom.classList.add('zoom');
      console.log('this is actually running!');
    });

    showroom.addEventListener('click', (a) => {
      a.preventDefault();
      zoomed = false;
      showroom.classList.remove('zoom');
      console.log('this one runs too!');
    });

  
  
