

    var buttonStart = document.getElementById('Start');
    var timer = document.getElementById("Timer");
    var buttonStop = document.getElementById("Stop");
    var buttonRestart = document.getElementById("Restart");

    let minute = 0;
    let tenthSecond = 0;
    let second = 0;
    let tenthMilaSecond =0;
    let milaSecond =0;

    let running = false;

    buttonStart.onclick = function(){
    timer.innerHTML = "Works";
    running = true;
    changeTime();
    
    }

    function changeTime(){
        
        if(running){
        milaSecond++;
        if(milaSecond >= 10){
            milaSecond = 0;
            tenthMilaSecond ++;
        }
        if(tenthMilaSecond >= 6){
            tenthMilaSecond = 0;
            second++;
        }

        if(second >= 10){
            second = 0;
            tenthSecond ++;
        }
        if(tenthSecond >= 6){
            tenthSecond = 0;
            minute++;
        }
        
        timer.innerHTML = minute + ":" + tenthSecond + second + ":" + tenthMilaSecond + milaSecond;
        
            setTimeout("changeTime()",10);
        }
       
    }
    buttonStop.onclick = function(){
        running = false;
    }

    buttonRestart.onclick = function(){
    minute = 0;
    tenthSecond = 0;
    second = 0;
    tenthMilaSecond =0;
    milaSecond =0;
     timer.innerHTML = minute + ":" + tenthSecond + second + ":" + tenthMilaSecond + milaSecond;
    }

   