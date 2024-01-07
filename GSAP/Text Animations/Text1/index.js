
const myText = new SplitType("#my-text")

        gsap.to(".char" , {
            y : 0,
            stagger : 0.05,
            delay : 0.2,
            duration : 0.01,
            scrollTrigger : {
                trigger : "#my-text",
                start : "top 60%",
                end : "bottom 20%",
                // markers : true,
                // scrub : true,
                toggleActions : "play reverse play reverse",
           
                
            }
        })

       

        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
          console.log(e)
        })
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)