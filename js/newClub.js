const newClubDiv = document.querySelector(".new-club-box");

function makeNewDiv(){
    const newH2 = document.createElement("h2");
    const newDiv = document.createElement("div");

    newH2.innerHTML = "New Club";
    newClubDiv.appendChild(newH2);
}

function init(){
    makeNewDiv();
};

init();