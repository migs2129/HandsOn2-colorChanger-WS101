//Script for the night mode features

let nightSwitch = true; //acts like a switch

turnOnOff.addEventListener("click", nightMode)

//Function that adds dark mode
function nightMode(){
if(nightSwitch === true){
    body.style.color = "#fff";
    body.style.backgroundColor = "#030637";
    document.getElementById("title").style.backgroundColor = "#3C0753";
    turnOnOff.style.backgroundColor = "#030637"
    document.getElementById("box").style.backgroundColor = "#39FF14";
    turnOnOff.innerHTML = "<i class='fa-solid fa-toggle-off'></i>"
    document.querySelector("#togglebtn i").style.color = "white";
    document.getElementById("btnText").innerHTML = "Dark Mode";
    buttonBox.style.border = "1px solid white"
    buttonBox.style.backgroundColor = "#720455";
    buttonBox.style.color = "white";
    nightSwitch = false;
    isDarkMode = true;
    isOn = true;
} else{
    body.style.color = "#000";
    body.style.backgroundColor = "#E0FFFF";
    document.getElementById("title").style.backgroundColor = "cadetblue";
    turnOnOff.style.backgroundColor = "#E0FFFF";
    document.getElementById("box").style.backgroundColor = "green";
    document.querySelector("#togglebtn i").style.color = "black";
    turnOnOff.innerHTML = "<i class='fa-solid fa-toggle-on'></i>"
    document.getElementById("btnText").innerHTML = "Light Mode";
    buttonBox.style.border = "1px solid black"
    buttonBox.style.backgroundColor = "rgb(75, 219, 224)";
    buttonBox.style.color = "black";
    nightSwitch = true;
    isDarkMode = false;
    isOn = true;
    }
}
