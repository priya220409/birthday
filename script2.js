function showSurprise() {
    document.getElementById("popup").style.display = "block";
  }
  function openPage() {
  // Change the URL below to wherever you want to go
  window.location.href = "birthday.html";
}

  
  function hideSurprise() {
    document.getElementById("popup").style.display = "none";
  }
  
  // Random floating image positions
  window.onload = () => {
    const imgs = document.querySelectorAll('.float-img');
    imgs.forEach((img) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 8 + Math.random() * 5;
      img.style.left = `${left}%`;
      img.style.animationDelay = `${delay}s`;
      img.style.animationDuration = `${duration}s`;
    });
  };
  