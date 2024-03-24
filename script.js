function locmotive(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed"*/
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
locmotive()

//------------Cursor move effect ---------------------------------------------------
function cursorEffect(){
    const page1Cont = document.querySelector(".page1-cont")
const cursor = document.querySelector(".cursor")

page1Cont.addEventListener("mousemove" ,function(e){
    // cursor.style.left = e.x + "px"
    // cursor.style.top = e.y + "px"

    gsap.to(cursor , {
        x : e.x,
        y : e.y
    })
})

page1Cont.addEventListener("mouseenter" ,function(e){
    gsap.to(cursor , {
        scale : 1
    })
   
})
page1Cont.addEventListener("mouseleave" ,function(e){
    gsap.to(cursor , {
        scale : 0
    })
})

}
cursorEffect()

//-----------page2-------------------------------------------------------

// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// Create animation and ScrollTrigger
gsap.from(".page2_el h1, .page2-upper",{
  y:60,
  stagger:0.2,
  duration:0.85,
  opacity : 0.1,
  scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      start:"top 68%",
      end:"top 37%",
      // markers:true,
      scrub:4
  }
})