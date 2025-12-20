//UI
let gettablinks = document.getElementsByClassName("tablinks"),
    gettabpanels = document.getElementsByClassName("tab-panel"),
    getbtnclose = document.querySelectorAll(".btn-close");

    
    let tabpanels = Array.from(gettabpanels);
    //consoel.log(tabpanels); //array

    function gettab(evn,link){
        // console.log(evn.target);
        // console.log(evn.currentTarget);
        // console.log(link);

        //Remove All active //forEach  နဲ့ပတ်မရလို့ for loop နဲ့ပတ်ရ။
        for(let x=0; x < gettablinks.length; x++){
            // console.log(x);  //0 to 3
            gettablinks[x].className = gettablinks[x].className.replace(" active","");

            //hide tabpanel by btn-close 0 to 3 ပဲဖြစ်လို့ x နဲ့ပဲရေးလိုက်
            getbtnclose[x].addEventListener("click",function(){
                this.parentElement.style.display = 'none';
            })
        }


        //Add single active

        // evn.target.className = "tablinks active";
        // evn.target.className += " active";
        // evn.currentTarget.className += " active";
        // evn.target.className = evn.target.className.replace("tablinks","tablinks active");
        evn.target.classList.add("active");


        //Hide All panel
        tabpanels.forEach(function(tabpanel){
            tabpanel.style.display = "none";
        })


        //show single panel
        // link ထဲရောက်နေပြီ။
        document.getElementById(link).style.display = "block";
    }

    document.getElementById("autoclick").click();