const page1Cont = document.querySelector(".page1-cont")
const cursor = document.querySelector(".cursor")

page1Cont.addEventListener("mousemove" ,function(e){
    cursor.style.left = e.x + "px"
    cursor.style.top = e.y + "px"
})