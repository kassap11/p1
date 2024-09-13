let mode=document.querySelector("body")
let changemode=document.querySelector(".links p")


let localmode=localStorage.getItem('mode')||"light"
mode.setAttribute("mode",localmode)
changemode.addEventListener("click",()=>{
    let getmode=mode.getAttribute("mode")
    if (getmode==="light") {
        mode.setAttribute("mode","dark")
        localStorage.setItem("mode","dark")
        
    }else{
        mode.setAttribute("mode","light")
        localStorage.setItem("mode","light")
    }
})