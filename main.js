const list = document.querySelectorAll(".list");
function lists(){
  list.forEach((item)=>{
    item.classList.remove("active");
    this.classList.add("active");
  })
}
list.forEach((item)=>{
  item.addEventListener("click",lists);
})
function bg(){
  const bgk= document.querySelectorAll(".bg");
  //bgk.style.backgroundSize=`100% 100%`;
  window.addEventListener("scroll",()=>{
    let x = Math.floor(window.scrollX);
    let y = Math.floor(window.scrollY);
    //console.log(y);
  bgk.forEach((item)=>{
    if(y >= 200){
     item.style.backgroundSize=`calc(50% + ${y}%) 100%`;
     item.style.backgroundPosition=`center`;
     item.style.opacity=`${y/100}%`;
     //bgk.style.opacity=1;
     item.style.transition=`0.5s linear`;
     //console.log("go")
   }else{
     item.style.backgroundSize=`100% 100%`;
    // bgk.style.opacity=1;
     item.style.transition=`0.5s linear`;
     item.style.opacity=1;
    // console.log(y);
   }
   
  })
   
  })
}
bg();
