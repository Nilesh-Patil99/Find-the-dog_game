let theight= (window.innerHeight-100)
let twidth =(window.innerWidth-100)
let ht= (Math.floor(Math.random()*theight));
let wt= (Math.floor(Math.random()*twidth));

document.querySelector(".dog").style.top=ht+"px"
document.querySelector(".dog").style.left=wt+"px"

let audio = new Audio("public/dog.mp3")
let end = new Audio("public/Evil laugh.mp3")


let hypo1= ((theight-(ht+50))*(theight-(ht+50)))+((twidth-(wt+50))*(twidth-(wt+50)))
   hypo1= Math.sqrt(hypo1)

    let hypo2= ((theight-(ht+50))*(theight-(ht+50)))+((wt+50)*(wt+50))
   hypo2= Math.sqrt(hypo2)

    let hypo3= ((ht+50)*(ht+50))+((wt+50)*(wt+50))
   hypo3= Math.sqrt(hypo3)

    let hypo4= ((ht+50)*(ht+50))+((twidth-(wt+50))*(twidth-(wt+50)))
   hypo4= Math.sqrt(hypo4)
   let maxd= Math.max(hypo1,hypo2,hypo3,hypo4)
   console.log(maxd)

document.querySelector("body").addEventListener("click", function (eve){
    let cHeight= eve.clientY;
    let cWidth= eve.clientX;
   
    let distance= (((ht+50)-cHeight)*((ht+50)-cHeight))+((cWidth-(wt+50))*(cWidth-(wt+50)))
    distance= Math.sqrt(distance)
 console.log(distance)

 let perce= ((maxd-distance)/maxd)
 console.log(perce)
 document.querySelector(".close").innerHTML=Math.round(perce*100)+"% close"

 audio.volume= perce
 audio.play()
 
    
})

document.querySelector(".dog").addEventListener("click", function(){
    document.querySelector(".dog").classList.add("pressed");
    end.play()
    
})
