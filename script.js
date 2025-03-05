var tl = gsap.timeline();

function page1Animation() {
  tl.from("nav h1,nav h4,nav button", {
    y: -40,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.4,
    },
    "-=0.2"
  );
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.2,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      
    },
    "-=0.5"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    duration: 0.5,
    y: 30,
    stagger: 0.2,
  });
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
           trigger:".section2",
           scroller: "body",
        
           start:"top 40%",
           end:"top 0%",
           scrub:2
           
          
           
          
    
        }
     })
     tl2.from(".services",{
        y:70,
        opacity:0,
        duration:1
     
     })
    
    
    
     tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:3
     },"line1")
    
     tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:3
     },"line1")
    
     tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:3
         },"line2")
        
         tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:3
         },"line2")
     
}

function page3Animation(){
  var tl3=gsap.timeline({
    scrollTrigger:{
      trigger:".container2",
      scroller:"body",
      start:"top 80%",
      end:"bottom 70%",
    
      scrub:2
     }
  })
  tl3.from(".container2",{
    scale:0,
    opacity:0.6,
    duration:0.3
  })
}

function page4Animation(){
  gsap.from(".case-study",{
    y:50,
    opacity:0,
    scrollTrigger:{
      trigger:".case-study",
      scroller:"body",
      scrub:2,
     
      start:"top 80%",
      end:" bottom 100%"
    }
  })
  gsap.from(".container3",{
    opacity:0,
  scale:0,
  duration:1,
  scrollTrigger:{
    trigger:".dad",
    scroller:"body",
   
    scrub:2,
    start:"top 60%",
    end:"bottom 80%"
  }
  })
}

//calling functions:
page1Animation();
page2Animation();
page3Animation();
page4Animation();