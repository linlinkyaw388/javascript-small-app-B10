//Get UI

const getcurmonth = document.getElementById('curmonth'),
      getcuryear = document.getElementById('curyear'),
      getuimonths = document.getElementById('months'),
      getuiyears = document.getElementById('years'),
      getcaldays = document.getElementById('caldays');

const getmonthbtn = document.querySelector('.month-btn'),
      getyearbtn  = document.querySelector('.year-btn');


const months = ['Jan',"Feb","Mar","Apr","May","June","July","Aug","Sep","Oct",'Nov',"Dec"];
let startyear = 2020;
let endyear  = 2030;


// console.log(new Date()); //Fri Jan 23 2026 21:45:36 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,0,0)); //Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,5,0)); //Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
// console.log(new Date(2023,1,30)); //Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)



let month,year;

window.addEventListener('load',function(){

    let getday = new Date();
    month = getday.getMonth();  //0
    year = getday.getFullYear();//2026

    // console.log(getday); //Wed Jan 21 2026 20:16:48 GMT+0630 (Myanmar Time)
    // console.log(month); //0
    // console.log(year); //2026


    getcurmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();


});


function initmonths(){

    // console.log("month");

    getuimonths.innerHTML = '';

    for(let x = 0 ; x < months.length ; x++){

        const newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add("dropdown-item");

        // console.log(newdiv);
        getuimonths.appendChild(newdiv);


        // newdiv.addEventListener('click',function(){

        //     // =>Method 2
        //     // month = months.indexOf(this.textContent);
        //     // console.log(month); //0 to 11
        //     // getcurmonth.textContent = months[month];
        //     // initdays();

        //     // //=>Method 1
        //     console.log(x);
        //     //month သည် alldays function အတွက်အလုပ်လုပ်
        //     month = months.indexOf(this.textContent);
        //     month = x; //month ကို override လုပ်ပေးရ။
        //     getcurmonth.textContent = months[x];
        //     initdays();

        // });

        //=>Method 3
        newdiv.onclick = updatedays(x);

        
    }

}

function updatedays(idx){

    //console.log(idx); 0 to 11
    let selectmonth = idx;

    return function(){

        month = selectmonth;//idx //override

        getcurmonth.textContent = months[month];
        initdays();

    }

}



function inityears(){

    // console.log("year");

    getuiyears.innerHTML = '';

    for(let x = startyear ; x <= endyear ; x++){

        const newdiv = document.createElement("div");
        newdiv.textContent = x;
        newdiv.classList.add('dropdown-item');

        getuiyears.appendChild(newdiv);

        // newdiv.addEventListener('click',function(){

        //     //Method 1
        //     console.log(x);
        //     year = x;
        //     getcuryear.textContent = year;
        //     initdays();

        //     //=>Method 2
        //     // year = this.textContent;
        //     // getcuryear.textContent = year;
        //     // initdays();

        // });

        //=>Method 4
        // newdiv.onclick = ()=>{

        //     year = x;
        //     getcuryear.textContent = year;
        //     initdays();

        // };

        //Method 5
        //self invoking function
        newdiv.onclick = (function(){

            let selectyear = x;

            return function(){

                year = selectyear;
                getcuryear.textContent = year;
                initdays();
                
            }
        })();

    }

}

function initdays(){

    // console.log("days");

    getcaldays.innerHTML = '';

                          //2026 , 0 Dec ရဲ့နောက်ဆုံးရက်
    let tmpdays = new Date(year,month,0);
        // console.log(tmpdays); //Wed Dec 31 2025 00:00:00 GMT+0630 (Myanmar Time)
    let getalldays = alldays(year,month); //
        // console.log(getalldays); // 31 return
    let getprevendday = tmpdays.getDay();
        // console.log(getprevendday); //index = 3 sun to wed from ai

    for(let x = 0; x <= getprevendday; x++){

        //<label class='day blanks'></label>
        let newlabel = document.createElement('label');
        newlabel.className = 'day blanks';
        getcaldays.appendChild(newlabel);

    }

               //y+1 ထားလို့သွားညီလို့မရ။
    for(let y= 0; y < getalldays; y++){

        // console.log(y); // 0
        let eachday = y+1;

        let newlabel = document.createElement('label');
        newlabel.textContent = eachday;
        newlabel.classList.add('day');

        getcaldays.appendChild(newlabel);

    }

}

function alldays(year,month){

                            //2026  Dec+1, 0
    let curalldays = new Date(year,month+1,0);
        // console.log(curalldays); //Sat Jan 31 2026 00:00:00 GMT+0630 (Myanmar Time)
    curalldays = curalldays.getDate();
        // console.log(curalldays); //31
    return curalldays; //31

}




//jQuery ချိတ်သုံးထား။

// getmonthbtn.addEventListener('click',function(){

//     if(this.lastElementChild.classList.contains('show')){
//         this.lastElementChild.classList.remove('show');
//     }else{
//         this.lastElementChild.classList.add('show');
//     }

// });


getyearbtn.addEventListener('click',function(){

    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
    }else{
        this.lastElementChild.classList.add('show');
    }

});