const reels = [
  {
    username: "urban_explorer",
    likeCount: 12400,
    isLiked: false,
    commentCount: 85,
    caption: "Finding hidden gems in the heart of Tokyo 🏙️ #travel #tokyo",
    video: "./vedeo/1.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=urban",
    shareCount: 450,
    isFollowed: true
  },
  {
    username: "chef_marcelo",
    likeCount: 4520,
    isLiked: true,
    commentCount: 210,
    caption: "The secret to the perfect carbonara is all in the pepper. 🍝 #cooking",
    video: "./vedeo/2.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=chef",
    shareCount: 1200,
    isFollowed: false
  },
  {
    username: "tech_reviews_daily",
    likeCount: 890,
    isLiked: false,
    commentCount: 45,
    caption: "Is this the best budget smartphone of 2026? Unboxing now! 📱",
    video: "./vedeo/3.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
    shareCount: 30,
    isFollowed: false
  },
  {
    username: "fitness_with_amy",
    likeCount: 32100,
    isLiked: true,
    commentCount: 560,
    caption: "Morning mobility routine to start your day right. 🧘‍♀️ #fitness",
    video: "./vedeo/4.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=amy",
    shareCount: 8900,
    isFollowed: true
  },
  {
    username: "pixel_art_jonny",
    likeCount: 156,
    isLiked: false,
    commentCount: 12,
    caption: "Speed painting: Retro sunset vibes. 🎨 #pixelart #creative",
    video: "./vedeo/5.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixel",
    shareCount: 5,
    isFollowed: false
  },
  {
    username: "nature_vibes",
    likeCount: 54200,
    isLiked: false,
    commentCount: 340,
    caption: "The silence of the Swiss Alps is unmatched. 🏔️✨",
    video: "./vedeo/6.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=nature",
    shareCount: 12500,
    isFollowed: true
  },
  {
    username: "comedy_central_fan",
    likeCount: 7800,
    isLiked: true,
    commentCount: 900,
    caption: "When the coffee kicks in at 3 PM... 😂 #relatable #funny",
    video: "./vedeo/7.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=comedy",
    shareCount: 3400,
    isFollowed: false
  },
  {
    username: "diy_queen",
    likeCount: 2300,
    isLiked: false,
    commentCount: 110,
    caption: "Turn your old jeans into a tote bag! 🧵♻️ #upcycle",
    video: "./vedeo/8.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=diy",
    shareCount: 670,
    isFollowed: true
  },
  {
    username: "space_geek_99",
    likeCount: 15400,
    isLiked: true,
    commentCount: 430,
    caption: "New images from the James Webb Telescope are breathtaking. 🌌",
    video: "./vedeo/9.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=space",
    shareCount: 2100,
    isFollowed: false
  },
  {
    username: "golden_retriever_life",
    likeCount: 89200,
    isLiked: true,
    commentCount: 1200,
    caption: "Who's a good boy? 🐕🎾 #dogsofinstagram #cute",
    video: "./vedeo/10.mp4",
    userProfile: "https://api.dicebear.com/7.x/avataaars/svg?seed=dog",
    shareCount: 45000,
    isFollowed: true
  }
];

let sum = ''
reels.forEach(function(elem){
  sum = sum + `<div class="reel">
                    <video autoplay muted loop src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img
                                src="${elem.userProfile}">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?"Unfollow":"Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h5>${elem.likeCount}</h5>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h5>${elem.commentCount}</h5>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-send-ins-line"></i></h4>
                            <h5>${elem.shareCount}</h5>
                        </div>
                        <div class="save">
                            <h4 class="save-icon icon"><i class="ri-bookmark-line"></i></h4>
                        </div>
                        <div class="more">
                            <h4 class="more-icon icon"><i class="ri-more-line"></i></h4>
                        </div>

                    </div>
                </div>`
})

let allReels = document.querySelector("#all-reels")
allReels.innerHTML = sum 