/*
@keyframes tit{
  0%{
    transform: translateX(-100%);
    opacity: 0;
  }
  25%{
    transform: translateX(50%);
    opacity: 0.2;
  }
  50%{
    transform: translateX(-20%);
    opacity: 0.5;
  }
  100%{
    transform: translateX(0%);
    opacity: 1;
  }
}*/
function lr(){
  const title = document.querySelectorAll('.title');
  const logo = document.querySelector(".logo");
  const nav = document.querySelector("nav");
  const pera = document.querySelector(".pera");
  window.addEventListener("load",()=>{
    title.forEach((item)=>{
      item.style.transform=`translateX(0%)`;
      item.style.opacity=1;
    })
    logo.style.transform=`scale(1)`;
    nav.style.transform=`scale(1)`;
    nav.style.opacity=1;
    pera.style.transform=`translateX(0%)`;
    pera.style.opacity=1;
  })
}
lr();
