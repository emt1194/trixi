(function () {
  console.log("✅ Lightbox script loaded");

  const lightbox = document.getElementById('videoLightbox');
  const video = document.getElementById('lightboxVideo');
  const loader = document.getElementById('videoLoader');

  document.querySelectorAll('[data-video]').forEach(code => {
    code.addEventListener('click', () => {
      const videoName = code.getAttribute('data-video');
      const source = `./videos/${videoName}.mov`;

      // Show lightbox + loader first
      loader.classList.remove('hidden');
      lightbox.classList.remove('hidden');

      // Reset video just in case
      video.pause();
      video.removeAttribute('src');
      video.load();

      // Lazy-load source after lightbox is open
      setTimeout(() => {
        video.src = source;
        video.load();

        video.addEventListener('canplay', () => {
          loader.classList.add('hidden');
          video.play();
        }, { once: true });
      }, 100);
    });
  });

  // Dismiss on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      video.pause();
      video.removeAttribute('src');
      video.load();
      lightbox.classList.add('hidden');
      loader.classList.remove('hidden');
    }
  });

  // Click-to-play/pause toggle
  video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
  });
})();
