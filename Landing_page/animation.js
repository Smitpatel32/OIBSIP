// Showing Animations
const hiddenElements=  document.querySelectorAll('.hidden');

let x = new IntersectionObserver((el)=>{
    el.forEach((element)=>{
        if (element.isIntersecting){
            element.target.classList.add('show');
        }
        else{
            element.target.classList.remove('show'); 
        }
    })
})
hiddenElements.forEach((el)=>x.observe(el));



const rotateElements =  document.querySelectorAll('.rotate');

let y = new IntersectionObserver((el)=>{
    el.forEach((element)=>{
        if (element.isIntersecting){
            element.target.classList.add('un-rotate');
        }
        else{
            element.target.classList.remove('un-rotate'); 
        }
    })
})

rotateElements.forEach((el)=>y.observe(el));


const moveElements=  document.querySelectorAll('.move');

let z = new IntersectionObserver((el)=>{
    el.forEach((element)=>{
        if (element.isIntersecting){
            element.target.classList.add('un-move');
        }
        else{
            element.target.classList.remove('un-move'); 
        }
    })
})

moveElements.forEach((el)=>z.observe(el));