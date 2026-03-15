let ipl = [
    { team: "CSK", primary: "blue", secondary: "black" },
    { team: "DC", primary: "navy", secondary: "yellow" },
    { team: "GT", primary: "gold", secondary: "black" },
    { team: "KKR", primary: "purple", secondary: "gold" },
    { team: "LSG", primary: "red", secondary: "orange" },
    { team: "MI", primary: "navy", secondary: "yellow" },
    { team: "PBKS", primary: "red", secondary: "gold" },
    { team: "RCB", primary: "gold", secondary: "red" },
    { team: "SRH", primary: "orange", secondary: "red" },
    { team: "RR", primary: "magenta", secondary: "beige" }
]

let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
let main = document.querySelector("main")

btn.addEventListener("click", function () {
    let win = ipl[Math.floor(Math.random() * ipl.length)]
    
    h1.innerHTML = win.team
    h1.style.backgroundColor = win.primary
    main.style.backgroundColor = win.secondary

})
