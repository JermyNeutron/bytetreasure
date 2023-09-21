

// GLOBAL - Popup - auto load and close function

// const body = document.body;

// window.addEventListener('load', function() {
//     setTimeout(() => {
//         document.querySelector('.popup').style.display = 'block';
//         body.classList.add('popup-open');
//         body.classList.add('blur-background');
//     }, 500);
// });

// document.querySelector('#closePopup').addEventListener('click', function(){
//     document.querySelector('.popup').style.display = 'none';
//     body.classList.remove('popup-open');
//     body.classList.remove('blur-background');
// });


// HOMEPAGE - FAQ Accordian


var acc = document.getElementsByClassName("subsection__faq-question-item-title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("subsection__faq-question-item-title-active");

        var panel = this.parentElement.querySelector(".subsection__dropdown-item");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}