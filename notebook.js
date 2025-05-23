const pages = [
  {
    img: "./asset/images/haji2.jpg",
    quote: "Every page of my life is better with you 💖"
  },
  {
    img: "./asset/images/haji3.jpg",
    quote: "Your smile is the sunshine of my soul ☀️"
  },
  {
    img: "./asset/images/haji4.jpg",
    quote: "With you, even silence feels special 💞"
  },
  {
    img: "./asset/images/haji1.jpg",
    quote: "I am lucky to love someone like you forever 💌"
  }
];

let index = 0;
const pageDiv = document.getElementById("page");

function updatePage() {
  const page = pages[index];
  pageDiv.innerHTML = `
    <img src="${page.img}" alt="Love" class="photo">
    <p class="quote">${page.quote}</p>
  `;
  index = (index + 1) % pages.length;
}

setInterval(updatePage, 2000);
const explosionContainer = document.getElementById("explosionContainer");

function showExplosion() {
  const explosion = document.createElement("img");
  explosion.src = "images/explosion.gif"; // Use your actual path
  explosion.className = "explosion";

  explosionContainer.appendChild(explosion);

  setTimeout(() => {
    explosion.remove();
  }, 600); // Matches animation time
}

// Show explosion every second
setInterval(showExplosion, 1000);