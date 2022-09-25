let inputEl = document.querySelector("#input");
let dictionerEl = document.querySelector("#dictioner");
let btnEl = document.querySelector("#btn");
// UZB

function createEl(wordTranslation, url){
    dictionerEl.innerHTML = ''
            const img = document.createElement("img");
            const h1 = document.createElement("h1");
            h1.innerText = wordTranslation;
            img.src = url;
            dictionerEl.appendChild(h1);
            dictionerEl.appendChild(img);
}

btnEl.addEventListener("click" , (e) => {
    e.preventDefault();
    const inpValLow = inputEl.value.toLowerCase();
    switch(inputEl.value.toLowerCase()){
        case "car":
        case "mashina":
            createEl( inpValLow === "mashina" ? "Car: " + " They don't have a car." : "Mashina: " + " Ularda masina yo'q", "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349")
        break;
        case "person":
        case "inson":
            createEl( inpValLow === "inson" ? "Person: " + " A meal at the restaurant costs about $70 for two people." : "Inson: " + " U restarantdagi sho'rva bir inson uchun 75$ ekan!!!" , "https://www.cossa.ru/upload/main/c54/683df1fdb61e8ccb5a6c1b463ebb04c4_aus1.jpg")
        break;
        case "bus":
        case "avtobus":         
            createEl( inpValLow === "avtobus" ? "Bus: " + " Hurry, now, or you'll miss the bus!" : "Avtobus: " + " Shoshil bo'lmasa avtobuni o'tkazib yuboramiz" , "https://www.nearbyme2.com/wp-content/uploads/2019/11/advantages-and-disadvantages-of-travelling-by-bus.png")
        break;
        case "laptop":
        case "noutbuk":
            createEl( inpValLow === "noutbuk" ? "Laptop: " + " I always take my laptop when I travel." : "Noutbuk: " + " Men har sayohatimda noutbukimni o'zim bilan oliman" , "https://i.pinimg.com/originals/a2/43/c7/a243c72be94e93f1399f3399b06c7677.jpg")
        break;
        case "book":
        case "kitob":
            createEl( inpValLow === "kitob" ? "Book: " + " Have you read any good books recently?" : "Kitob: " + " Sen anovi kitobni o'qidingmi" , "https://catherineasquithgallery.com/uploads/posts/2021-02/1614532683_2-p-kniga-na-belom-fone-2.png")
        break;
        default:
            
    }
})



// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============
// ===========FUNCTIONS===============