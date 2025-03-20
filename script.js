window.onload = function() {
    alert("Добро пожаловать на сайт IIOREZ!");  
};

function copyDiscord() {
    const discordTag = 'grava_stanka';
    navigator.clipboard.writeText(discordTag)
        .then(() => alert('Discord скопирован: ' + discordTag))
        .catch(err => console.error('Ошибка копирования:', err));
}


document.querySelectorAll('.nav-btn').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.addEventListener('load', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        target && target.scrollIntoView({ behavior: 'smooth' });
    }
});

targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
   
    inline: 'nearest',
    duration: 800 
});



const fixesContainer = document.querySelector('.fixes-grid');
const fixes = Array.from(document.querySelectorAll('.fix-post'));

fixes.sort((a, b) => {
    const dateA = new Date(a.querySelector('.post-date').textContent);
    const dateB = new Date(b.querySelector('.post-date').textContent);
    return dateB - dateA;
});

fixes.forEach(post => fixesContainer.appendChild(post));

