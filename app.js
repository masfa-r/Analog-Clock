const hour = document.querySelector('.hours');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const millisec = document.querySelector('.m_seconds');

const dHour = document.querySelector('.digital-hour');
const dmin = document.querySelector('.digital-min');
const dsec = document.querySelector('.digital-sec');
const msec = document.querySelector('.digital-msec');
const tickingSound = document.querySelector('#ticking-sound')

// hour.style.transform = 'rotate(90deg)';
// min.style.transform = 'rotate(6deg)';

function currentTime(){
    let date = new Date();
    let c_hour, c_min, c_sec, c_msec, dmsec;
    c_hour = date.getHours();
    c_min = date.getMinutes();
    c_sec = date.getSeconds();
    c_msec = date.getMilliseconds();

    dHour.innerHTML = c_hour;
    dmin.innerHTML = c_min;
    dsec.innerHTML = c_sec;
    msec.innerHTML = c_msec;

    if(c_hour < 10 ){
        dHour.innerHTML = `0${c_hour}`;
    }
    if(c_min <10){
       dmin.innerHTML = `0${c_min}`; 
    }
    if(c_sec<10){
        dsec.innerHTML = `0${c_sec}`;
    }
    if(c_msec<10){
        msec.innerHTML = `00${c_msec}`;
    }
    if(c_msec<100){
        msec.innerHTML = `0${c_msec}`;
    }
        
    hourDeg = c_hour * 30 + c_min/2;
    secDeg = c_sec * 6 ;
    minDeg = c_min * 6;
    msecDeg = c_msec * 360 /1000;

    hour.style.transform = `rotate(${hourDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;
    millisec.style.transform = `rotate(${msecDeg}deg)`;

    // tickingSound.playbackRate = 1.3;
    tickingSound.play();   
}

setInterval(currentTime, 1);


// hour 360deg
// min = 6deg
// sec = 6deg