function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    return (
        (elementTop >= 0 && elementTop <= windowHeight) ||
        (elementBottom >= 0 && elementBottom <= windowHeight) ||
        (elementTop < 0 && elementBottom > windowHeight)
    );
}

function scrollAppear() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('appear');
        } else {
            section.classList.remove('appear');
        }
    });
}


window.addEventListener('scroll', scrollAppear);


document.addEventListener('DOMContentLoaded', scrollAppear);

