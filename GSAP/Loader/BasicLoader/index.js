function startLoader(){
    const counterElement = document.querySelector(".counter")
    let currentValue = 0;

    function updateCounter(){
            if(currentValue === 100){
                return;
            }

            currentValue += Math.floor(Math.random()*10)+1;

            if(currentValue > 100){
                currentValue = 100;
            }

            counterElement.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 50;

            setTimeout(updateCounter , delay);
    }

    updateCounter();
}

startLoader();

gsap.to(".counter" , 0.25,{
    delay : 3,
    opacity : 0,
})

gsap.to(".block" , {
    stagger : 0.05,
    delay : 4,
    height : 0,
    // ease : "power4 .inOut"
   
}) 

const mainText = new SplitType(".main-text");

const timeline = gsap.timeline();
timeline
.from(".char" , {
    delay : 4.5,
    stagger : 0.05,
    rotateY : -90,
  } , "<0.5")

  .to(".char" , {
    rotateY : 0,
    stagger : 0.05,
  } , "<1")

  const timelineP = gsap.timeline();
  const titles = gsap.utils.toArray(".p-innerText");
  
  titles.forEach(title => {
    const text = new SplitType(title);
   
    
      if(text.lines[0].textContent != "Aathi Eswar S"){
        timelineP
          .from(text.chars , {
            opacity : 1,
            // y : 80,
            rotateY : 90,
            stagger : 0.05,
          } , "<0.5")
  
          .to(text.chars , {
            delay : 0.3,
            opacity : 1,
            // y : -80,
            rotateY : -90,
            stagger : 0.05,
          } , "<1")
      }
  
      const mainTextSplit = new SplitType(".main-text");
      gsap.to(".main-text" , {
            delay : 6.5,
            opacity : 1,
            // y : -80,
          
            stagger : 0.5,
          } , "<1")
  
      const t2 = gsap.timeline();
      t2.from(".char" , {
        delay : 6,
        opacity : 0,
        y : 100,
        stagger : 0.02,
      })
      .to(".char" , {
      
        opacity: 1, 
        y : 0,
      })
      .to(".char" , {
        scale : 1.05,
        delay : 1,
      })
  
    
    
    
  })
  
  