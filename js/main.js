// Sidebar functionality
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');
// Open sidebar when menu icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});
// Close sidebar when close button is clicked
sidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// typing effct start 
const typingTexts = [
  "Fron-end Web Developer",
  "Quick Learner.",
  "Web Designer",
  "Freeleancer!"
];
const typingSpeed = 100; // Speed of typing each character
const erasingSpeed = 50; // Speed of erasing each character
const delayBetweenTexts = 1500; // Delay between switching texts
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingTextElement = document.getElementById("typingText");

function typeText() {
  const currentText = typingTexts[currentTextIndex];
  
  if (!isDeleting) {
    // Typing characters
    typingTextElement.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentText.length) {
      // Pause before deleting
      isDeleting = true;
      setTimeout(typeText, delayBetweenTexts);
    } else {
      setTimeout(typeText, typingSpeed);
    }
  } else {
    // Deleting characters
    typingTextElement.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    
    if (currentCharIndex === 0) {
      // Switch to next text
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(typeText, erasingSpeed);
    }
  }
}
// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
  typeText();
});
// typing effct end 

// go to top btn 
const goTopBtn = document.getElementById("goTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

