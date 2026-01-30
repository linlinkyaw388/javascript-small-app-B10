//UI

const minnum = document.querySelector(".minnumber"),
      maxnum = document.querySelector(".maxnumber"),
    //   getgameform = document.querySelector(".gameform"), //မှန်အောင်မရေးတက်ဘူးလား။
      getgameform = document.getElementById("gameform");//#မလို။
      getinput = document.querySelector("#guessnumber"),
      getbtn = document.querySelector("#btn")
      message1 = document.querySelector(".message1"),
      message2 = document.querySelector(".message2");


const getmicbtn = document.getElementById('mic-btn');
const getvocctn = document.getElementById('voice-container');


const min = 10,
      max = 20,
      winningnum = randomnum(min,max);

let gameleft = 3;

minnum.textContent = min;
maxnum.innerText = max;



//For chrome browser support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition;
//AI
getrec.continuous = false; //စကားပြောရပ်ရင် အလိုလျောက်ရပ်မယ်
getrec.lang = 'en-US'; //eng လိုဖမ်းမယ်


getmicbtn.addEventListener('click',function(){

    //start() default fun from recognition api
    getrec.start();

    getrec.addEventListener('result',(e)=>talking(e));

});

function talking(ele){

    console.log(ele);
    console.log(ele.results[0][0].transcript);

    const micresult = ele.results[0][0].transcript;

    micmessage(micresult);
    getnumber(micresult);

};

function micmessage(msg){

    getvocctn.innerHTML = `<span>Did you say !!! ${msg}</span>`;

};

function getnumber(msg){

    const getnum = +msg;
    console.log(typeof getnum);

    if(Number.isNaN(getnum)){

        getvocctn.innerHTML = `<div>This is not a valid number.</div>`;
        return false;

    };

    getinput.value = getnum;

    getrec.stop();

    //AI
    getbtn.click();

};


getbtn.addEventListener("click",function(e){
    e.preventDefault();
    //console.log("I am working");
    //console.log(getinput.value);
    //console.log(typeof getinput.value);  //string
    // let guess = Number(getinput.value);
    // let guess = +getinput.value;

    let guess = parseInt(getinput.value);
    // console.log(guess);
    // console.log(typeof guess);  //number

    if(guess < min || guess > max || isNaN(guess)){
         //console.log(`please Enter a number ${min} to ${max});
        //  message2.textContent = `please Enter a number ${min} to ${max}`;
        setmessage2(`please Enter a number ${min} to ${max}` , "red");
    }

    if(guess === winningnum){
        //Game over won
        //console.log("you won");
        // //disabled getinput
        // getinput.disabled = true;

        // //message alert
        //    //gameover , color 
        // //    message1.textContent = `${winningnum} is correct. You Won.`;
        // //    message1.style.color = "green";
        // setmessage1( `${winningnum} is correct. You Won.` , "green");

        //  //getinput border color to red
        //     getinput.style.borderColor = "green";

        // //paly again
        // getbtn.value = "play again";
        gameover(true,`${winningnum} is correct. You Won.`);
    }else{
        //gameleft--;  // 2 1 0
        gameleft --; //2 1 0  //-1 ဆိုပြီးမပေါ်တော့ဘူး။
        // console.log(gameleft);  //မပိတ်ထားရင်ဆက်ထွက် ဆက်တွက် နေမှာပေါ့

        if(gameleft === 0){
            //Gameover lose
             
            //disabled getinput
            // getinput.disabled = true;

            // //getinput border color to red
            // getinput.style.borderColor = "red";

            // //message alert 
            //    //gameover , red color
            // // message1.textContent = `Game over , YOu lost , The correct is ${winningnum}`;
            // // message1.style.color = "red";
            // setmessage1(`Game over , You lost , The correct is ${winningnum}` , "red");//color နေရာသည် message1.style.color ရဲ့နေရာလို့ပြောတာ။

            // //play again
            // getbtn.value = "play again";

            gameover(false,`Game over , You lost , The correct is ${winningnum}`);
        }else{
            //continue Game

            //getinput border color to red
            getinput.style.borderColor = "red";

            //message alert
               //not correct ,left
            message1.textContent = `${guess} is not correct! , ${gameleft} guess left.`;
            message1.style.color = "blue";

            //clear getinput old value
            getinput.value = "";  //pure input ဖြစ်လို့ တိုက်ရိုက်ခေါ်လို့ရ။

            //getinput auto focus
            getinput.focus();
        }
    }
});  //complete sentence ဖြစ်တယ်ဆိုတဲ့ အဓိပ္ပာယ်


function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color; //color နေရာသည် message1.style.color ရဲ့နေရာလို့ပြောတာ။
}

function setmessage2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;

    //1s = 1000ms //callback function
    setTimeout(function(){
        message2.textContent = "";
    },2000);
}
//ထပ်သလဲလဲ အလုပ်လုပ်စေချင်ရင် setInterval();
//တစ်ကြိမ်ပဲအလုပ်လုပ်စေချင်ရင် setTimeout();



function gameover(won,msg){
    //let color = won === true ? "green" : "red";  variable မှာတစ်ခါတည်းပေးတာ။
    let color;
    won === true ? color="green" : color="red";

        //disabled getinput
        getinput.disabled = true;

        //getinput border color to red
        getinput.style.borderColor = color;

        //message alert
        //gameover , color 
        setmessage1(msg,color);


        //paly again
        getbtn.value = "play again";

        //add class
        //getbtn.className = "btn reload"; အဟောင်းကိုအရင်ပြန်ခေါ်ရ။
        //getbtn.className += "reload"; //append သုံးမယ်ဆို space တစ်ချက်လောက်ခြားပေးပါ။
          getbtn.classList.add("reload");

}


//click = mouseup
//mousedown မှရ။
getgameform.addEventListener("mousedown",function(e){
    if(e.target.classList.contains("reload")){
    //  console.log("hi");
    window.location.reload();  //reload page
    }
   
});


function randomnum(min,max){
    //Math.round = ၅ကျော် ၁ တိုးယူ။    //     10-1   +1 ၀ လာလည်း၁ဖြစ် ၉လာလည်း၁၀ဖြစ်။မဟုတ်ရင် ၀ to ၁၁ဖြစ်။
    let getrdn = Math.round(Math.random()*(max-min)+1);
    return getrdn;
}

//console.log(randomnum(1,10));
console.log(winningnum);
















