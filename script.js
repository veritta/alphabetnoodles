function onClick(e) {
  const target = e.target;

  // open poem
  const poemContainer = target.closest('.poem-container');
  if (poemContainer != null) {
    const poemLightbox = poemContainer.querySelector('.poem-lightbox');
    const poemLightboxOverlay = poemContainer.querySelector('.poem-lightbox-overlay');
    poemLightbox.classList.add('open');
    poemLightboxOverlay.classList.add('open');
  }

  // close poem by clicking close button
  const closeButton = target.closest('.close-button');
  if (closeButton != null) {
    const poemLightbox = closeButton.closest('.poem-lightbox');
    const poemLightboxOverlay = closeButton.closest('.poem-lightbox-overlay');
    poemLightbox.classList.remove('open');
    poemLightboxOverlay.classList.remove('open');
  }

  // close poem by clicking overlay
  const overlay = target.closest('.poem-lightbox-overlay');
  if (overlay != null) {
    overlay.classList.remove('open');
    const poemLightbox = overlay.querySelector('.poem-lightbox');
    poemLightbox.classList.remove('open');
  }
}

document.addEventListener('click', onClick);
