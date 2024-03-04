const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

const inputBox = $(".modifier input");
const subBtn = $(".modifier button");
const showcaseDiv = $(".showcase");

let prevInputValue = '';

// Call the function
addSpanToLetters();

subBtn.onclick = () => {
    showcaseDiv.innerHTML = '';
    
    const inputValue = inputBox.value;
    
    for (let i = 0; i < inputValue.length; i++) {
        const span = document.createElement('span');
        span.textContent = inputValue[i];
        showcaseDiv.appendChild(span);
    }
    

    if (inputValue.length > prevInputValue.length) {
        gsap.from(".showcase span", {
            y: "200%",
            stagger: .1
        })
    } else if (inputValue.length < prevInputValue.length) {
        gsap.from(".showcase span", {
            y: "-200%",
            stagger: .1
        })
    }
    
    // Update previous input value
    prevInputValue = inputValue;
    
};

// Important function
function addSpanToLetters() {
    let showcaseDiv = document.querySelector('.showcase');
    let text = showcaseDiv.textContent;
    let letters = text.split('');
    let html = '';
    letters.forEach(function(letter) {
        html += '<span>' + letter + '</span>';
    });
    showcaseDiv.innerHTML = html;
}
