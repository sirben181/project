var seconds=00;
var tens=00;
var mins=00;
var hrs=00;
var appendSeconds= document.getElementById('seconds');
var appendTens =document.getElementById('tens');
var appendMins=document.getElementById('mins');
var appendHrs=document.getElementById('hrs')
var buttonStart=document.getElementById('st-btn'); 
var  buttonStop=document.getElementById('sp-btn');
var  buttonReset=document.getElementById('re-btn');
//creating  a function that will start timer//
function startTimer(){
    tens++;
    if(tens<9){appendTens.innerText= "0" + tens;
}
if(tens>9){appendTens.innerText=tens;}
if(tens>99){seconds++; appendSeconds.innerText= "0"+seconds;
tens=0; appendTens.innerText= "0" +0;}
if(seconds>9){appendSeconds.innerText=seconds;}
if(seconds>59){ mins++; appendMins.innerText="0"+mins;
seconds=0; appendSeconds.innerText="0"+0;}
if (mins>9){appendMins.innerText=mins;}
if(mins>59){ hrs++; appendHrs.innerText="0"+hrs;
mins=0; appendMins.innerText="0"+0;}
if(hrs>9){apppendHrs.innerText=hrs;}
} 
buttonStart.onclick=function () {interval=setInterval(startTimer)};
buttonStop.onclick= function (){clearInterval(interval)};
buttonReset.onclick= function(){clearInterval(interval);
    hrs="00";
    mins="0";
tens="00";Seconds="00";
appendHrs.innerText=hrs;
appendMins.innerText=mins;
appendTens.innerText=tens;
appendSeconds.innerText=Seconds;}