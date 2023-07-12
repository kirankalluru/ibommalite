function myFunction() {
    const menuBar = document.getElementsByClassName('menu-options')[0];
  
    if (menuBar.style.display === 'none') {
      menuBar.style.display = 'flex';
      
    } else {
      menuBar.style.display = 'none';
    }
  }
