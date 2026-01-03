//UI
const getform = document.getElementById('form');
const gettextbox = document.getElementById("textbox");
const getul = document.querySelector(".list-group");

getform.addEventListener('submit',(e)=>{
    // console.log("hay");
    addnew();
    e.preventDefault();
    updatelocalstorage()
})


const getlocaldbs = JSON.parse(localStorage.getItem("todos"));

if(getlocaldbs){
    getlocaldbs.forEach(getlocaldb=>addnew(getlocaldb));
}


function addnew(todo){
    let todotext = gettextbox.value ;

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const newli = document.createElement('li');

        if(todo && todo.done){
            newli.classList.add('completed');
        }

        newli.appendChild(document.createTextNode(todotext));

        getul.appendChild(newli);
        gettextbox.value = '';
        gettextbox.focus();


        newli.addEventListener("click",function(){
            newli.classList.toggle("completed");
            updatelocalstorage()
        });

                         //     right click   e = browser popupbox
        newli.addEventListener("contextmenu",function(e){
            newli.remove();
            updatelocalstorage()
            e.preventDefault();
        })
    }
}


function updatelocalstorage(){
    let getalllis = document.querySelectorAll('li');

    const todos = [];  //todo push

    getalllis.forEach(getalllis=>{
        // console.log(getalllis.textContent); li

        todos.push({
            text:getalllis.textContent,
            done:getalllis.classList.contains("completed")  //
        })
    });
    // console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
}