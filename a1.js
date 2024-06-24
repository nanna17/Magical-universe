function showMagic(section) {
    const content = document.getElementById('magic-content');
    let message = '';

    switch(section) {
        case 'theories':
            window.open('https://i.pinimg.com/564x/17/39/da/1739da4f3f470366100563d74e85ae7a.jpg')
        case 'researchers':
            window.open('https://en.wikipedia.org/wiki/Black_hole', '_blank');
            return;
        case 'blackholes':
           window.open('https://i.pinimg.com/originals/c1/c7/b5/c1c7b5385294a3c818de4efe17561c50.gif');
           return;
           case 'galaxies':
            window.open('https://i.pinimg.com/originals/20/20/bf/2020bf44ed994d07bdc2196540b3bbd3.gif');
           return;
        case 'animations':
           window.open('https://i.pinimg.com/originals/00/fc/4b/00fc4bde530373778754a56e201447b2.gif');
           return;
    }

    content.innerHTML = message;
    content.classList.add('show');
    setTimeout(() => {
        content.classList.remove('show');
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
    const butterfly = document.querySelector(".butterfly");
    const flyPath = [
        { transform: 'translate(0, 0)' },
        { transform: 'translate(100px, -200px)' },
        { transform: 'translate(-100px, 100px)' },
        { transform: 'translate(200px, 200px)' },
        { transform: 'translate(0, 0)' }
    ];
    const flyTiming = {
        duration: 5000,
        iterations: Infinity
    };
    butterfly.animate(flyPath, flyTiming);
});
