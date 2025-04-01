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

  // Close menu when a link inside it is clicked
  const closeMenuOnLinkClick = () => {
    mobileMenu.classList.add("hidden");
  };

  mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", closeMenuOnLinkClick);
  });

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

  window.addEventListener('scroll', () => {
    const glassBar = document.getElementById('glassBar');
    if (window.scrollY > 100) {
      glassBar.classList.add('visible');
      glassBar.classList.remove('hidden');
    } else {
      glassBar.classList.remove('visible');
      glassBar.classList.add('hidden');
    }
  });
  
  const tabs = document.querySelectorAll(".tab-btn");
  const tabContent = document.getElementById("tabContent");
  
  const tabTexts = [
"Cut through the noise on X/Twitter with Trixi’s real-time feed tracking. Our analyzer surfaces trending tokens, influential tweets, and scans each account for trustworthiness, linked accounts, and dozens of other variables, giving you the heads up.",

  // Social Media Scan
  "We monitor X/Twitter, Telegram, and shortly, Discord, Reddit, 4Chan, and more — scanning thousands of messages for unusal activity, coordinated raids, KOL mentions, and early signs of market momentum. If it’s being talked about, you’ll know about it first.",

  // Volume Bot
  "Trixi’s Volume Bot is like your token’s built-in hype crew — casually buying and selling on repeat to make your chart look alive (without messing with the price). It boosts volume so you rank higher on platforms like DexScreener. More eyeballs, more clout, more chances someone apes in.",

  // Username Analysis
  "Trixi keeps tabs on usernames across socials — spotting sudden name changes that could signal a narrative shift, stealth marketing, or new affiliations. When someone switches it up, you’ll be the first to know.",

  // Trading Interface
  "A lightweight, ultra-fast trading UI connected to the alpha. Seamlessly bridge analysis and execution — buy, sell, or set alerts from the same dashboard where you’re tracking sentiment, volume, and social signals.",

  // Sentiment Analysis
  "Trixi quietly slips into Discords, Telegram groups, and other communities to listen in on the vibe. She picks up on mood shifts, emerging hype, and growing concerns — so you know what the crowd’s feeling before the charts react."

  ];
  
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("noclick-trixi")) return; // 🔒 skip click
  
      const scrollY = window.scrollY;
  
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
  
      const index = parseInt(btn.getAttribute("data-tab"));
      tabContent.innerHTML = `<p>${tabTexts[index]}</p>`;
  
      window.scrollTo({ top: scrollY });
    });
  });
  
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-in-out',
  });

  