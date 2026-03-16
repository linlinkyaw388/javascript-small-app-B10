// UI

const getdivarea = document.getElementById('divarea');

getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

const getbtns = document.querySelectorAll('.btn');

// looping first
getbtns.forEach(function(getbtn){

    getbtn.addEventListener("click",function(){

        // const getcommad = getbtn.getAttribute('data-command');
        // console.log(getcommad);
        const getcommand = getbtn.dataset['command']; //Dom stringmap ရဲ့အောက်က command နဲ့ထွက်။ /dataset / data() ->only for qury
        // console.log(getcommand);

        if(getcommand === 'clearText'){

            getdivarea.innerHTML = '';

        }else if(getcommand === 'createLink' || getcommand === 'insertImage'){

            const geturl = prompt("Enter your website link","https://");
            document.execCommand(getcommand,false,geturl);

        }else if(getcommand === 'paste'){

            navigator.clipboard.readText().then(function(text){
                getdivarea.innerHTML += text
            });

        }else if(getcommand === 'foreColor'){

            // console.log(getbtn.value);
            document.execCommand(getcommand,false,getbtn.value);

        }else if(getcommand === 'backColor'){

            document.execCommand(getcommand,false,getbtn.value);

        }else if(getcommand === 'fontName'){

            document.execCommand(getcommand,false,getbtn.value);

        }else{

            //document .execommand (command , showui optional , false , value)
            document.execCommand(getcommand,false,null);//para 3

        }

        
    })
})



function upcasefun(){
    getdivarea.style.textTransform = 'uppercase';
}

function lwcasefun(){
    getdivarea.style.textTransform = 'lowercase';
}

function capcasefun(){
    getdivarea.style.textTransform = 'capitalize'
}