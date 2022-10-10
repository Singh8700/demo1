function transX(){
  const item = document.querySelectorAll(".transX");
  item.forEach((items)=>{
    window.addEventListener("scroll",()=>{
      let revealTop = items.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    let revealPoint = 200;
    if(revealTop < windowHeight - revealPoint){
      items.style.transform=`translateX(0%) scale(1)`;
      items.style.opacity=1;
      items.style.transition="0.5s";
    }else{
      items.style.transform=`translateX(-100%) scale(1)`;
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
function cards(){
  const Cards = document.querySelectorAll("#card");
  Cards.forEach((items)=>{
    items.addEventListener("mouseenter",()=>{
        items.style.transform = `perspective(200) scale(1.2)`;
         this.style.marginTop=`-30%`;
        item.style.marginTop="30%";
    })
    items.addEventListener("mouseleave", () =>{
      items.style.transform = `perspective(400) scale(1)`;
    })
  })
}
//cards();
