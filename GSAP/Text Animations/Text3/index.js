
const myText = new SplitType("#my-text")

        // gsap.to(".char" , {
        //     y : 0,
        //     stagger : 0.05,
        //     delay : 0.2,
        //     duration : 0.1,
        //     scrollTrigger : {
        //         trigger : "#my-text",
        //         start : "400",
                
        //     }
        // })

        gsap.from(".char" , {
            y : 500,
            duration : 1,
            scrollTrigger : {
                trigger : ".char",
                  markings : true,
                start : "top 50%",
                end : "bottom 50%",
                scrub : true,
              
            }
        })
       