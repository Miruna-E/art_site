function getRotationAngle(elementId){
  var st = window.getComputedStyle(elementId, null);
  var rotationMatrix = st.getPropertyValue("transform") || "none";
  if (rotationMatrix != "none") {
    //rotation matrix:
    //cos -sin
    //sin cos
    var rotationValues = rotationMatrix.split('(')[1].split(')')[0].split(',');
    var rotationAngle = Math.round(Math.atan2(rotationValues[1],rotationValues[0]) * (180/Math.PI));
    if(rotationAngle < 0){
        rotationAngle += 360;
    }
    return rotationAngle;
  }
  return 0;
}

let wheelSlices = document.getElementById("wheel_of_fortune").getElementsByTagName("li");
let sliceRotation = 0;
for(let slice of wheelSlices){
    slice.style.setProperty("--sliceRotation", sliceRotation); //can then be accessed in css
    sliceRotation += parseFloat(slice.getAttribute("data-percentage"));
}

function enableClosingBannerButtons(){
    let closeBannerButtons = document.getElementsByClassName("close_banner_button");
    for(let button of closeBannerButtons){
        button.addEventListener("click", () => {
            button.parentElement.outerHTML = "";
        });
    }
}

let isMoving = true;

document.getElementById("wheel_of_fortune").addEventListener("click", () => {
    let wheel = document.getElementById("wheel_of_fortune");
    if(!isMoving){
        return;
    }
    if(wheel.className == "rotating_element"){
        //removing the rotating element class would return to wheel to its original position
        wheel.className = "rotating_element paused_element";
        isMoving = false;
        //removing the wheel, it's one use only
        setTimeout(() => {
            document.getElementById("wheel_figure").outerHTML = "";
        }, 4000);
    }

    //wheel moves in opposite of clockwise => wheelSlices.length - everything else
    //slices indexed from 0 => -1
    //getRotationAngle/36 => 10 slices, each 10% of the circle => 360degrees/10 gives the slice's number (not scalable, sadly)
    let winnerIndex = wheelSlices.length - 1 - Math.floor(getRotationAngle(document.getElementById("wheel_of_fortune"))/36);
    let winner = document.getElementById("wheel_of_fortune").getElementsByTagName("li")[winnerIndex];

    //adding the banner, showing the winner:
    // <div id="wheel_of_fortune_announcement" class="banner center">
    //     <p>Congratulations! You won (winner)</p>
    //     <span class="close_banner_button">X</span>
    // </div> 

    let winnerMessage = document.createElement("p");
    winnerMessage.innerText = "Congratulations! You won " +  winner.innerText + "!";
    console.log(winnerMessage.innerText);

    let winnerCloseBannerButton = document.createElement("span");
    winnerCloseBannerButton.className = "close_banner_button";
    winnerCloseBannerButton.innerText = "X";

    let winnerAnnouncement = document.createElement("div");
    winnerAnnouncement.setAttribute("id", "wheel_of_fortune_announcement");
    winnerAnnouncement.classList.add("banner", "center");
    winnerAnnouncement.appendChild(winnerMessage);
    winnerAnnouncement.appendChild(winnerCloseBannerButton);

    let winnerContainer = document.getElementById("wheel_of_fortune_winner_container");
    winnerContainer.appendChild(winnerAnnouncement);

    enableClosingBannerButtons(); //only works if placed at the end of this function
    document.getElementById("main_container").classList.remove("blur_all");
});
