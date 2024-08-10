document.addEventListener('scroll', function () {
    var navbar = document.getElementById('header');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

var bars = document.getElementById("bars");
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "-2vw";
    sidemenu.style.top = "0px";
    bars.classList.toggle('active');
}
function closemenu() {
    sidemenu.style.right = "-55vw";
    bars.classList.remove('active');
}


document.querySelectorAll('#scrollLink').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const cardList = document.querySelector('.card-list');
    const cards = document.querySelectorAll('.card-items');
    const totalCards = cards.length;
    const dotsContainer = document.querySelector('.dots-container');

    // Create dots
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', function () {
            currentIndex = getSlideIndexFromDotIndex(i);
            updateCardPosition();
        });
    }

    document.querySelector('.left-icon').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCardPosition();
        }
    });

    document.querySelector('.right-icon').addEventListener('click', function () {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCardPosition();
        }
    });

    function getSlideIndexFromDotIndex(dotIndex) {
        if (totalCards <= 3) {
            return dotIndex;
        }
        if (currentIndex === 0) {
            return dotIndex;
        }
        if (currentIndex === totalCards - 1) {
            return totalCards - 3 + dotIndex;
        }
        return currentIndex - 1 + dotIndex;
    }

    function updateCardPosition() {
        const offset = -currentIndex * 100;
        cardList.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));

        if (totalCards <= 3) {
            dots[currentIndex].classList.add('active');
            return;
        }

        if (currentIndex === 0) {
            dots[0].classList.add('active');
        } else if (currentIndex === totalCards - 1) {
            dots[2].classList.add('active');
        } else {
            dots[1].classList.add('active');
        }
    }

    function updateVisibleDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            const slideIndex = getSlideIndexFromDotIndex(index);
            if (slideIndex < totalCards) {
                dot.style.display = 'inline-block';
            } else {
                dot.style.display = 'none';
            }
        });
    }

    updateVisibleDots();
});

window.addEventListener('DOMContentLoaded', () => {
    // First scroller (scrolls left)
    const scrollerInner = document.querySelector('.scroller_inner');
    const eventList = document.querySelector('.event-list');
    const listWidth = eventList.clientWidth;

    // Clone the content of the event list
    const clonedList = eventList.cloneNode(true);
    scrollerInner.appendChild(clonedList);

    let pos = 0;

    function scrollLeft() {
        pos -= 0.3; // Adjust speed by changing the decrement value
        if (pos <= -listWidth) {
            pos = 0;
        }
        scrollerInner.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(scrollLeft);
    }

    scrollLeft();

    // Second scroller (scrolls right)
    const scrollerInner1 = document.querySelector('.scroller_inner1');
    const eventList1 = document.querySelector('.event-list1');
    const listWidth1 = eventList1.clientWidth;

    // Clone the content of the event list
    const clonedList1 = eventList1.cloneNode(true);
    scrollerInner1.appendChild(clonedList1);

    let pos1 = -listWidth1; // Start from -listWidth1 to avoid initial empty space

    function scrollRight() {
        pos1 += 0.3; // Adjust speed by changing the increment value
        if (pos1 >= 0) {
            pos1 = -listWidth1; // Reset to the start
        }
        scrollerInner1.style.transform = `translateX(${pos1}px)`;
        requestAnimationFrame(scrollRight);
    }

    scrollRight();
});





