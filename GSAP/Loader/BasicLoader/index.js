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

