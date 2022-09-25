let inputEl = document.querySelector("#input");
let dictionerEl = document.querySelector("#dictioner");
let btnEl = document.querySelector("#btn");
let carEl = document.querySelector("#car");
let personEl = document.querySelector("#person");
let busEl = document.querySelector("#bus");
let laptopEl = document.querySelector("#laptop");
let bookEl = document.querySelector("#book");

btnEl.addEventListener("click" , (e) => {
    e.preventDefault();
    switch(inputEl.value.toLowerCase()){
        case "car":
            carEl.style.display = "block";
            personEl.style.display = "none";
            busEl.style.display = "none";
            laptopEl.style.display = "none";
            bookEl.style.display = "none";
        break;
        case "person":
            personEl.style.display = "block";
            carEl.style.display = "none";
            busEl.style.display = "none";
            laptopEl.style.display = "none";
            bookEl.style.display = "none";
        break;
        case "bus":
            busEl.style.display = "block";
            carEl.style.display = "none";
            personEl.style.display = "none";
            laptopEl.style.display = "none";
            bookEl.style.display = "none";
        break;
        case "laptop":
            laptopEl.style.display = "block";
            busEl.style.display = "none";
            carEl.style.display = "none";
            personEl.style.display = "none";
            bookEl.style.display = "none";
        break;
        case "book":
            bookEl.style.display = "block";
            laptopEl.style.display = "none";
            busEl.style.display = "none";
            carEl.style.display = "none";
            personEl.style.display = "none";
        break;
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