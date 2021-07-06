const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours')
const minutesEl=document.getElementById('minutes')
const secondsEl=document.getElementById('seconds')
const eplYears='13 Aug 2021';
function countdown(){
 const eplYearsDate=new Date(eplYears);
 const currentDate= new Date();
 const Totalseconds =Math.floor((eplYearsDate-currentDate)
    /1000)
    const minutes=Math.floor(Totalseconds/60)%60
    const hours=Math.floor(Totalseconds/3600)%24
    const days=Math.floor(Totalseconds/3600/24)
    const seconds=Math.floor(Totalseconds%60)
 //console.log(days,hours, minutes,seconds);
 daysEl.innerText=days
 hoursEl.innerText=hours
 minutesEl.innerText=minutes
 secondsEl.innerText=seconds
}
setInterval(countdown,1000)
countdown();
//function makeMeTwoDigits(n){
  //  return (n < 10 ? "0" : "") + n;
//}