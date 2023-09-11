

// Popup - auto load and close function

const body = document.body;

window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelector('.popup').style.display = 'block';
        body.classList.add('popup-open');
        body.classList.add('blur-background');
    }, 500);
});

document.querySelector('#closePopup').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none';
    body.classList.remove('popup-open');
    body.classList.remove('blur-background');
});