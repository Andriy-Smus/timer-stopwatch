setInterval(() => {
  let dd = new Date();
  let n = dd.getDate();
  let m = dd.getMonth() + 1;
  let y = dd.getFullYear();
  if (n < 10) n = '0' + n;
  if (m < 10) m = '0' + m;
  if (y < 10) y = '0' + y;
  document.querySelector('.date').innerHTML = `${n}.${m}.${y}`
})

setInterval(() => {
  let tt = new Date();
  let hh = tt.getHours();
  let mm = tt.getMinutes();
  let ss = tt.getSeconds();
  if (hh < 10) hh = '0' + hh;
  if (mm < 10) mm = '0' + mm;
  if (ss < 10) ss = '0' + ss;
  document.querySelector('.time').innerHTML = `${hh}:${mm}:${ss}`
})

let msec = '000';
let sec = '00';
let min = '00';
let hour = '00';
function func() {
  msec++
  if (msec < 10) msec = '00' + msec;
  if (msec >= 10 && msec < 100) msec = '0' + msec;
  document.querySelector('.block-2-left-top').innerHTML = hour + ':' + min + ':' + sec + ':' + msec;
  if (msec == 100) {
    sec++;
    if (sec < 10) sec = '0' + sec;
    msec= "000";
    document.querySelector('.block-2-left-top').innerHTML = hour + ':' + min + ':' + sec + ':' + msec;
}
  if (sec == 60) {
    min++;
    if (min < 10) min = '0' + min;
    sec= "00";
    document.querySelector('.block-2-left-top').innerHTML = hour + ':' + min + ':' + sec + ':' + msec;
}
  if (min == 60) {
    hour++;
    if (hour < 10) hour = '0' + hour;
    min= "00";
    document.querySelector('.block-2-left-top').innerHTML = hour + ':' + min + ':' + sec + ':' +  msec;
  }
}

let intervalID;
document.querySelector('.bt-start').onclick = function(){
  intervalID = setInterval(func, 10);
  document.querySelector('.bt-start').disabled = true;
  document.querySelector('.bt-stop').disabled = false;
}

document.querySelector('.bt-stop').onclick = function(){
  clearInterval(intervalID);
  document.querySelector('.bt-start').disabled = false;
  document.querySelector('.bt-stop').disabled = true;
}

document.querySelector('.bt-loop').onclick = function(){
  let p = document.createElement('p');
  p.textContent = document.querySelector('.block-2-left-top').innerHTML;
  document.querySelector('.block-2-right').append(p);
}

document.querySelector('.bt-reset').onclick = function(){
  document.querySelector('.block-2-right').innerHTML = '';
  document.querySelector('.block-2-left-top').innerHTML = `00:00:00:000`;
}

let a = 25;
let t_min = 25 - 1;

document.querySelector('.bt-plus').onclick = function(){
  a += 1;
  t_min = a - 1;
  document.querySelector('.number p:nth-child(1)').innerHTML = a; 
}

document.querySelector('.bt-minus').onclick = function(){
  if(a>1) a -= 1;
  t_min = a - 1;
  document.querySelector('.number p:nth-child(1)').innerHTML = a; 
}

let t_sec = 60;

function timer_func(){
  t_sec--;
  if (t_sec < 10) t_sec = '0' + t_sec;
  document.querySelector('.timer-top').innerHTML = t_min + ':' + t_sec;
  if (t_sec == 00) {
    t_min--;
    if (t_min < 10) t_min = '0' + t_min;
    document.querySelector('.timer-top').innerHTML = t_min + ':' + t_sec;
    t_sec = "60";
  }
}

let intervalID_2;
document.querySelector('.timer-start').onclick = function(){
  document.querySelector('.bt-minus').disabled = true;
  document.querySelector('.bt-plus').disabled = true;
  intervalID_2 = setInterval(timer_func, 10*100);
  document.querySelector('.timer-start').disabled = true;
  document.querySelector('.timer-stop').disabled = false;
}

document.querySelector('.timer-stop').onclick = function(){
  clearInterval(intervalID_2);
  document.querySelector('.timer-start').disabled = false;
  document.querySelector('.timer-stop').disabled = true;
}

document.querySelector('.timer-reset').onclick = function(){
  document.querySelector('.bt-minus').disabled = false;
  document.querySelector('.bt-plus').disabled = false;
  a = 25;
  t_min = 25 - 1;
  t_sec = 60
  document.querySelector('.number p:nth-child(1)').innerHTML = a;
  document.querySelector('.timer-top').innerHTML = `00:00`;
}



