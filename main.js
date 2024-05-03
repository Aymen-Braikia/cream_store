document.querySelector(".logo").onclick = () => location.pathname = "/index.html";
document.querySelector(".headerUl").children[0].onclick = () => location.pathname = "/index.html";
document.querySelector(".headerUl").children[1].onclick = () => location.pathname = "/shop/index.html";
document.querySelector(".headerUl").children[2].onclick = () => location.pathname = "/faq/index.html";

function getDate(days) {
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();

    var nextDay11 = new Date(currentYear, currentMonth, days);

    if (today.getDate() >= days) {
        nextDay11.setMonth(nextDay11.getMonth() + 1);
    }
    let result = nextDay11.toDateString().split(" ")

    return (`${result[1]} ${result[2]}`);
}

document.querySelector(".delivery").innerHTML = `delivery between ${getDate(11)} - ${getDate(24)}`

let imagesList = ["https://m.media-amazon.com/images/I/61l9Lz2pelL.jpg", "https://i.ibb.co/ykVXjyY/Sba3388d950e64afdbaa8c12c1f1c4e7fl.jpg", "https://i.ibb.co/cX2dRhs/Anti-Dark-Circle-Eye-Cream-Eye-Bags-VC-Whitening-Lightening-Cream-Wrinkle-Removal-Serum-Eyes-Firming.webp", "https://i.ibb.co/BtbQzcD/s.webp", "https://i.ibb.co/9bgqzhf/a.webp", "https://i.ibb.co/P1KwFnm/dk.webp", "https://i.ibb.co/SJt9gL4/L-upscaled.webp"]

imagesList.forEach(img => {
    let image = document.createElement("img")
    image.classList.add("img")
    image.src = img
    image.alt = "Failled To Load Image"
    document.querySelector(".imagesContainer").appendChild(image)

    let dot = document.createElement("div")
    dot.classList.add("dot")
    document.querySelector(".dots").appendChild(dot)
})

let swipes = 0
let swipeLen = 0


function activateDot(index) {
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"))
    document.querySelectorAll(".dot")[index].classList.add("active")
}
activateDot(swipes)

document.querySelector(".next").onclick = () => {
    if (swipes == imagesList.length - 1) return
    swipeLen += document.querySelector(".img").clientWidth
    swipes++
    activateDot(swipes)
    document.querySelector(".imagesContainer").style.transform = `translateX(${-swipeLen}px)`
}
document.querySelector(".prev").onclick = () => {
    if (swipes == 0) return
    swipeLen -= document.querySelector(".img").clientWidth
    swipes--
    activateDot(swipes)
    document.querySelector(".imagesContainer").style.transform = `translateX(${-swipeLen}px)`
}

let touchX = 0
document.querySelector(".imagesContainer").addEventListener("touchstart", (touch) => touchX = touch.changedTouches[0].clientX)
document.querySelector(".imagesContainer").addEventListener("touchmove", (touch) => document.querySelector(".imagesContainer").style.transform = `translateX(${swipeLen + (touch.changedTouches[0].clientX - touchX)}px)`)
document.querySelector(".imagesContainer").addEventListener("touchend", (touch) => {
    if (touchX > touch.changedTouches[0].clientX + 100 && swipes !== imagesList.length - 1) {
        swipes++
        activateDot(swipes)
        swipeLen -= document.querySelector(".img").clientWidth
        document.querySelector(".imagesContainer").style.transform = `translateX(${swipeLen}px)`
        document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"))
        document.querySelectorAll(".dot")[swipes].classList.add("active")
    } else document.querySelector(".imagesContainer").style.transform = `translateX(${swipeLen}px)`

    if (touchX + 100 < touch.changedTouches[0].clientX && swipes !== 0) {
        swipes--
        activateDot(swipes)
        swipeLen += document.querySelector(".img").clientWidth
        document.querySelector(".imagesContainer").style.transform = `translateX(${swipeLen}px)`
        document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"))
        document.querySelectorAll(".dot")[swipes].classList.add("active")
    } else document.querySelector(".imagesContainer").style.transform = `translateX(${swipeLen}px)`
})


document.querySelector(".container").style.top = document.querySelector("header").clientHeight + "px"

document.querySelectorAll(".questionContent").forEach(e => {
    e.onclick = () => {
        e.parentElement.children[1].classList.toggle("active")
    }
})
document.querySelectorAll(".questionContainer").forEach(e => {
    e.onclick = () => {
        e.children[1].classList.toggle("active")
    }
})

document.querySelectorAll(".bar").forEach(bar => {
    bar.children[1].children[0].style.width = Math.round((bar.children[2].innerHTML * 100) / 54) + "%"
})


let reviews = {
    names: ["Cascade", "Whisper", "Velvet", "Phoenix", "Eclipse", "Sapphire", "Serenade", "Crimson", "Echo", "Luminous", "Tranquil", "Harmony", "Radiant", "Nova", "Mystic", "Breeze", "Solstice", "Aurora", "Dusk", "Vortex", "Enigma", "Frost", "Celestial", "Infinity", "Zephyr", "Ethereal", "Blaze", "Quasar", "Zenith", "Serene", "Glimmer", "Drift", "Obsidian", "Whirlwind", "Lunar", "Crest", "Nebula", "Ember", "Radiance", "Vivid", "Equinox", "Twilight", "Tranquility", "Ethereal", "Luster", "Majestic", "Oasis", "Paradise", "Platinum", "Reverie", "Rhapsody", "Solar", "Terra", "Utopia"],
    content: ["Arrived well packed, I will be satisfied with a good result, but I will add the review.",
        "The product is great. I've been using for only one week and I can already see the results. It's also very smooth and easy to apply. I highly recommend this VITAMIN C eye cream",
        "I will give you a gift😊",
        " I added before and after pictures for this. My before was 30 minutes after my PM routine (cleanser, toner, eye makeup remover, moisturizer) without applying anything under my eyes. The next photo is 3 weeks after I used vc eye cream in the morning - peptide eye cream at night. These two eye creams work well together to hydrate my eyes. Dark circles and fine lines disappeared in half a month.",
        " I absolutely love this VC brightening eye cream. It's super easy to use and great for sensitive skin. You can see a difference after the first use. Definitely a must have for people with dark circles..",
        "The first photo is before I started using and the last two photos are after using it for a couple of weeks. I usually use it in the morning and at night, but don’t always stick to that schedule. I’ve seen an improvement with using it every other day or sporadically. Will be buying this again!",
        "I instantly fell in love with this eye cream. Only recently, have I noticed dark circles when I've not been getting enough sleep, so I knew I had to try something. The cream comes in a beautiful tube and is super thick and moisturizing…a very little bit goes a long way. I was able to see a difference immediately when I applied it. I am extremely careful about what products I put on my skin and have often defaulted to making my own products, but I knew I needed something a little extra for my eye area as I’ve recently entered my 40s.",
        "I used this eye cream everyday 2x a day for 1 month to see if i saw any improvement in my under eye bags and dark circles. And wow! It worked amazingly!!",
        "Cream of normal consistency of white color. Came quickly.",
        "Normal cream, ale is not sung, clean up chorni Cola",
        "niiiiiiiicccceeee😍",
        "great product. great price. fast shipping",
        "Fantástico",
        "It was well-packed and came without damage. The texture is nice and light, without a strong smell. The only detail for me - I thought the applicator would be pointy, but it isn't - which will not be very convenient for an eye cream.",
        "after using the feedback ❤️💓💕",
        "Looks good quality. You have to try to see results.",
        "I still haven't used enough to have results. Does not cause allergy on the skin. The packaging is beautiful and practical",
        "I didn't chewer, I scratched it more, packing Garno, date in the Moscow :) I will say the cringy of the trohi, but I didn't buy cosmetics from aliekprese, I curl, I hope everything will be good, and for the decylka tizhniv I will write one more positive vidguk😄",
        "Chic Eye Cream, I am 51 years old, the cream is really very effective, thank you very much the seller, very satisfied with the purchase, I recommend the seller and his shop.",
        "They took away the deputy shvidko, they did it on the same day, they went to the next two Tizhniv before the nimechchini, they didn't give up. A packyvan in a sagey sachet with pups, two sharis, a box with a TsUP and a plevkow above. Dear! Piznishe onlya vidguk, Yak will be the result.",
        "Three days later I can tell you, if there is a fact of a small vidbiluvanny of dark circles of the Ochima. A garnog, and a demand Yogo is a speckled. I guess alergichna, ale Tesi crème Poki scho Mor)",
        "I did not give it to shvidko's little part, until the hour, I did not take it",
        "Cream Duye for good and smell. I can't say more than that, in the world, even before the store, we can do it again (through the Tizhden and vidguk). Delivered to Dubai Shvidko",
        "The product arrived well packed, it is a light texture and fast absorption. I have tried it for about 3 days and it did not cause me an outbreak. I hope and with time changes are seen, for the moment I can only say this.",
        "There are no complaints about the quality. I'm not allergic to this cream. It is too early to talk about the results. The shelf life is long. The delivery is fast. Satisfied with the purchase, I recommend.",
        "small tub from 20 ml. have a easy opening. not greasy and quick absorption. I hope that works. I do not have dark circle today, I cannot tell, but I feel good with it.  Very good packing and thank you sender",
        "The review is supplemented after some time-the cream is fine, the result is there, the facial wrinkles have been reduced, and the swelling is good. I am glad that I took this product. I recommend the seller",
        "I received the order ahead of time! I will add feedback later when I test the action.",
        "It takes me a long time to get there but I finally get there, I still don't try it",
        "I'll try it and then I'll say whether it works or not.\n\nI am not convinced by comments with photos seem false.\nI'll be back in two weeks to see if it works.",
        "Very surprised decongests the dark circles and the idrata! I apply her in the morning her cool soft fragrance!",
        "It arrived very fast and looks good quality. Lack of testing efficacy",
        "Very well packed, I arrived with blows but inside it was intact. The product I feel like it is a bit greasy and you have to throw it in a small quantity. It is the first time that I will use this product, if it comes to lower the dark circles I will let you know.",
        "The package arrived quite well intact, I will prove it.",
        "perfect eye cream, works good,it's my second order,came with gift-lip mask",
        "At long last ..item recieved within a month….started yesterday..will add review after 2weeks ..see you then",
        "I 've been using it for a few weeks in the morning and at night for my dark circles. It helps Me to smooth and hydrate, which is what I am looking for. Is soft and silky when applied. Doesn't smell. I will definitely try more JoyPretty products.",
        "Got it a month before the delivery time. Haven’t used it yet, so i can’t review the effectiveness, crossing my fingers.",
        "This vitamin c eye serum really does help at reducing puffiness, dark circles and my fine under eye lines. I like to keep my product in the fridge, so upon waking in the morning the cool product on my face feels very soothing. A good product for the price. 👍🏻",
        "Received. I will use it for a while then come give a review. ",
        "Arrived in perfect condition👌🏼👌🏼👌🏼And I loved the product, it arrived in a month",
        "Arrived before the date offered, in perfect condition very well packed",
        "Received after about 3 weeks .. I will try it for a while and it works I’ll write another review",
        "It is as described, I liked it, thanks to the manufacturer, I recommend it.",
        "arrived sooner than expected, testing and finding out the results",
        "Helped me mainly soften the skin, reduce swelling and gives a luminous appearance",
        "fast shipping",
        "Good for now. The seller sent a gift that is a lip balm .. Oh, thanks.",
        "There is no smell, we will check how it works over time, I will add a review later. As a gift put lip balm",
        "Just received it. Have to use and see. I will write a review after the results.",
        "Excellent product! I'm extremely satisfied with my purchase.",
        "This product exceeded my expectations. It works perfectly.",
        "Great quality and fast shipping. Highly recommend!",
        "Fantastic customer service. They were very helpful and responsive.",
        "I love this item! It's exactly what I was looking for.",
        "The best purchase I've made in a long time. Thank you!",
        "Superb experience overall. I will definitely buy from them again.",
    ],
    ratings: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4],
}
let index = 0

let containerIndex = 1

let reviewIndex = 1
let hiddenReviews = 0

reviews.names.forEach(name => {
    let review = document.createElement("div")
    review.classList.add("review")
    document.querySelector(`.reviewsContainer${containerIndex}`).appendChild(review)
    if (reviewIndex > 10) {
        review.classList.add("inactive")
        hiddenReviews++
    }

    let personInfo = document.createElement("div")
    personInfo.classList.add("personInfo")
    review.appendChild(personInfo)

    let avatar = document.createElement("div")
    avatar.classList.add("avatar")
    avatar.innerHTML = name[0].toLocaleUpperCase()
    personInfo.appendChild(avatar)

    let reviewName = document.createElement("div")
    reviewName.classList.add("reviewName")
    reviewName.innerHTML = name
    personInfo.appendChild(reviewName)

    let rating = document.createElement("div")
    rating.classList.add("rating")

    let reviewRating = ""

    for (let i = 0; i < reviews.ratings[index]; i++) reviewRating += "⭐"

    rating.innerHTML = reviewRating
    personInfo.appendChild(rating)

    let reviewContent = document.createElement("div")
    reviewContent.classList.add("reviewContent")
    reviewContent.innerHTML = reviews.content[index]
    review.appendChild(reviewContent)

    containerIndex++
    reviewIndex++
    index++
    if (containerIndex == 4) containerIndex = 1
})

document.querySelector(".showMoreBtn").onclick = () => {
    document.querySelectorAll(".reviewsContainer").forEach(revCont => {
        if (!revCont.children[revCont.children.length - 1].classList.contains("inactive")) return
        let ind = 0
        for (let i = 0; i < 3;) {
            if (!revCont.children[ind].classList.contains("inactive")) {
                ind++
                continue
            }
            revCont.children[ind].classList.remove("inactive")
            ind++
            i++
        }
    })
}

document.querySelectorAll(".qualityStars>*").forEach(star => {
    star.onclick = () => {
        document.querySelectorAll(".qualityStars>*").forEach(s => s.classList.remove("active"))
        for (let i = 0; i < +star.classList[1].slice(-1); i++) {
            document.querySelector(".qualityStars").children[i].classList.add("active")
        }
    }
})

document.querySelector(".reviewBtn").onclick = () => {
    document.querySelector(".reviewInputContainer").classList.add("active")
    document.querySelector(".darkBg").classList.add("active")
    document.querySelector("body").classList.add("active")
}

document.querySelector(".submit").onclick = () => {

    let ratingPass = false
    let inputPass = true

    document.querySelectorAll(".input").forEach(input => {
        if (input.value == "") inputPass = false
    })

    document.querySelectorAll(".star").forEach(star => {
        if (star.classList.contains("active")) ratingPass = true
    })

    if (inputPass && ratingPass) {

        document.querySelector(".reviewInputContainer").classList.add("submitted")
        setTimeout(() => {
            setTimeout(() => {
                document.querySelector(".loading").classList.add("active")
                document.querySelector(".finished").classList.add("active")

                setTimeout(() => {
                    document.querySelector(".reviewInputContainer").classList.remove("active")
                    document.querySelector(".reviewInputContainer").classList.remove("submitted")
                    document.querySelector(".darkBg").classList.remove("active")
                    document.querySelector("body").classList.remove("active")
                }, 2000);
            }, 1000);
        }, 2000);
    }
}

let qualityInput = document.querySelector(".quantityInput")

document.querySelector(".increase").onclick = () => {
    if (qualityInput.value < 20)
        qualityInput.value++
}
document.querySelector(".decrease").onclick = () => {
    if (qualityInput.value > 1)
        qualityInput.value--
}

qualityInput.addEventListener("input", () => {
    if (qualityInput.value > 20) qualityInput.value = 20
    if (qualityInput.value < 1) qualityInput.value = 1
})

function createOrder() {
    fetch("https://apexarray.onrender.com/createOrder2", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // amount: +document.querySelector(".amountInput").value
            quantity: +document.querySelector(".quantityInput").value,
            currency: "USD",
            coupon: "unset"
        })
    }).then(res => {
        if (res.ok) return res.json()
        console.log("failled to create order:");
        console.log(res);
        return
    }).then(({ url }) => window.location = url)
}

document.querySelectorAll(".BUY").forEach(btn => btn.onclick = createOrder)

document.querySelector(".darkBg").onclick = () => {
    document.querySelector(".darkBg").classList.remove("active")
    document.querySelector(".sign").classList.remove("active")
    document.querySelector(".reviewInputContainer").classList.remove("active")
    document.body.classList.remove("active")
}

document.querySelector(".headerUl").children[3].onclick = () => {
    document.querySelector(".sign").classList.add("active")
    document.querySelector(".darkBg").classList.add("active")
    document.body.classList.add("active")
}

document.querySelectorAll(".signMethod").forEach(method => {
    method.onclick = () => {
        document.querySelectorAll(".signMethod").forEach(e => e.classList.remove("active"))
        method.classList.add("active")

        if (method.textContent == "SIGN IN") {
            document.querySelector(".signInfo").classList.add("active")
            document.querySelector(".joinInfo").classList.remove("active")
        }
        if (method.textContent == "JOIN NOW") {
            document.querySelector(".joinInfo").classList.add("active")
            document.querySelector(".signInfo").classList.remove("active")
        }
    }
});
