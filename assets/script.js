function changeHeader(){
    window.addEventListener("scroll", function () {
        let derniere_position_de_scroll_connue = window.scrollY;
        const nav = document.querySelector('.header__nav');
        const logo = document.querySelector('.header__nav img');
        if(derniere_position_de_scroll_connue > 0){
            nav.classList.add("scrollDown");
            nav.classList.remove("scrollTop");
            logo.src = "./assets/images/logo-white-no-background.png";
        }else{
            nav.classList.remove("scrollDown");
            nav.classList.add("scrollTop");
            logo.src = "./assets/images/logo-black-no-background.png";
        }
    })
}

changeHeader();

function backToUp(){
    window.addEventListener("scroll", function () {
        let derniere_position_de_scroll_connue = window.scrollY;
        const scrollToTop = document.querySelector('.scroll-to-top');
        if(derniere_position_de_scroll_connue > 200){
            scrollToTop.style.opacity = '1';
        }else{
            scrollToTop.style.opacity = '0';
        }
    })
}

backToUp();

function handleScroll() {
    window.addEventListener("scroll", function () {
        const scrollToTop = document.querySelector('.scroll-to-top');
        const footerHeight = document.querySelector('footer').offsetHeight;

        // Hauteur totale de la page
        const scrollHeight = document.documentElement.scrollHeight;
        
        // Position actuelle de défilement
        const scrollTop = window.scrollY;
        
        // Si l'utilisateur est proche du bas de la page
        if (scrollTop + window.innerHeight >= scrollHeight - (footerHeight - 50)) {
            scrollToTop.style.color = "rgb(247, 247, 247)";
        } else {
            scrollToTop.style.color = "#292929";
        }
    })
}

handleScroll();



document.addEventListener('DOMContentLoaded', function() {
    let link = document.querySelector('.presentation__content a');

    if (link) {
        link.addEventListener('mousemove', function(e) {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            link.style.setProperty('--mouse-x', `${x}px`);
            link.style.setProperty('--mouse-y', `${y}px`);
        });

        link.addEventListener('mouseleave', function() {
            link.style.setProperty('--mouse-x', '50%');
            link.style.setProperty('--mouse-y', '50%');
        });
    } else {
        console.error("L'élément n'a pas été trouvé");
    }
});


  
