let arr = [
  {
    "username": "Aarav Mehta",
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "profession": "Software Engineer",
    "description": "Passionate about building scalable web applications and exploring new technologies.",
    "tags": ["JavaScript", "React", "Node.js"]
  },
  {
    "username": "Priya Sharma",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "profession": "Graphic Designer",
    "description": "Creative designer specializing in branding, UI/UX, and digital illustrations.",
    "tags": ["Design", "UI/UX", "Photoshop"]
  },
  {
    "username": "Rohan Verma",
    "image": "https://randomuser.me/api/portraits/men/65.jpg",
    "profession": "Digital Marketer",
    "description": "Expert in SEO, social media strategies, and performance marketing.",
    "tags": ["SEO", "Marketing", "Analytics"]
  },
  {
    "username": "Sneha Iyer",
    "image": "https://randomuser.me/api/portraits/women/68.jpg",
    "profession": "Content Writer",
    "description": "Writes engaging blogs, articles, and web content across multiple niches.",
    "tags": ["Writing", "Blogging", "Content"]
  },
  {
    "username": "Kabir Khan",
    "image": "https://randomuser.me/api/portraits/men/75.jpg",
    "profession": "Photographer",
    "description": "Captures stunning landscapes and portraits with a unique creative touch.",
    "tags": ["Photography", "Editing", "Travel"]
  }
]

let sum = ''
arr.forEach(function(elem){
    sum += `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.username}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}
            </p>
            
        </div>`
})

let main = document.querySelector("main")

main.innerHTML = sum