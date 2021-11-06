// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("navBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "ak-bar" + "ak-card" + "ak-animate-top" + "ak-white";
    } else {
        navbar.className = navbar.className.replace(" ak-card ak-animate-top ak-white", "");
    }
}

// Used to toggle the menu when you click on the menu hamburger button
function toggleFunction() {
        var x = document.getElementById("navDrop");
        if (x.className.indexOf("ak-show") == -1) {
        x.className += "ak-show";
        } else {
        x.className = x.className.replace("ak-show", "");
        }
}
