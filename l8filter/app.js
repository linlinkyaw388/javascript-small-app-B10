//UI
const getinput = document.getElementById('search');

let getsortazm1btn = document.getElementById('sortazm1'),
    getsortzam1btn = document.getElementById('sortzam1'),
    getsortazm2btn = document.getElementById('sortazm2'),
    getsortzam2btn = document.getElementById('sortzam2');

const getul = document.getElementById('member');
const getlis = getul.getElementsByTagName('li');
// console.log(getlis[0]);

getinput.addEventListener('keyup',filter);

getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',sortingzam1);
getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);

function filter(){
    const filter = this.value.toLowerCase();
    // console.log(filter);

    for(let x = 0; x < getlis.length; x++){
        // console.log(x);  // 0 to 29

        // getlink = getlis[x].getElementsByTagName('a');
        // getlink = getlis[x].getElementsByTagName('a')[0];  html collection 'a' [0]
        getlink = getlis[x].querySelector('a');//အများကြီးထဲကမှ တစ်ခုပေါ်။
        // console.log(getlink);

        const getatext = getlink.textContent || getlink.innerText;
        // console.log(getatext);
        // console.log(getatext.toLowercCase());

        if(getatext.toLowerCase().indexOf(filter) > -1){
            getlis[x].style.display = "";
        }else{
            getlis[x].style.display = "none";
        }

       
    }
}


//method 2

function sortingazm1(){
    console.log('method 1 AZ');

    let lis = [];

    for(let i = 0; i < getlis.length; i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);
        
        lis.push(getlis[i].textContent);
    }

    //console.log(lis);
    console.log(lis.sort());
    console.log(lis.reverse());
    console.log(lis.sort().reverse());

    const azresults  = lis.sort();
    console.log(azresults);

    getul.innerHTML = ""; //members html တွေကိုဖျောက်တာ။

    azresults.forEach(function(azresult){
        //console.log(azresult);
        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:void(0);";

        newlink.appendChild(document.createTextNode(azresult));

        newli.appendChild(newlink);
        //console.log(newli);
        getul.appendChild(newli);
    })
}


function sortingzam1(){
    console.log('method 1 AZ');

    let lis = [];

    for(let i = 0; i < getlis.length; i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);
        
        lis.push(getlis[i].textContent);
    }

    //console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.reverse());
    // console.log(lis.sort().reverse());

    const azresults  = lis.reverse();
    // console.log(azresults);

    getul.innerHTML = ""; //members html တွေကိုဖျောက်တာ။

    azresults.forEach(function(azresult){
        //console.log(azresult);
        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:void(0);";

        newlink.appendChild(document.createTextNode(azresult));

        newli.appendChild(newlink);
        //console.log(newli);
        getul.appendChild(newli);
    })
}

//ဒုတိယစာလုံးတွေပါစစ်တာ။
// console.log(getlis[0].textContent.toLocaleLowerCase()); //ag ag
// console.log(getlis[1].textContent.toLocaleLowerCase()); //ag ag

// if(getlis[0].textContent.toLocaleLowerCase() > getlis[1].textContent.toLocaleLowerCase()){
//     console.log(true);
// }else if(getlis[0].textContent.toLocaleLowerCase() === getlis[1].textContent.toLocaleLowerCase()){
//     console.log('equal');
// }else{
//     console.log(false);
// }

function sortingazm2(){
    console.log('method 2 AZ');

    let shouldswitch = true;
    let switching = true;

    //console.log(getlis.length); //35
    while(switching){
        switching = false;  //while မရပ်မနား looping ပတ်။

        let i;
        for(i = 0;i < getlis.length- 1; i++){
            // console.log(i);  // 0 to 34 //after - 1 = 0 to 33 //တစ်ခု နှင့်တစ်ခုနှိုင်းယှဉ်မှာဖြစ်၍ နောက်ဆုံးကောင် error မတတ်ရန်။

            shouldswitch = false;

                   // 0  = Ag Ag                         > 1 = Mg Mg
            if(getlis[i].textContent.toLocaleLowerCase() > getlis[i+1].textContent.toLocaleLowerCase()){

                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){
            //parent.insertBefore(new,existing)
            //   1     ul                           2
            getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
            switching = true;
        }
    }
}

function sortingzam2(){
    console.log('method 2 ZA');

    let shouldswitch = true;
    let switching = true;

    //console.log(getlis.length); //35
    while(switching){
        switching = false;  //while မရပ်မနား looping ပတ်။

        let i;
        for(i = 0;i < getlis.length- 1; i++){
            // console.log(i);  // 0 to 34 //after - 1 = 0 to 33 //တစ်ခု နှင့်တစ်ခုနှိုင်းယှဉ်မှာဖြစ်၍ နောက်ဆုံးကောင် error မတတ်ရန်။

            shouldswitch = false;

                   // 0  = Ag Ag                         < 1 = Mg Mg
            if(getlis[i].textContent.toLocaleLowerCase() < getlis[i+1].textContent.toLocaleLowerCase()){

                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){
            //parent.insertBefore(new,existing)
            //   1     ul                           2
            getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
            switching = true;
        }
    }
}