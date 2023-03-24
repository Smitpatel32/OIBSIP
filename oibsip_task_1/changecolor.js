
const circleElements = document.querySelectorAll('.circle');
const iphoneColor = document.getElementById('iphone') ;
const quarterColor = document.querySelectorAll('.quarter-circle');
const nav = document.getElementById('navi');
const Colors = {dark : "#59737e",blue:"#41779b",white:"#d5d5d5",green:"#687865"};

circleElements.forEach((el)=>{el.addEventListener("click", (event)=>{
    console.log(event)
    iphoneColor.src = './iphone images/'+event.target.id+'.png';
    quarterColor.forEach((el)=>{el.style.background =  "linear-gradient(180deg," + Colors[event.target.id]+ " 45%, rgba(255,255,255,1) 70%)";})
    nav.style.background =  Colors[event.target.id]
})})
