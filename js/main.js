let orderBtns = document.querySelectorAll('.order_btn');
let timer = document.querySelector('.timer')
let number = document.querySelector('.number')
for(let i = 0; i < orderBtns.length; i++ ) {
    orderBtns[i].addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('order_form').scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 100,
    centeredSlides:true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function saleTime(startDate, endDate) {
    let diff = Math.abs(startDate - endDate) / 1000;

    const days = Math.floor(diff / 86400);
    diff -= days * 86400;

    const hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;

    const minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;

    let difference = '';
    if (days > 0) {
        difference += (days === 1) ? `${days} день, ` : `${days} дней, `;
    }

    difference += (hours === 1) ? `${hours} час, ` : `${hours} часов, `;

    difference += (hours === 1) ? `${minutes} минута` : `${minutes} минут`;

    return `До конца акции: ${difference}`;
}
setInterval(() => {
    let startDate = new Date();
    let endDate = new Date(2021, 5, 1);
    timer.innerHTML = saleTime(startDate, endDate);
},1000);

number.onkeypress =
function isNumber(key) {
    let maxLength = false;
    switch (number.value.length){
        case 1:
            number.value += '-';
            break;
        case 5:
            number.value += '-';
            break;
        case 9:
            number.value += '-';
            break;
        case 12:
            number.value += '-';
            break;
        case 15:
            maxLength = true;
            break;
    }
    if (key.keyCode >= 48 && key.keyCode <= 57 && !maxLength) return true;
    else {
        return false
    }
}