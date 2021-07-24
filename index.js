const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const  progress = document.getElementById('progress');
const datee = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const timeformat = document.getElementsByClassName('timeformat');

function showCurrentTime(){
    let date = new Date();
    let hr  = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let dat = date.getDate();
    let mth = date.getMonth()+1;
    let yr = date.getFullYear();
    let timeformat='am';

     if(hr>12){
         hr=hr-12;
         timeformat='pm';

     }
     if(hr==12){
         hr=12;
     }
    hour.textContent = hr ;
    minute.textContent = min;
    second.textContent = sec + ' '+ timeformat;
    datee.textContent = dat;
    month.textContent = mth;
    year.textContent = yr;

    progress.style.width = (sec / 60) * 100 + '%'
}

setInterval(showCurrentTime, 1000)
