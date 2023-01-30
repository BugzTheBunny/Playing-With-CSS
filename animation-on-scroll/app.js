const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElemetns = document.querySelectorAll('.hidden');
hiddenElemetns.forEach((el) => observer.observe(el));