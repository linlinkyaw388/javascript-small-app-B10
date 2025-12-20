//UI
const getprogressbar = document.getElementById("progress-bar");

// scrollဆွဲချင်ရင် => onscroll
window.onscroll=function(){
    // console.log("hay");
    scrollpoint();
};

function scrollpoint(){
    // console.log("Hey");
    let getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop); // 11011

    //client height မြင်ကွင်း စာရှိသလောက်
    let getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight); //842

    let getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight); // 11853

    let calheight = getscrollheight - getclientheight;
    // console.log(calheight); //11011
 
    // let getfinal = Math.floor(getscrolltop*100 / calheight);
    // console.log(getfinal);

    let getfinal = Math.floor((getscrolltop/calheight)*100)
    // console.log(getfinal); //

    getprogressbar.style.width = `${getfinal}%`;
}

function printme(){
    //console.log("Hay");
    window.print(); //default function.
}