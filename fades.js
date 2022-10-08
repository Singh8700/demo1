function transX(){
  const item = document.querySelectorAll(".transX");
  item.forEach((items)=>{
    window.addEventListener("scroll",()=>{
      let revealTop = items.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    let revealPoint = 200;
    if(revealTop < windowHeight - revealPoint){
      items.style.transform=`translateX(0%)`;
      items.style.opacity=1;
      items.style.transition="0.5s";
      console.log("work")
    }else{
      items.style.transform=`translateX(-100%)`;
      items.style.transition = "0.5s";
      items.style.opacity=0;
      console.log("not work");
    }
    })
  })
}
transX();
//2nd fade effect


function transY(){
  const item = document.querySelectorAll(".transY");
  item.forEach((items)=>{
    window.addEventListener("scroll",()=>{
      let revealTop = items.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    let revealPoint = 200;
    if(revealTop < windowHeight - revealPoint){
      items.style.transform=`translateX(0%)`;
      items.style.opacity=1;
      items.style.transition="0.5s";
      console.log("work")
    }else{
      items.style.transform=`translateX(200%)`;
      items.style.transition = "0.5s";
      items.style.opacity=0;
      console.log("not work");
    }
    })
  })
}
transY();
