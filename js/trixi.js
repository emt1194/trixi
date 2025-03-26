function toggleFaq(button) {
  const allFaqs = document.querySelectorAll('.faq-answer');
  const allIcons = document.querySelectorAll('.faq-question svg');
  const content = button.nextElementSibling;
  const icon = button.querySelector('svg');
  // First, close all toggles
  allFaqs.forEach(faq => {
    faq.style.maxHeight = "0px";
  });
  allIcons.forEach(svg => {
    svg.classList.remove('rotate-180');
  });
  // Then toggle the clicked one if it was closed
  if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add('rotate-180');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuToggle || !mobileMenu) {
    console.warn("Menu toggle or mobile menu element not found.");
    return;
  }

  // Toggle menu visibility
  const toggleMenu = (event) => {
    event.stopPropagation();
    mobileMenu.classList.toggle("hidden");
  };

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      mobileMenu.classList.add("hidden");
    }
  };

  // Bind events
  menuToggle.addEventListener("click", toggleMenu);
  document.addEventListener("click", handleClickOutside);
});



const copyBox = document.getElementById('copyBox');
  copyBox.addEventListener('click', () => {
    const address = "BE7o6vC8c7yXbXYodksospGs6g58SFa68ziUHoMg733v";
    navigator.clipboard.writeText(address).then(() => {
      copyBox.innerText = "Copied!";
      setTimeout(() => {
        copyBox.innerText = "CA:" + address;
      }, 2000);
    });
  });

const toTopBtn = document.getElementById('toTopBtn');
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
});

const blobs = document.querySelectorAll('.blob');
  const parallaxFactors = [];

  blobs.forEach((blob, i) => {
    // Random position around the screen
    const x = Math.random() * 100 - 50; // -50% to +50%
    const y = Math.random() * 100 - 50; // -50% to +50%
    blob.style.left = `${x}vw`;
    blob.style.top = `${y}vh`;

    // Store a custom parallax intensity
    const factor = 0.02 + Math.random() * 0.03;
    parallaxFactors.push(factor);
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blobs.forEach((blob, i) => {
      const factor = parallaxFactors[i];
      blob.style.transform = `translateY(${scrollY * factor}px) scale(1)`;
    });
  });

const video = document.getElementById('heroVideo');
  const fadeDuration = 1; // in seconds

  let hasFaded = false;

  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;

    const timeLeft = video.duration - video.currentTime;

    if (timeLeft <= fadeDuration && !hasFaded) {
      video.classList.add('fade-out');
      hasFaded = true;
    }

    // Reset fade when loop restarts
    if (video.currentTime < 0.1 && hasFaded) {
      video.classList.remove('fade-out');
      hasFaded = false;
    }
  });

