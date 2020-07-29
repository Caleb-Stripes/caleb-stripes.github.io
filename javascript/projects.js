// Project Animation function


const descriptions = document.getElementsByClassName('description');

function updateProjectsJs() {
    const panelOne = document.getElementById('panelOne')
    const panelTwo = document.getElementById('panelTwo')
    const panelThree = document.getElementById('panelThree')

    panelOne.addEventListener('click', openOne);
    panelTwo.addEventListener('click', openTwo);
    panelThree.addEventListener('click', openThree);    
}
            
function openOne() {
    if (panelOne.classList == 'panel open'){
        toggleOff();    
    } else {
        toggleOff();
        panelOne.classList.toggle('open')
        panelTwo.classList.toggle('close')
        panelThree.classList.toggle('close')
        descriptions[0].style.visibility = "visible";
    }
}

function openTwo() {
    if (panelTwo.classList == 'panel open'){
        toggleOff();
    } else {
        toggleOff();
        panelOne.classList.toggle('close')
        panelTwo.classList.toggle('open')
        panelThree.classList.toggle('close')
        descriptions[1].style.visibility = "visible";
    }
}

function openThree() {
    if (panelThree.classList == 'panel open'){
        toggleOff();
    } else {
        toggleOff();
        panelOne.classList.toggle('close')
        panelTwo.classList.toggle('close')
        panelThree.classList.toggle('open')
        descriptions[2].style.visibility = "visible";
    }
}

function toggleOff() {
    const panels = [panelOne, panelTwo, panelThree]
    panels.forEach(panel => {
        panel.classList = 'panel';
    });
    descriptions[0].style.visibility = "hidden";
    descriptions[1].style.visibility = "hidden";
    descriptions[2].style.visibility = "hidden";
}