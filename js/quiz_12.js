let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let startStop = document.getElementById('timer-btn');
let updateStateTimer=document.querySelector('.state-timer');

let promodoro=document.getElementById('promodoro');
let longBreak=document.getElementById('long-break');
let shortBreak=document.getElementById('short-break');

let durationTimer=document.querySelector('.duration-timer');


let timeWithSeconds=1500;
let leftTime=null;

update();
updateStartPauseAction();

function update(){
  let  min=Math.floor(timeWithSeconds / 60);
   let sec=timeWithSeconds%60;
console.log(min , sec);
    minutes.textContent= min.toString().padStart(2,"0");
    seconds.textContent=sec.toString().padStart(2,"0");
    
    
}

 function start(){

    if(timeWithSeconds==0) return;
    leftTime=setInterval(() => {
    timeWithSeconds--;
update();
updateStartPauseAction();
if(timeWithSeconds==0){
    pause(); 
}
  }, 1000);
  updateStartPauseAction();
}

function pause(){
    clearInterval(leftTime);
    leftTime=null;
updateStartPauseAction();
}

  function updateStartPauseAction(){
startStop.classList.remove('run','pause');
    if(leftTime===null){
  updateStateTimer.innerHTML='PAUSE';
     startStop.classList.remove('run');
     startStop.classList.add('pause');
}
else{
  updateStateTimer.innerHTML='RUNNING';
 startStop.classList.add('run');
  startStop.classList.remove('pause');
}
}


startStop.addEventListener("click",()=>{
  
  leftTime=== null? start() : pause();

});
// startStop.addEventListener("dblclick", pause());
promodoro.addEventListener('click',()=>{
timeWithSeconds=1500;
update();
pause();
})


longBreak.addEventListener('click',()=>{
timeWithSeconds=900;
update();
pause();

})

shortBreak.addEventListener('click',()=>{
timeWithSeconds=300;
update();
pause();
})

