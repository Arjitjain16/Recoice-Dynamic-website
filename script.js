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

var tl1 = gsap.timeline()

tl1.from(" .page1-cont h1",{
  y : 60,
  opacity : 0,
  opacity : 0.3,
  duration : 0.7
})

//-----------page2-------------------------------------------------------

gsap.from(".page2_el h1, .page2-upper",{
  y:67,
  stagger:0.2,
  duration:0.7,
  opacity : 0.1,
  scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      start:"top 68%",
      end:"top 37%",
      // markers:true,
      scrub:3.5
  }
})

//--------------------------------------------------------------page3----------

gsap.from(".page3-upper",{
  y:50,
  stagger:0.3,
  duration:0.2,
  opacity : 0.1,
  scrollTrigger:{
      trigger:".page3",
      scroller:".main",
      start:"top 68%",
      end:"top 37%",
      // markers:true,
      scrub:2
  }
})



//-----------------------------------------------------page4-----------
const tl4 = gsap.timeline()

tl4.from(".ele4 h1",{
  y:50,
  stagger:0.3,
  duration:0.2,
  opacity : 0.1,
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    start:"top 50%",
    end:"top 37%",
    // markers:true,
    scrub:2
  }

})

//-------------------------cursor2------------


const page5 = document.querySelector(".page5")
const cursor2 = document.querySelector(".cursor2")

page5.addEventListener("mousemove" ,function(e){

    gsap.to(cursor2 , {
        x : e.x,
        y : e.y
    })
})

page5.addEventListener("mouseenter" ,function(e){
    gsap.to(cursor2 , {
        scale : 1
    })
   
})
page1Cont.addEventListener("mouseleave" ,function(e){
    gsap.to(cursor2 , {
        scale : 0
    })
})

