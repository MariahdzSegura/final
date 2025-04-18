let menuVisible = false;

// Function to show or hide the menu
function toggleMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select() {
    // Hide the menu once an option is selected
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Function that applies animations to the skills
function skillEffect() {
    var skills = document.getElementById("skills");
    var distanceSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanceSkills >= 300) {
        let skillBars = document.getElementsByClassName("progress");
        skillBars[0].classList.add("javascript");
        skillBars[1].classList.add("htmlcss");
        skillBars[2].classList.add("photoshop");
        skillBars[3].classList.add("wordpress");
        skillBars[4].classList.add("drupal");
        skillBars[5].classList.add("communication");
        skillBars[6].classList.add("teamwork");
        skillBars[7].classList.add("creativity");
        skillBars[8].classList.add("dedication");
        skillBars[9].classList.add("project");
    }
}

// Detect scrolling to apply the animation to the skill bars
window.onscroll = function() {
    skillEffect();
}