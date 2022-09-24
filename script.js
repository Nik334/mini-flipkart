/* slide show */
var slideindex, slides, captiontext;
function initSlider(){
  slideindex=0;
  slides = document.getElementsByClassName("imgholder");
  slides[slideindex].style.opacity=1;

}
initSlider();
function plusSlide(n)
{
  moveSlide(slideindex+1);
}
function moveSlide(n){
  var i,current,next;
  var moveSlideAminClass={
    forCurrent:"",
    forNext:""
  }
  if(n>slideindex)
  {
    if(n>slides.length){n=0}
    moveSlideAminClass.forCurrent="moveLeftCurrentSlide";
    moveSlideAminClass.forNext="moveLeftNextSlide";
  }
  else if(n<slideindex)
  {
    if(n<0){n=slides.length-1}
    moveSlideAminClass.forCurrent="moveRightCurrentSlide";
    moveSlideAminClass.forNext="moveRightNextSlide";
  }
  if(n!=slideindex){
    next=slides[n];
    current=slides[slideindex];
    for(i=0;i<slides.length;i++)
    {
      slides[i].className="imgholder";
      slides[i].style.opacity=0;
    }
    current.classList.add(moveSlideAminClass.forCurrent);
    next.classList.add(moveSlideAminClass.forNext);
    slideindex=n;
  }
}
/* end of slide show*/

/*login button*/
document.getElementById('loginbutton').addEventListener('click',function(){
  document.querySelector('.login-model').style.display='flex';
})
document.querySelector(".close").addEventListener('click',function(){
  document.querySelector('.login-model').style.display='none';
})
/*end of login button*/
/*signup button*/
document.getElementById('signupbutton').addEventListener('click',function(){
  document.querySelector('.signup-model').style.display='flex';
})
document.querySelector("#close").addEventListener('click',function(){
  document.querySelector('.signup-model').style.display='none';
})
/*end of signup button*/
/*contact us button*/
document.getElementById('contactus-button').addEventListener('click',function(){
  document.querySelector('.contactus-model').style.display='flex';
})
document.querySelector("#close-contactus").addEventListener('click',function(){
  document.querySelector('.contactus-model').style.display='none';
})
/*end of contact us button*/
