timer = {time: 0, running: 0};
timer.time = 0;
timer.running = 0;
min = 0;
sec = 0;
tenth = 0;
function startPause() {
    if (timer.running == 0) {
        timer.running = 1;
        increment();
        document.getElementById("startPause").innerHTML = "Pause";
    } else {
        timer.running = 0;
        document.getElementById("startPause").innerHTML = "Resume";
    }
}
function reset() {
    timer.running = 0;
    timer.time = 0;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("output").innerHTML = "00:00:00";
}
function increment() {
    if (timer.running == 1) {
        setTimeout(function () {
            timer.time++;
            min = Math.floor(timer.time / 10 / 60);
            sec = Math.floor(timer.time / 10)% 60;
            tenth = timer.time % 10;
            document.getElementById("output").innerHTML = min + ":" + sec + ":" + tenth;
            increment();
        }, 100)
    }
}

function save() {
    document.cookie = min+":"+sec+":"+tenth;
}
function get() {
    var x = document.cookie;
    var c ="";
    for (var i = 0; i < x.length; i++) {
        if(x.charAt(i)>=0 && x.charAt(i)!=5) {
            c += x[i];
        }
    }
    timer.time = c.charAt(2)+c.charAt(3)+c.charAt(4);
    document.getElementById("text").innerHTML = timer.time;
}







