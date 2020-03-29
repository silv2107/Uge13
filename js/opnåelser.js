let silviuSlideshow = (function () {
    const slideImage = document.querySelector("#slidePict");

    const slideText = document.querySelector("#slideText");

    let pause = false;
    const picts = [
                "./img/w3school.PNG",
                "./img/codeacademy1.PNG",
                "./img/codeacademy2.PNG",
                "./img/codeacademy3.JPG"];

    const season = ['W3school', 'Introduction', 'Conditionals', 'Functions'];

    let index = 0;


    // dette er en fælles function som bruges både til knap og mouseover functionalitet
    function showPict(pictIndex) {
        slideText.innerHTML = season[pictIndex];
        slideImage.src = picts[pictIndex];                       //ændrer picts
    }

    // button functionalitet----------------------------------------
    document.querySelector('#buttonLeft').addEventListener('click', ()=> {
        index--;
        if(index < 0) {
            index = picts.length - 1;
        }
        showPict(index);
    });

    document.querySelector('#buttonRight').addEventListener('click', ()=> {
        index++;
        if(index > picts.length - 1) {
            index = 0;
        }
        showPict(index);
    });

    //---------------------------------------------------------------------



    slideImage.addEventListener('mouseover', ()=> {
        pause = true;
    })

    slideImage.addEventListener('mouseout', ()=> {
        pause = false;
    })

    setInterval(()=> {
        if(pause) {
            return;
        }

        index++;
        if(index > picts.length - 1) {
            index = 0;
        }
        showPict(index)
    }, 2000)

    return {'showPict': showPict};

})();