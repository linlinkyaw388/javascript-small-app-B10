//UI
const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');
console.log(slides); //HTMLCollection(3) looping ပတ်လို့တော့မရ။
console.log(dots); //NodeList(3)

let currslide = 1;

// prev ကို var အရင်ကြေညာပြီးနားထောင်လည်းရ။
document.getElementById("prev").addEventListener('click',function(){
    // console.log("I am prev");
    // console.log(currslide -=1);
    // console.log(currslide--);
     carousel(currslide -=1);
});
document.getElementById("next").addEventListener('click',function(){
    // console.log("I am next");
    // console.log(currslide +=1);
    // console.log(currslide++);
     carousel(currslide +=1);
});

// index num နှင့်လာသည်။
carousel(currslide);



function carousel(slidenum){

    let x,y;
    //hide all slides
    for(x=0; x < slides.length; x++){
        slides[x].style.display = "none"
    }

    //hide all dots
    for(y=0; y < slides.length; y++){
        // dots[y].className = "dot"
        //dots[y].className = dots[y].className.replace("active","");
        dots[y].classList.remove("active");
    }

    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }
    //currsilde 123 or 321
    // console.log(currslide);
    slides[currslide - 1].style.display = "block";
    //dots[currslide -1].className = "dot active";
    //dots[currslide -1].className += " active";
    dots[currslide - 1].classList.add("active");
}
// slides       0         1           2
// currslide  1-1        2-1         3-1 =2
// dots  1-1        2-1         3-1 =2

for(let q=0; q < dots.length; q++){
    dots[q].addEventListener('click',function(){
        currslide = this.getAttribute('data-bs-slide-top');
        carousel(currslide);
        //console.log("hey");
    })
}


