/* =========================================
   STATUS (XBOX / SPOTIFY)
========================================= */

function initStatus(){

    const xbox = document.querySelector(".xbox");
    const spotify = document.querySelector(".spotify");

    if(xbox) xbox.classList.add("online");
    if(spotify) spotify.classList.add("online");

}


/* =========================================
   SKILLS ROTATIVAS
========================================= */

function rotateSkills(listClass){

    const list = document.querySelector(`.${listClass}`);
    if(!list) return;

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

function initSkills(){
    rotateSkills("dev-skills");
    rotateSkills("design-skills");
}


/* =========================================
   IMAGEM DE PERFIL (SLIDESHOW)
========================================= */

function initProfileImage(){

    const profileImg = document.getElementById("profile-img");
    if(!profileImg) return;

    const images = [
        "assets/img/1.png",
        "assets/img/2.png",
        "assets/img/3.png",
        "assets/img/5.png",
        "assets/img/6.png",
    ];

    let index = 0;

    setInterval(() => {

        index = (index + 1) % images.length;
        profileImg.src = images[index];

    }, 30000);

}


/* =========================================
   DIVIDER ANIMATION (FOOTER LINE)
========================================= */

function initDivider(){

    const path = document.querySelector("#footer-line");
    const light = document.querySelector("#footer-light");

    if(!path || !light) return;

    const length = path.getTotalLength();

    light.style.strokeDasharray = "120 " + length;

    let progress = 0;
    let direction = 1;

    function animate(){

        progress += direction * 2;

        if(progress >= length || progress <= 0){
            direction *= -1;
        }

        light.style.strokeDashoffset = -progress;

        requestAnimationFrame(animate);

    }

    animate();

}


/* =========================================
   MENU (TABS)
========================================= */

function initTabs(){

    const buttons = document.querySelectorAll('.menu-btn');
    const tabs = document.querySelectorAll('.tab-content');

    if(!buttons.length) return;

    buttons.forEach(btn => {

        btn.addEventListener('click', () => {

            buttons.forEach(b => b.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            btn.classList.add('active');

            const target = document.getElementById(btn.dataset.tab);
            if(target) target.classList.add('active');

        });

    });

}


/* =========================================
   SCROLL DE CURSOS
========================================= */

function initCourseScroll(){

    const buttons = document.querySelectorAll('.scroll-btn');

    buttons.forEach(btn => {

        btn.addEventListener('click', () => {

            const list = btn.previousElementSibling;
            if(!list) return;

            list.appendChild(list.firstElementChild);

        });

    });

}


/* =========================================
   INIT GERAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initStatus();
    initSkills();
    initProfileImage();
    initDivider();
    initTabs();
    initCourseScroll();

});


document.querySelectorAll('.category').forEach(category => {

    const list = category.querySelector('.course-list');
    const count = category.querySelector('.count');

    if(list && count){
        count.textContent = `(${list.children.length})`;
    }

});