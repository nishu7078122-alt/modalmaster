AOS.init({ duration: 1200 });

// Modal open/close
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('open');
  gsap.fromTo(
    modal.querySelector('.modal-content'),
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
  );
}

function closeModal(id) {
  const modal = document.getElementById(id);
  gsap.to(modal.querySelector('.modal-content'), {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      modal.classList.remove('open');
    }
  });
}
// 🌿 Open new tab and close it with ESC
function openInNewTab(url) {
  const newWindow = window.open(url, '_blank');
  if (newWindow) {
    // Detect ESC key in the newly opened tab
    newWindow.onload = () => {
      newWindow.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          newWindow.close();
        }
      });
    };
  } else {
    alert("Popup blocked! Please allow popups for this site.");
  }
}
// 🌟 Star Pop-up Animation
function showStars(x, y) {
  for (let i = 0; i < 10; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = x + Math.random() * 60 - 30 + 'px';
    star.style.top = y + Math.random() * 60 - 30 + 'px';
    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000);
  }
}

// ✨ Attach star effect to all Explore buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    showStars(x, y);
  });
});


// 🍃 Emoji Falling Leaves Animation
const leavesContainer = document.querySelector('.leaves');
const leafCount = 20; // number of falling emojis
const emojis = ["🍃"]; // variation for realism

for (let i = 0; i < leafCount; i++) {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
  // random horizontal position and size
  leaf.style.left = Math.random() * 100 + 'vw';
  leaf.style.fontSize = 1 + Math.random() * 2 + 'rem';
  
  // random animation timing
  leaf.style.animationDuration = (6 + Math.random() * 6) + 's';
  leaf.style.animationDelay = Math.random() * 5 + 's';
  
  leavesContainer.appendChild(leaf);
}
