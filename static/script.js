var about_me = true;
var experience_tab = false;
var portfolio_tab = false;
var contact_me = false;

document.getElementById('about_me').style.display = "block";
document.getElementById('portfolio_tab').style.display = "none";
document.getElementById('contact_me').style.display = "none";
document.getElementById('experience_tab').style.display = "none";
document.getElementById("about_handler").classList.add("active");
document.getElementById("experience_handler").classList.remove("active");
document.getElementById("portfolio_handler").classList.remove("active");
document.getElementById("contact_handler").classList.remove("active");

function aboutMe() {
    showActiveTab('about_me');
    activateHandler('about_handler');
}
function experience() {
    showActiveTab('experience_tab');
    activateHandler('experience_handler');
}
function portfolio() {
    showActiveTab('portfolio_tab');
    activateHandler('portfolio_handler');
}
function contactMe() {
    showActiveTab('contact_me');
    activateHandler('contact_handler');
}



function downloadResume() {
    var path = "resume/SejalHirjiGothi_Resume.pdf";
    var save = document.createElement('a');
    save.href = path;
    save.download = "SejalHirjiGothi_Resume";
    save.target = '_blank';
    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
}

function showActiveTab(tabName) {
    document.getElementById('about_me').style.display = "none";
    document.getElementById('portfolio_tab').style.display = "none";
    document.getElementById('contact_me').style.display = "none";
    document.getElementById('experience_tab').style.display = "none";
    document.getElementById(tabName).style.display = "block";
}

function activateHandler(handlerName){
    document.getElementById("about_handler").classList.remove("active");
document.getElementById("experience_handler").classList.remove("active");
document.getElementById("portfolio_handler").classList.remove("active");
document.getElementById("contact_handler").classList.remove("active");
document.getElementById(handlerName).classList.add("active");
}

