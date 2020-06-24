// NAVIGATION BAR

var path = window.location.pathname;
var page = path.split("/").pop();
// console.log( page );
// console.log('cjko: navbar create ')
var navBar = `<div class="dash-nav dash-nav-dark">
<header>
    <a href="#!" class="menu-toggle">
        <i class="fas fa-bars"></i>
    </a>
    <a href="index.html" class="spur-logo"><i class="fas fa-bolt"></i> <span>cjko.ok</span></a>
</header>
<nav class="dash-nav-list">
    <a href="index.html" class="dash-nav-item">
        <i class="fas fa-home"></i> Dashboard </a>
    <div class="dash-nav-dropdown ">
        <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
            <i class="fas fa-cube"></i> Homework </a>
        <div class="dash-nav-dropdown-menu">
            <a href="#" class="dash-nav-dropdown-item">Refactor</a>
            <a href="#" class="dash-nav-dropdown-item">Bootstrap</a>
            <a href="password-gen.html" class="dash-nav-dropdown-item">Password Generator</a>
        </div>
    </div>
    
</nav>
</div>`;

var toolbar = `<a href="#!" class="menu-toggle">
        <i class="fas fa-bars"></i>
    </a>
    <!-- <a href="#!" class="searchbox-toggle">
        <i class="fas fa-search"></i>
    </a> -->
    <form class="searchbox" action="#!">
        <a href="#!" class="searchbox-toggle"> <i class="fas fa-arrow-left"></i> </a>
        <button type="submit" class="searchbox-submit"> <i class="fas fa-search"></i> </button>
        <input type="text" class="searchbox-input" placeholder="type to search">
    </form>
    <div class="tools">
        <!-- <a href="https://github.com/HackerThemes/spur-template" target="_blank" class="tools-item">
            <i class="fab fa-github"></i>
        </a>
        <a href="#!" class="tools-item">
            <i class="fas fa-bell"></i>
            <i class="tools-item-count">4</i>
        </a>
        <div class="dropdown tools-item">
            <a href="#" class="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                <a class="dropdown-item" href="#!">Profile</a>
                <a class="dropdown-item" href="login.html">Logout</a>
            </div>
        </div> -->
    </div>`;
document.getElementById("commonNavbar").innerHTML = navBar;
document.getElementById("commonToolbar").innerHTML = toolbar;

// about nav item
/* <div class="dash-nav-dropdown">
  <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
    <i class="fas fa-info"></i> About{" "}
  </a>
  <div class="dash-nav-dropdown-menu">
    <a
      href="https://github.com/HackerThemes/spur-template"
      target="_blank"
      class="dash-nav-dropdown-item"
    >
      GitHub
    </a>
    <a
      href="http://hackerthemes.com"
      target="_blank"
      class="dash-nav-dropdown-item"
    >
      HackerThemes
    </a>
  </div>
</div>; */
