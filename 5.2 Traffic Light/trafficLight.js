var arr = ['#fb1f1f', '#fcfc23', '#199119']; //red, yellow, green but the hue was slightly changed
var i = 0;

function changeLight() {

    var lights = document.getElementsByClassName('light');

    for (let j = 0; j < lights.length; j++){
        lights[j].style.backgroundColor = '#1e2025';
    }

    lights[i].style.backgroundColor = arr[i];

    if (i<arr.length) { 
        i++
    };
    if (i === 3) {
        i = 0;
    }
}

setInterval(changeLight, 1500);