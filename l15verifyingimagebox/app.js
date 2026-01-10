//UI
const database = [
  {
    question: "choose mountain ?",
    a:"./img/ambulance.jpg",
    b:'./img/mountain.jpg',
    c:"./img/traffic.jpg",
    d:"./img/airport.jpg",
    correctanswer:"b"
  },
  {
    question: "choose mountain ?",
    a:"./img/ambulance.jpg",
    b:'./img/mountain.jpg',
    c:"./img/traffic.jpg",
    d:"./img/airport.jpg",
    correctanswer:"b"
  },
  {
    question: "choose Ambulance Truck ? ?",
    a:"img/ambulance.jpg",
    b:'./img/airport.jpg',
    c:"./img/traffic.jpg",
    d:"./img/mountain.jpg",
    correctanswer:"a"
  },
  {
    question: "choose airport ?",
    a:"./img/traffic.jpg",
    b:'./img/mountain.jpg',
    c:"./img/ambulance.jpg",
    d:"./img/airport.jpg",
    correctanswer:"d"
  }
];

//console.log(database);
//console.log(database[0].b);

const getcontainer = document.querySelector('.container'),
      getquestion = document.querySelector('.question'),
      getinputs = document.querySelectorAll(".answer"); //Nodelist
//console.log(getinputs); 

const geta_img = document.getElementById("a_img"),
      getb_img = document.getElementById("b_img"),
      getc_img = document.getElementById("c_img"),
      getd_img = document.getElementById("d_img");

const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;

function startquestion(){

  removeselected();

  const currentqes = database[currentidx];

  getquestion.textContent = currentqes.question;
  geta_img.src = currentqes.a;
  getb_img.src = currentqes.b;
  getc_img.src = currentqes.c;
  getd_img.src = currentqes.d;
}

startquestion();



function getsingleinput(){
  let answer;

  //    Node list မို့လို့ forEach နဲ့ရ။
  getinputs.forEach(function(getinput){
    //console.log(getinput);
    if(getinput.checked){
      //console.log(getinput.id);
      answer = getinput.id;
    }
  })

  return answer;
};

getbtn.addEventListener('click',function(){
  
  const getanswer = getsingleinput();

  if(getanswer){
    //question 0
    //currentidx 0 
    if(getanswer === database[currentidx].correctanswer){
      score++;
    }
    currentidx++;

    if(currentidx < database.length){
      startquestion();
    }else{
      // console.log(score);
      getcontainer.innerHTML = `
      <h3>Total Score : ${score*25}</h3>
      <h4>You answered correctly at ${score}/${database.length} questions.</h4>
      <!--<button type="button" class="btn" ondblclick="window.location.reload();">Double click to Reload</button>--!>
      <button type="button" class="btn" onclick="doubleclick()">Double Click to Reload</button>`
    };
  }else{
    window.alert('Choose One Answer');
  }

});

function removeselected(){
  getinputs.forEach(function(getinput){
    return getinput.checked = false;
  })
}


// double click ကိုကိုယ့်ဘာသာရေးတာ။
let clicktimes = 0;

function doubleclick(){
   if(clicktimes === 0){
    clicktimes = Date.now();
    console.log(clicktimes); //
   }else{

    if((Date.now() - clicktimes) < 1000){
      window.location.reload();
      clicktimes= 0;
    }else{
      clicktimes = Date.now();
    }
   }
    
   
}