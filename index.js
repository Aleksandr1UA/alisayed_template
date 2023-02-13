function changeMenu() {
    const header_menu = document.querySelector('.header_menu');

    header_menu.addEventListener('mouseover', () => {
        header_menu.classList.toggle('change');
    });

    header_menu.addEventListener('mouseout', () => {
        header_menu.classList.remove('change');
    });
}
changeMenu();

//Main Left Block
const l_firstBlock = 180;
const mainLBdraw = document.querySelector('.main_left-block_drawing');

function toggleFBClass (props) {
    mainLBdraw.classList.toggle('slideLeft', props);
}

window.addEventListener('scroll', () => {
    let topFB = window.scrollY;
    if (topFB > l_firstBlock) { 
        toggleFBClass(true)
    } else {
        toggleFBClass(false);
    }
})

const l_secondBlock = 445;
const mainLBdesign = document.querySelector('.main_left-block_design');

function toggleSBClass (props) {
    mainLBdesign.classList.toggle('slideLeft', props);
}

window.addEventListener('scroll', () => {
    let topSB = window.scrollY;
    if (topSB > l_secondBlock) {
        toggleSBClass(true);
    } else {
        toggleSBClass(false);
    }
})

const l_thirdBlock = 710;
const mainLBdevelop = document.querySelector('.main_left-block_develop');

function toggleThBClass (props) {
    mainLBdevelop.classList.toggle('slideLeft', props);
}

window.addEventListener('scroll', () => {
    let topTB = window.scrollY;
    if (topTB > l_thirdBlock) {
        toggleThBClass(true);
    } else {
        toggleThBClass(false);
    }
})

//Main Top Block
const r_topBlock = 180;
const mainTBstart = document.querySelector('.main_top-block_start');

function toggleTBClass (props) {
    mainTBstart.classList.toggle('slideRight', props);
}

window.addEventListener('scroll', () => {
    let topRB = window.scrollY;
    console.log(`${topRB} > ${r_topBlock}`)
    if (topRB > r_topBlock) { 
        toggleTBClass(true)
    } else {
        toggleTBClass(false);
    }
})

//Main Bottom Block
const r_bottomBlock = 600;
const mainBBverif = document.querySelector('.main_bottom-block_verif');

function toggleBBClass (props) {
    mainBBverif.classList.toggle('slideRight', props);
}

window.addEventListener('scroll', () => {
    let topRB = window.scrollY;
    console.log(`${topRB} > ${r_bottomBlock}`)
    if (topRB > r_bottomBlock) { 
        toggleBBClass(true)
    } else {
        toggleBBClass(false);
    }
})