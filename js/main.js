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



// go to top btn 
const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

