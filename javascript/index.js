// ******** nav to about me ********
function aboutMeClick() {
    document.getElementById('pageCss').href = './styles/about-me.css'
    document.getElementById('body').innerHTML = ""
    
    let header = document.createElement('header')
    header.innerHTML = "Caleb Stripes"
    document.getElementById('body').append(header)
    
    let photoBox = document.createElement('div')
    photoBox.id = 'photoBox'
    document.getElementById('body').append(photoBox)
    
    let photo = document.createElement('img')
    photo.id = 'photo'
    photo.classList.add('portrait', 'fadeBack')
    photo.src = './resources/Head Shot.JPG'
    document.getElementById('photoBox').append(photo)
    const mousedImg = document.querySelector('.portrait')
    mousedImg.addEventListener('mouseover', toggleClass);
    
    let photoLabel = document.createElement('label')
    photoLabel.id = 'photoLabel'
    photoLabel.innerHTML = 'Full Stack Software Developer'
    document.getElementById('photoBox').append(photoLabel)
    
    let photoBackDrop = document.createElement('img')
    photoBackDrop.id = 'photoBackDrop'
    photoBackDrop.src = './resources/Code.JPG'
    document.getElementById('photoBox').append(photoBackDrop)

    let buttonBox = document.createElement('div')
    buttonBox.id = 'buttonBox'
    document.getElementById('body').append(buttonBox)

    let change = document.createElement('button')
    change.id = 'change'
    change.classList.add('button')
    change.innerHTML = '{click}'
    document.getElementById('buttonBox').append(change)
    const clickBtn = document.querySelector('.button')
    clickBtn.addEventListener('mouseover', mouseButton)
    clickBtn.addEventListener('mouseout', mouseButton)
    document.querySelector('#change').addEventListener('click', nextImage);

    let myStar = document.createElement('img')
    myStar.classList.add('star')
    myStar.src = './resources/Star.JPG'
    document.getElementById('buttonBox').append(myStar)

    let caption = document.createElement('div')
    caption.id = 'caption'
    document.getElementById('body').append(caption)

    let infoText = document.createElement('p')
    infoText.id = 'infoText'
    infoText.innerHTML = 'Software Development has always been something I have been interested in. This journey has been unlike any other journey I have had, I am able to bring the same mentality to challenges faced but the solutions and problem solving tactics are completely new. Development is so rewarding, I find it a great outlet for my creativity and logical practice.'
    document.getElementById('caption').append(infoText)

    setInital()
}

// ******** nav to my projects ********

function myProjectsClick() {
    document.getElementById('pageCss').href = './styles/projects.css'
    document.getElementById('body').innerHTML = ""
    // console.log('fired')

    let panels = document.createElement('div')
    panels.className = 'panels'
    body.append(panels)

    // ******** Panel One ********
    let panelOne = document.createElement('div')
    panelOne.id = 'panelOne'
    panelOne.className = 'panel'
    panels.append(panelOne)

    let panelOneContent = document.createElement('div')
    panelOneContent.className = 'content'
    panelOne.append(panelOneContent)
    let panelOneContentTitle = document.createElement('p')
    panelOneContentTitle.className = 'title'
    panelOneContentTitle.innerHTML = 'ProJo'
    panelOneContent.append(panelOneContentTitle)
    let panelOneContentDescription = document.createElement('p')
    panelOneContentDescription.className = 'description'
    panelOneContentDescription.innerHTML = 'This project was developed collaboratively at the culmination of my coding boot camp. The goal was to create a piece of software that provided private contractors and agencies to manage billing and payments between themselves, while keeping documentation of job specifics. It employs a full stack of development languages and frameworks. Due to the timing of the covid-19 pandemic this project was developed 100% remotely using github project management tools, Google jamboard, as well as numerous applications to communicate such as hangout and slack. We are proud of the final product and it was presented to a live audience via a We Can Code IT virtual demo day.'
    panelOneContent.append(panelOneContentDescription)    

    // ******** Panel Two ********
    let panelTwo = document.createElement('div')
    panelTwo.id = 'panelTwo'
    panelTwo.className = 'panel'
    panels.append(panelTwo)

    let panelTwoContent = document.createElement('div')
    panelTwoContent.className = 'content'
    panelTwo.append(panelTwoContent)
    let panelTwoContentTitle = document.createElement('p')
    panelTwoContentTitle.className = 'title'
    panelTwoContentTitle.innerHTML = 'Pets Amok'
    panelTwoContent.append(panelTwoContentTitle)
    let panelTwoContentDescription = document.createElement('p')
    panelTwoContentDescription.className = 'description'
    panelTwoContentDescription.innerHTML = 'This builds upon two previous projects: a tamagotchi (pet) type game loop employing basic class and method construction, and a shelter project utilizing inheritance to manage multiple types of those pets. Pets Amok adds additional conditions to both the pets and the shelter containing them and expands the game loop to insite levels of panic among the more empathetic players. While remaining a console program it introduces more complex logic and requires more creative problem solving to develop. The true value from this project was the strong foundation of Object Oriented Programming and religious-like conviction for Test Driven Development.'
    panelTwoContent.append(panelTwoContentDescription)

    // ******** Panel Three ********
    let panelThree = document.createElement('div')
    panelThree.id = 'panelThree'
    panelThree.className = 'panel'
    panels.append(panelThree)

    let panelThreeContent = document.createElement('div')
    panelThreeContent.className = 'content'
    panelThree.append(panelThreeContent)
    let panelThreeContentTitle = document.createElement('p')
    panelThreeContentTitle.className = 'title'
    panelThreeContentTitle.innerHTML = 'Route Finder'
    panelThreeContent.append(panelThreeContentTitle)
    let panelThreeContentDescription = document.createElement('p')
    panelThreeContentDescription.className = 'description'
    panelThreeContentDescription.innerHTML = "Route Finder is designed to provide climbers with a virtual companion able to replace the bulky guidebook that is limited in specialization to specific locations. It could hold relevant route information for climbs around the world, index the same information from all climbing guidebooks, and occupy only a fraction of the physical space within a climber's pack. Categorizing routes by location, difficulty, community rating, style, rock-type and climbing-type are just the initial ways to index them. Furthermore allowing users to search based on these characteristics it can make planning trips to climbing destinations much more simple. Often one of the most difficult things to do is find the specific route based on the approach beta. This program could implement a community submitted solution to this allowing up-votes and down-votes so the most helpful approach beta is seen first when searched (similar to stack overflow). The software is developed in Java, implementing a Spring framework and a HTML/CSS/JavaScript front end."
    panelThreeContent.append(panelThreeContentDescription)

    // ******** Panel Four ********
    let panelFour = document.createElement('div')
    panelFour.id = 'panelFour'
    panels.append(panelFour)

    // ******** Function to update JS ********
    updateProjectsJs()
}

// ******** nav to my skills *********

function mySkillsClick() {
    document.getElementById('pageCss').href = './styles/skills.css'
    document.getElementById('body').innerHTML = ""

    let message = document.createElement('p')
    message.innerHTML = 'Currently Undergoing Skill Construction'

    body.append(message)
}

