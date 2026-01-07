//UI
const getimageboxes = document.querySelectorAll('.imgbox')
// console.log(getimageboxes);

                                 //second parameter
getimageboxes.forEach(function(getimagebox,idx){
     //console.log(imagebox);

     getimagebox.addEventListener('click',function(){
      //console.log(getimagebox);
      //console.log(idx);  // 0 to 4
      showbox(idx);     //this.add(show)

     })

})
// သင်က တတိယမြောက် box ကို နှိပ်လိုက်ရင် idx ဟာ 2 ဖြစ်သွားပါမယ်။
// ပြီးရင် အဲဒီ 2 ကို showbox(2) ဆိုပြီး နောက် function ဆီ လက်ဆင့်ကမ်း ပေးလိုက်ပါတယ်။
function showbox(idx){

  console.log('from parameter = ',idx);  // 0 to 4

  getimageboxes.forEach(function(imagebox,curidx){
    //consol.log("current idx = ",curidx);

    if(idx === curidx){
      imagebox.classList.add('show');

        imagebox.addEventListener('click',function(e){
        //console.log(e.target);
        if(e.target.className === 'btn-close'){
          //console.log('hi');
          imagebox.classList.remove('show');
        }

        if(e.target.classList.contains('btn')){

          //consol.log('hay')
          //const getsubbtn = imagebox.querySelector('.btn');
                          //  အများကြီးကမှ လက်ရှိကောင် idx
          const getsubbtn = getimageboxes[idx].querySelector('.btn');
          getsubbtn.textContent = "subscribed";
        }
      })
    }else{
      imagebox.classList.remove('show');
    }

    

    

  });

}