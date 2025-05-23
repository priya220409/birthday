// Generate floating hearts
const heartContainer = document.querySelector('.heart-container');

function createHeart() {
  const heart = document.createElement('img');
  heart.src = './asset/images/heartss.png'; // Relative path to image
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  heart.classList.add('heart');
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
