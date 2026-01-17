//Get UI

const getaudioscreen = document.getElementById('audioscreen');
const playbtn = document.getElementById('play'),
      prevbtn = document.getElementById('prev'),
      nextbtn = document.getElementById('next'),
      stopbtn = document.getElementById('stop');
const getprogress = document.getElementById('progress'),
      getprogressbar = document.getElementById('progress-bar');
const getvolprogress = document.getElementById('volumeprogress');
const getdisplaytime = document.getElementById('displaytime');

const audios = ['sample1','sample2','sample3'];

let curridx = 0;
// console.log(audios[curridx]);  //sample1

loadaudio(audios[curridx]);

function loadaudio(audio){
    getaudioscreen.src = `./source/${audio}.mp3`;
}

function playaudio(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getaudioscreen.play(); //html dafault function
}

function pauseaudio(){
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    getaudioscreen.pause(); ////html dafault function
}

function playandpauseaudio(){

    //paused defult keywords for audio/video
    if(getaudioscreen.paused){
        getaudioscreen.play();
    }else{
        getaudioscreen.pause();
    }
}

function nextaudio(){
    curridx ++;

    //  0 to 2       3-1
    if(curridx > audios.length-1){

        curridx = 0;

    }
    loadaudio(audios[curridx]);
    playaudio();
}

function previousaudio(){
    curridx -- ;

    if(curridx < 0){
        curridx = audios.length-1;
    }
    loadaudio(audios[curridx]);
    playaudio();
}


function updateprogress(e){

    //console.log(e.target);

    //console.log(e.target.duration);
    //console.log(e.target.currentTime);

    // const {duration,currentTime} = e.target; // es6
    // console.log(duration,currentTime);

    const {duration} = e.target; //e.target.duration
    const {currentTime} = e.target;
    // console.log(duration,currentTime);

    //Ai code
    const totalDuration = duration || 0;

    if(currentTime === 0){
        getprogressbar.style.width = "0%";
    }else{

        const progresspercent = (currentTime/duration)*100;
        //console.log(progresspercent);

        getprogressbar.style.width = `${progresspercent}%`;
    }


    // forward
    // const mins = Math.floor(currentTime/60);
    // const secs = Math.floor(currentTime%60);  //စားကြွင်းကိုယူ။
    
    //backward
    const mins = Math.floor((totalDuration-currentTime)/60);
    const secs = Math.floor((totalDuration-currentTime)%60);
    //console.log(typeof mins); //number

    const minutevalue = mins.toString().padStart(2,"0");//00:00
    const secondvalue = secs.toString().padStart(2,"0");

    getdisplaytime.innerHTML = `${minutevalue}:${secondvalue}`;
}


function stopaudio(){
    getaudioscreen.currentTime = 0;
    getprogressbar.style.width = '0%';

    pauseaudio();
}


function volumecontrol(){

    //volumn default key form audio/video
    getaudioscreen.volume = getvolprogress.value/100;

    //1 is default (100%)
    //0.5 half volume (50%)
    //0 mute (0%)
}


function progressaudioclick(e){

    const width = this.clientWidth;
    console.log(width);

    const clickx = e.offsetX;

    const getduration = getaudioscreen.duration;

    getaudioscreen.currentTime = (clickx/width) * getduration;

    // Ai code
    if(!isNaN(getduration)){

        getaudioscreen.currentTime = (clickx/width) * getduration;
    }

}




getaudioscreen.addEventListener('timeupdate',updateprogress);
getaudioscreen.addEventListener('play',playaudio);
getaudioscreen.addEventListener('pause',pauseaudio);

playbtn.addEventListener('click',playandpauseaudio);
nextbtn.addEventListener('click',nextaudio);;
prevbtn.addEventListener('click',previousaudio);
stopbtn.addEventListener('click',stopaudio);
getvolprogress.addEventListener('change',volumecontrol);
getprogress.addEventListener('click',progressaudioclick);