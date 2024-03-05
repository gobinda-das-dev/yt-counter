const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);


// calling important functions
firstTry();
secondTry();







let divId = 1;
const createNewNo = () => {
    const sShowcase = $('.s-showcase');
    const id = sShowcase.children.length;
    divId = id + 1;
    sShowcase.innerHTML += `
                <div id="${id}">
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>`;

    gsap.from(`.s-showcase div:nth-child(${id + 1}) span`, {
        top: "100%",
    })
}
createNewNo();



const iBtn = $('.i-btn');
const dBtn = $('.d-btn');
let two = 2;
let three = 3;

let count = 1;
iBtn.onclick = () => {
    let span1 = $(`.s-showcase div:nth-child(${divId}) span:nth-child(${two})`);
    let span2 = $(`.s-showcase div:nth-child(${divId}) span:nth-child(${three})`);
    
    
    if (span1.textContent < 9 || span2.textContent < 9) {
    
        ++span2.textContent;
        gsap.to(span1, {
            top: "-100%",
            onComplete: () => {
                ++span1.textContent;
                gsap.to(span1, {
                    top: "100%",
                    duration: 0
                })
            }
        })
        gsap.to(span2, {
            top: "0"
        })
    } else {
        span2.textContent = 1;
        gsap.to(span1, {
            top: "-100%",
            onComplete: () => {
                span1.textContent = 1;
                gsap.to(span1, {
                    top: "100%",
                    duration: 0
                })
            }
        })
        gsap.to(span2, {
            top: "0",
            onComplete: () => {
                
                if(divId > 1) {
                    let prevSpan1 = $(`.s-showcase div:nth-child(${divId - 1}) span:nth-child(${two})`);
                    let prevSpan2 = $(`.s-showcase div:nth-child(${divId - 1}) span:nth-child(${three})`);

                    ++prevSpan2.textContent;
                    gsap.to(prevSpan1, {
                        top: "-100%",
                        onComplete: () => {
                            ++prevSpan1.textContent;
                            gsap.to(prevSpan1, {
                                top: "100%",
                                duration: 0
                            })
                        }
                    })
                    gsap.to(prevSpan2, {
                        top: "0",
                    })
                } else {
                    createNewNo();
                }
            }
        })
    }

    count ? ((two = 3) && (three = 2) && (count--)) : ((two = 2) && (three = 3) && (count++));
}

dBtn.onclick = () => {
    gsap.to(span1, {
        top: "0"
    })
    gsap.to(span2, {
        top: "100%"
    })
}




// Crating important functions
function secondTry() {
}




function firstTry() {
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
        letters.forEach(function (letter) {
            html += '<span>' + letter + '</span>';
        });
        showcaseDiv.innerHTML = html;
    }

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            subBtn.click();
        }
    });
}