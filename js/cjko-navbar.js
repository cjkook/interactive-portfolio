// NAVIGATION BAR
var navBar = "";
var toolbar = "";
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
// console.log('cjko: navbar create ')

// pathing changes for index.html versus subpages
if (page === "index.html" || page === '') {
  navBar = `<div class="dash-nav dash-nav-dark">
<header>
    <a href="#!" class="menu-toggle">
        <i class="fas fa-bars"></i>
    </a>
    <a href="index.html" class="spur-logo"><i class="fas fa-motorcycle"></i> <span>cjko.ok</span></a>
</header>
<nav class="dash-nav-list">
    <a href="index.html" class="dash-nav-item">
        <i class="fas fa-home"></i> Dashboard </a>
    <div class="dash-nav-dropdown ">
        <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
            <i class="fas fa-cube"></i> Themes/Design </a>
        <div class="dash-nav-dropdown-menu">
            <a href="https://cjkook.github.io/02-homework-bootstrap-portfolio/" class="dash-nav-dropdown-item">Coffee Template</a>
        </div>
    </div>
    <div class="dash-nav-dropdown ">
        <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
            <i class="fab fa-js-square"></i> JavaScript </a>
        <div class="dash-nav-dropdown-menu">
            <a href="html/password-gen.html" class="dash-nav-dropdown-item">Password Generator</a>
        </div>
        <div class="dash-nav-dropdown-menu">
            <a href="html/code-quiz.html" class="dash-nav-dropdown-item">Code Quiz</a>
        </div>
        <div class="dash-nav-dropdown-menu">
            <a href="html/day-planner.html" class="dash-nav-dropdown-item">Day Planner</a>
        </div>
        <div class="dash-nav-dropdown-menu">
            <a href="html/weather-dashboard.html" class="dash-nav-dropdown-item">Weather Dash</a>
        </div>
    </div>
    
</nav>
</div>`;

  toolbar = `<a href="#!" class="menu-toggle">
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
} else { 
    // ALL OTHER SUBPAGES 
    navBar = `<div class="dash-nav dash-nav-dark">
<header>
    <a href="#!" class="menu-toggle">
        <i class="fas fa-bars"></i>
    </a>
    <a href="../index.html" class="spur-logo"><i class="fas fa-motorcycle"></i> <span>cjko.ok</span></a>
</header>
<nav class="dash-nav-list">
    <a href="../index.html" class="dash-nav-item">
        <i class="fas fa-home"></i> Dashboard </a>
    <div class="dash-nav-dropdown ">
        <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
            <i class="fas fa-cube"></i> Themes/Design </a>
        <div class="dash-nav-dropdown-menu">
            <a href="https://cjkook.github.io/02-homework-bootstrap-portfolio/" class="dash-nav-dropdown-item">Coffee Template</a>
        </div>
    </div>
    <div class="dash-nav-dropdown ">
        <a href="#!" class="dash-nav-item dash-nav-dropdown-toggle">
            <i class="fab fa-js-square"></i> JavaScript </a>
        <div class="dash-nav-dropdown-menu">
            <a href="password-gen.html" class="dash-nav-dropdown-item">Password Generator</a>
        </div>
        <div class="dash-nav-dropdown-menu">
            <a href="code-quiz.html" class="dash-nav-dropdown-item">Code Quiz</a>
        </div>
        <div class="dash-nav-dropdown-menu">
            <a href="day-planner.html" class="dash-nav-dropdown-item">Day Planner</a>
        </div>
        <div class="dash-nav-dropdown-menu">
            <a href="weather-dashboard.html" class="dash-nav-dropdown-item">Weather Dash</a>
        </div>
    </div>
    
</nav>
</div>`;

toolbar = `<a href="#!" class="menu-toggle">
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

}

// populate elements
document.getElementById("commonNavbar").innerHTML = navBar;
document.getElementById("commonToolbar").innerHTML = toolbar;

// ! about nav item
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
