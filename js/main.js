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