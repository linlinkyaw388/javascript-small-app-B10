//UI
const getmodal = document.querySelector(".modal");
const getmodalimg = document.querySelector(".modal-img");
const getcaption = document.querySelector(".caption");
const getbtnclose = document.querySelector(".btn-close");

function shownow(ele){
    // console.log(ele);
    // console.log(ele.target);
    // console.log(ele.target.src);
    // console.log(ele.target.alt);
    getmodal.style.display="block";
    getmodalimg.src = ele.target.src;
    getcaption.textContent = ele.target.alt;
}


// getbtnclose.addEventListener("click",function(){
//     getmodal.style.display = 'none';
// })
getbtnclose.onclick=function(){
    getmodal.style.display="none";
}

document.addEventListener("click",function(e){
    if(e.target === getmodal){
        getmodal.style.display="none";
    }
})