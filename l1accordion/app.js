//UI
const getacctitle = document.getElementsByClassName("acctitle");
const getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacctitle);  //HTMLCollection(4)
// console.log(getacccontents); //  NodeList(4) 
// console.log(getacccontents); //4
// console.log(getacccontents[0]); //
// console.log(getacccontents[3]); //

for(let x = 0; x < getacctitle.length; x++){
    //console.log(x) // 0 to 3 
    getacctitle[x].addEventListener("click",function(e){
        // console.log(x) //clicked element element idx
        // console.log(e.target);
        // console.log(this);
        // e.target.classList .toggle("active");
        this.classList.toggle("active");

        const getcontent = this.nextElementSibling;
        // console.log(getcontent);
        // console.log(getcontent.scrollHeight+"px");
        if(getcontent.style.height){
            getcontent.style.height = null; //beware can't set 0
        }else{
            getcontent.style.height = getcontent.scrollHeight+"px";
        }
    });;

    if(getacctitle[x].classList.contains("active")){
        getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";
    }
}
