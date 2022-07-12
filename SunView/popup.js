moreBtn=document.querySelectorAll(".more");


  
moreBtn.forEach((element) => {
    element.onclick=function(){
        document.querySelector(".background-area").style.display='flex';
    }
})

closeBtn=document.querySelector(".close");
closeBtn.onclick=function(){
    document.querySelector(".background-area").style.display='none';
    delete moreBtn;
};


// phone number
morephone=document.querySelector(".phone-num");

morephone.onclick=function(){
    document.querySelector(".background-area").style.display='flex';
    document.querySelector(".TRY").style.display='none';

}

closePhone=document.querySelector(".stop");
closePhone.onclick=function(){
    document.querySelector(".background-area").style.display='none';
    delete morephone;
}