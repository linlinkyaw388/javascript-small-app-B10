// UI

const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
const getboxtitle = document.getElementById('boxtitle');


getbox.addEventListener('click',function(e){
    // getbtns.classList.toggle('show');
    getbtns.classList.add('show');

    smallmenu(e.target);
});

getbox.addEventListener('dblclick',function(){
    getbtns.classList.remove('show');
});


function smallmenu(ele){
    console.log(ele);

    if(ele.classList.contains('btn-icon') || ele.classList.contains('icn')){
        // console.log('yes');
        const geturl = ele.getAttribute('data-link'); //
        window.location.href  = geturl;
    }else if(ele.classList.contains('icn')){
        const geturl = ele.parentElement.getAttribute('data-link');
        window.location.href  = geturl;
    }else{
        // console.log('no');
    }
}


drageme(getbox);

function drageme(box){
    console.log('I am main dragme function');

    let getcx,getcy,setcx,setcy;

    if(getboxtitle){
        getboxtitle.onmousedown = mousedown;
    }

    function mousedown(e){
        console.log('I am main mousedown function');

        getcx = e.clientX;
        getcy = e.clientY;
        console.log('step 1 = ',getcx,getcy);

        document.onmousemove = dragnow;
        document.onmouseup = stopdarg;

        getbtns.classList.remove('show');

    }

    function dragnow(e){
        console.log('I am main dragnow function');

        setcx = getcx - e.clientX; 
        setcy = getcy - e.clientY;
        console.log('step 2 = ',setcx,setcy); //step 2 =  0 -1

        getcx = e.clientX;  //လက်ရှိရောက်နေတဲ့နေရာကိုအသစ်ပြန်ယူတာ။အပေါ်ကကောင်မဟုတ်ဘူး။
        getcy = e.clientY;  //override

        const btnleft = box.offsetLeft;  //အတိအကျရအောင်လို့။
        const btntop = box.offsetTop;
        // console.log(btnleft,btntop);
        console.log(btnleft-setcx,btntop-setcy);

        box.style.left = (btnleft-setcx) + "px";
        box.style.top = (btntop-setcy) + "px";

        

    }

    function stopdarg(){
        console.log('I am main stopdarg function');
        document.onmousemove = null;
        document.onmouseup = null;
    }

}