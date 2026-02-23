let datetxt = "24 Feb";
let datatxtletter = "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
let charArrDate = datetxt.split('');
let charArrDateLetter = datatxtletter.split('');
let currentIndex = 0;
let currentIndexLetter = 0;
let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter");

// Animate birth date
setTimeout(function () {
    let timeDatetxt = setInterval(function () {
        if (currentIndex < charArrDate.length) {
            date__of__birth.textContent += charArrDate[currentIndex];
            currentIndex++;
        } else {
            let i = document.createElement("i");
            i.className = "fa-solid fa-star";
            document.querySelector(".date__of__birth").prepend(i);
            document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
            clearInterval(timeDatetxt);
        }
    }, 100);
}, 12000);

// Letter popup
let btnLetter = document.getElementById('btn__letter');
let boxmail = document.querySelector('.boxMail');
let close = document.querySelector('.boxMail .fa-xmark');

btnLetter.onclick = function () {
    boxmail.classList.add('active');
    currentIndexLetter = 0;
    text__letter.textContent = "";
    
    // Start typing letter
    let intervalContent = setInterval(function () {
        if (currentIndexLetter < charArrDateLetter.length) {
            text__letter.textContent += charArrDateLetter[currentIndexLetter];
            currentIndexLetter++;
        } else {
            clearInterval(intervalContent);
        }
    }, 50);
};

close.onclick = function () {
    boxmail.classList.remove('active');
};
