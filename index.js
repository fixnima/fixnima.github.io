function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function openNav() {
    document.getElementByClass("mobile-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementByClass("mobile-menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }