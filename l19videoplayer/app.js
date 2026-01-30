//Get UI

const getvideoscreen = document.getElementById('videoscreen');
const playbtn = document.getElementById('play'),
      prevbtn = document.getElementById('prev'),
      nextbtn = document.getElementById('next'),
      stopbtn = document.getElementById('stop');
const getprogress = document.getElementById('progress'),
      getprogressbar = document.getElementById('progress-bar');
const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');
const getopenfullscreen = document.querySelector('.openfullscreen'),
      getclosefullscreen = document.querySelector('.closefullscreen');
const getcontainer = document.querySelector('.container');


const videos = ['samplevideo1','samplevideo2'];

let curridx = 0;

//       //    videos [0]
// loadvideo(videos[curridx]);

 //      loadvideo(videos[1])
function loadvideo(video){

                   //     loadvideo(videos[1])
    getvideoscreen.src =`./source/${video}.mp4`;
    gettitle.textContent = video;

}


function playvideo(){

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    getvideoscreen.play();

}

function pausevideo(){

    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    getvideoscreen.pause();

}

function playpausevideo(){

    if(getvideoscreen.paused){
        playvideo();
    }else{
        pausevideo();
    }

}

function nextvideo(){

    curridx ++ ;

    if(curridx > videos.length-1){
        curridx = 0;
    };

    loadvideo(videos[curridx]);
    playvideo();

}

function previousvideo(){

    curridx --;

    if(curridx < 0 ){
        curridx = videos.length-1;
    };

    loadvideo(videos[curridx]);
    playvideo();

}

function stopvideo(){

    getvideoscreen.currentTime = 0;
    pausevideo();

}


function updateprogress(e){

    //const [currentTime,duration] = [e.target.currentTime,e.target.duration]
    //console.log(curentTime,duration);

    const [currentTime,duration] = [e.srcElement.currentTime,e.srcElement.duration];
    //console.log(currentTime,duration);

    if(getvideoscreen.currentTime === 0){
        getprogressbar.style.width = "0%";
    }else{
        const progresspercent = (currentTime/duration)*100;
        getprogressbar.style.width = `${progresspercent}%`;
    }


    let getmins = Math.floor(getvideoscreen.currentTime/60);
    let getsecs = Math.floor(getvideoscreen.currentTime%60);

    // if(getmins < 10){
    //     getmins = "0"+getmins;
    //     getmins = "0"+String(getmins);
    // }
    
    // if(getsec < 10){
    //     getsec = "0"+getsec;
    //     getsec = "0"+String(getsec);
    // }
    // console.log(getmins,getsec);

    const minutevalue = getmins.toString().padStart(2,'0');
    const secondvalue = getsecs.toString().padStart(2,'0');

    getdisplaytime.innerHTML = `${minutevalue}:${secondvalue}`;


}


function setprogress(e){

    const getclientwidth = e.target.clientWidth;
    const getclickx = e.offsetX;
    const duration = getvideoscreen.duration;

    getvideoscreen.currentTime = (getclickx/getclientwidth) * duration;
    // console.log(getclickx,getclientwidth,duration);//
}


function openfullscreen(){

    if(getcontainer.requestFullscreen){
        getcontainer.requestFullscreen();
    }else if(getcontainer.mozRequestFullscreen){
        getcontainer.mozRequestFullscreen();
    }else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen();
    }else if(getcontainer.msRequestFullscreen){
        getcontainer.msRequestFullscreen();
    }


    getopenfullscreen.style.display = "none";
    getclosefullscreen.style.display = 'inline-block';

}

function closefullscreen(){

    if(document.exitFullscreen){
        document.exitFullscreen(); //standard
    }else if(document.mozCancelFullscreen){
        document.mozCancelFullscreen();  //firefox
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen(); //chrome
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();  //edge,ie
    }

    getopenfullscreen.style.display = "inline-block";
    getclosefullscreen.style.display = 'none';
    
}


getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('ended',nextvideo);

playbtn.addEventListener('click',playpausevideo);
nextbtn.addEventListener('click',nextvideo);
prevbtn.addEventListener('click',previousvideo);
stopbtn.addEventListener('click',stopvideo);
getprogress.addEventListener('click',setprogress);

getopenfullscreen.addEventListener('click',openfullscreen);
getclosefullscreen.addEventListener('click',closefullscreen);


//ai code
const getspeed = document.getElementById('playbackspeed');

getspeed.addEventListener('change', function() {
    getvideoscreen.playbackRate = getspeed.value;
});