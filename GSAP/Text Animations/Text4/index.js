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

