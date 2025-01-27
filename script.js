// JavaScript to reveal the main content
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('initial-overlay');
    const mainContent = document.getElementById('main-content');
  
    // Ensure click works anywhere in the overlay
    overlay.addEventListener('click', () => {
        console.log('Overlay clicked');
        overlay.style.display = 'none';
        mainContent.classList.remove('hidden');
      });
      
  });
  

 document.addEventListener("DOMContentLoaded", () => {
  const floatingText = document.getElementById("floating-text");
  let xPos = window.innerWidth / 2; // Initial X position
  let yPos = window.innerHeight / 2; // Initial Y position
  let xSpeed = 2; // Horizontal speed
  let ySpeed = 2; // Vertical speed

  // Custom margins for each side
  const margins = {
    top: 100,
    right: 30,
    bottom: 60,
    left: 220,
  };

  const moveFloatingText = () => {
    // Update position
    xPos += xSpeed;
    yPos += ySpeed;

    // Check for collision with window edges
    if (xPos <= margins.left || xPos + floatingText.offsetWidth >= window.innerWidth - margins.right) {
      xSpeed *= -1; // Reverse X direction
    }
    if (yPos <= margins.top || yPos + floatingText.offsetHeight >= window.innerHeight - margins.bottom) {
      ySpeed *= -1; // Reverse Y direction
    }

    // Apply new position
    floatingText.style.left = `${xPos}px`;
    floatingText.style.top = `${yPos}px`;

    requestAnimationFrame(moveFloatingText); // Continue animation
  };

  moveFloatingText(); // Start the animation
});

  
  



document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.remove("lazy"); // Remove lazy class after loading
                observer.unobserve(img); // Stop observing after loading
            }
        });
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});
