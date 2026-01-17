//Get UI
const languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
const colors = ['red',"skyblue","violet",'yellow'];
const gettxtani = document.querySelector('.txtani');
const gettxtlignts = document.querySelectorAll('.text-light'); //Nodelist foreach

console.log(languages.indexOf('laravel'));//3 give value take index

console.log(colors[languages.indexOf('reactjs')]);  //skyblue
console.log(colors[languages.indexOf('vuejs')]);  //violet


function* generator(){
    var idx = 0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx = 0;
        }
    }
}

const genfun = generator();
// console.log(genfun.next()); //{value: 0, done: false}
// console.log(genfun.next().value); //1
// console.log(genfun.next().value); //2
// console.log(genfun.next().value); //3
// console.log(genfun.next().value); //0

// console.log(languages[genfun.next().value]); //nodejs
// console.log(languages[genfun.next().value]); //reactjs
// console.log(languages[genfun.next().value]); //vuejs
// console.log(languages[genfun.next().value]); //laravel
// console.log(languages[genfun.next().value]); //nodejs

function showwords(word){

    // console.log(word); //nodejs
    // console.log(word[0]); //n

    let x = 0;

    gettxtani.innerHTML = '';
    gettxtani.classList.add(colors[languages.indexOf(word)]);
    // gettxtani.innerHTML = word;
    // gettxtani.innerHTML = word[0]; //n
    // gettxtani.innerHTML += word[1]; //no
    // gettxtani.innerHTML += word[2]; //d

    let showinterval = setInterval(function(){
        if(x >= word.length){
            clearInterval(showinterval);
            deletewords();
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }
    },200);


}

function deletewords(){

    let getword = gettxtani.innerHTML;

    let getlastidx = getword.length-1; //6-1

    let delinterval = setInterval(() => {
        
        if(getlastidx >= 0){                          //substring တစ်လုံးချင်းဖျက်
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
            getlastidx--;
        }else{
            //remove old color
            gettxtani.classList.remove(colors[languages.indexOf(getword)]);
            //get new language
            showwords(languages[genfun.next().value]);
            clearInterval(delinterval);
        }
    }, 200);

}




showwords(languages[genfun.next().value]);//showwords(nodejs)



gettxtlignts.forEach(function(gettxtlignt){

    let arrtexts = gettxtlignt.textContent.split("");

    gettxtlignt.textContent = "";

    arrtexts.forEach(function(arrtext,idx){

        let newem = document.createElement("em");
        newem.textContent = arrtext;
        newem.style.animationDelay = `${idx * 0.5}s`;
        
        gettxtlignt.append(newem);
    })
})