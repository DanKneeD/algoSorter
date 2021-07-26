let cities = [document.getElementById("HomeClock"),document.getElementById("Paris"),document.getElementById("London"),document.getElementById("Tokyo"),document.getElementById("Newyork"),document.getElementById("Prauge"),document.getElementById("Rome")];

function calcTime(city, offset) {

    d = new Date();
   
   if(city !=0){
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    nd = new Date(utc + (3600000*offset));

    h = nd.getHours();
    m = nd.getMinutes();
    s = nd.getSeconds();
    session = "AM";
   }else{
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    session = "AM";
   }

   if(h>=12){
       h = h - 12;  
       session = "PM";
   }
   h = (h<10) ? "0" + h: h;
   m = (m<10) ? "0" + m: m;
   s = (s<10) ? "0" + s: s;
    
   cities[city].innerHTML = h + ":" + m + ":" + s + " "+ session;

}

function callingTime(){

    calcTime(0, '0')
    calcTime(1, '+2')
    calcTime(2, '+1')
    calcTime(3, '+9')
    calcTime(4, '-4')
    calcTime(5, '+3')
    calcTime(6, '+5.5')
    setTimeout("callingTime()",1);
}

callingTime();
