//UI
const getemail = document.getElementById('emails'),
      gettextarea = document.querySelector('textarea'),
      getbtn = document.querySelector('.btn'),
      getemcontainer = document.querySelector('.emailcontainer');


getemail.focus();

getemail.addEventListener('keyup',function(e){
  //console.log(this.value) # no arrow function
  createemaillist(this.value);
})

function createemaillist(inputtext){
  // console.log(inputtext);
  //split by (',')
  //const eitems = inputtext.split(',');
  //console.log(eitems);

  //remove empty.space
  //const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
  //console.log(eitems;)

  //remove empty ,space and space text                           //space     map=margin
  const eitems = inputtext.split(",").filter(rmempty=>rmempty.trim() !== '').map(rmtxtempty=>rmtxtempty.trim());
  //console.log(eitems);

  getemcontainer.innerHTML="",

  eitems.forEach(function(eitem){
    // console.log(eitem);
    const newspan = document.createElement('span');
    newspan.textContent = eitem;
    newspan.classList.add('email');
    //console.log(newspan);
    getemcontainer.appendChild(newspan);
  })
}

getbtn.addEventListener('click',function(e){
  e.preventDefault();
  sendemail();
});

function sendemail(){
  const getallemails = document.querySelectorAll('.email');
  const gettxtvalue = gettextarea.value;

  //console.log(getallemails);
  //console.log((gettxtvalue));

  var persons=[] //obj

  if(getallemails.length > 0 && gettxtvalue){
    getallemails.forEach(function(getallemail){

      persons.push({
        email:getallemail.textContent,
        message:gettxtvalue
      })
    })
    console.log(persons);
  }else{
    window.alert("Enter Message");
    gettextarea.focus();
  }
}
