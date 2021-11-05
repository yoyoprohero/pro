$("[data-bs-toggle=popover]").popover();

const sr = ScrollReveal();
sr.reveal('.test, .sub-titles, .card, .big-img', {
    origin: 'top',
    distance: '15px',
    duration: 1000,
    mobile: false,

    //reset: true,
    //scale: 0.9
});

sr.reveal('.sub-titles, .card, .big-img', {
    delay: 500
});

sr.reveal('.animate', {
    rotate: {
        x: -50,
        y: 20
    },
    duration: 1000
})