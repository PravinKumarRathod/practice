let btn = document.querySelector("button")
let main = document.querySelector("main")
let hval = ["Blame plaused","Not commited yet","I am the worst","Stop procrastination right now","start reading books!!","Stop skiping classes","My head is hurting like hell"]

btn.addEventListener("click",function(){
    let h1 = document.createElement("h1")

    let a = Math.floor(Math.random()*hval.length)
    
    h1.innerHTML = hval[a]

    h1.style.position = 'absolute'
    let x = Math.random()*80
    let y = Math.random()*80
    let rot = Math.floor(Math.random()*361)
    h1.style.left = x+"%"
    h1.style.top = y+"%"
    h1.style.rotate = rot+"deg"

    let zizi = Math.random()*2
    h1.style.scale = zizi
    // h1.style.position = x+"%"
    // h1.style.position. = y+"%"
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    h1.style.color = `rgb(${c1},${c2},${c3})`

    main.appendChild(h1)
    })

