let btn = document.querySelector("button")
let h2 = document.querySelector("h2")
let inner = document.querySelector("#inner")
let grow = 0

btn.addEventListener("click",function(){

    let time = 50 + Math.floor(Math.random()*50)
    btn.style.pointerEvents = "none"

    let inter = setInterval(function(){
        grow++
        h2.innerHTML = grow+"%"
        inner.style.width = grow+"%"
    },time);
    setTimeout(()=>{
        clearInterval(inter)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.7
        console.log("Downloaded in",time/10,"Seconds")
    },time*100)
    
})