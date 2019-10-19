// calls function onClick
function onClick(e) {
   // defines variable 'target' as the target property of whatever was clicked (e)
  const target = e.target;
  // defines poemContainer as closest element to e that has class name 'poem-container'
  const poemContainer = target.closest('.poem-container');
  // if there IS closest external element (i.e. not null)
  // OPEN POEM
  if (poemContainer != null) {
    // defines poemLightbox as the element inside poemContainer that has class 'poem-lightbox'
    const poemLightbox = poemContainer.querySelector('.poem-lightbox');
    // defines poemLightboxOverlay as element inside poemContainer that has class 'poem-lightbox-ovelray'
    const poemLightboxOverlay = poemContainer.querySelector('.poem-lightbox-overlay');
    // adds class 'open' to poemLightbox
    poemLightbox.classList.add('open');
    // adds class 'open' to poemLightboxOverlay
    poemLightboxOverlay.classList.add('open');
  }
  // CLOSE POEM
  // defines closeButton as element closest to target[property of whatever was clicked] with class name 'close-button'
  const closeButton = target.closest ('.close-button');
  // if there IS a closest external element with class 'close-button'
  if (closeButton != null) {
    // defines poemLightbox as closest element to closeButton with class poem-lightbox
    const poemLightbox = closeButton.closest('.poem-lightbox');
    const poemLightboxOverlay = closeButton.closest('.poem-lightbox-overlay');
    // removes class name 'open'
    poemLightbox.classList.remove('open');
    poemLightboxOverlay.classList.remove('open');
  }
}

document.addEventListener('click', onClick);
