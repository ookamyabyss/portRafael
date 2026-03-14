// STATUS SIMULADO

const xbox = document.querySelector(".xbox")
const spotify = document.querySelector(".spotify")

// simulação visual
if(xbox) xbox.classList.add("online")
if(spotify) spotify.classList.add("online")



function rotateSkills(listClass){

    const list = document.querySelector(`.${listClass}`);

    const skills = Array.from(list.children);

    let index = 0;

    function showNext(){

        skills.forEach(skill => skill.style.display = "none");

        for(let i = index; i < index + 5; i++){

            if(skills[i]){
                skills[i].style.display = "inline-block";
            }

        }

        index += 5;

        if(index >= skills.length){
            index = 0;
        }

    }

    showNext();

    setInterval(showNext, 60000);

}

rotateSkills("dev-skills");
rotateSkills("design-skills");


// fotos de perfil


const images = [
    "assets/img/1.png",
    "assets/img/2.png",
    "assets/img/3.png",
    "assets/img/4.png",
    "assets/img/5.png",
    "assets/img/6.png",
];

let index = 0;

const profileImg = document.getElementById("profile-img");

setInterval(() => {

    index++;

    if (index >= images.length) {
        index = 0;
    }

    profileImg.src = images[index];

}, 30000); // 30 segundos