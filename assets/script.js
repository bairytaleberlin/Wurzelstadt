// Audio Control
const audioToggle = document.getElementById('audioToggle');
const audioIcon = document.getElementById('audioIcon');
const audioWaves = document.getElementById('audioWaves');
let audio = null;
let isPlaying = false;

// Initialize audio
function initAudio() {
    audio = new Audio('audio/wurzelfluester.wav');
    audio.loop = true;
    audio.volume = 0.3;
}

// Toggle audio playback
audioToggle.addEventListener('click', () => {
    if (!audio) {
        initAudio();
    }
    
    if (isPlaying) {
        audio.pause();
        audioToggle.classList.remove('playing');
        audioWaves.style.display = 'none';
    } else {
        audio.play().catch(err => {
            console.log('Audio playback failed:', err);
        });
        audioToggle.classList.add('playing');
        audioWaves.style.display = 'block';
    }
    
    isPlaying = !isPlaying;
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Levels Map Interaction
const mapAreas = document.querySelectorAll('.map-area');
const levelCards = document.querySelectorAll('.level-card');

function setActiveLevel(levelId) {
    // Remove active class from all
    mapAreas.forEach(area => area.classList.remove('active'));
    levelCards.forEach(card => card.classList.remove('active'));
    
    // Add active class to selected
    const selectedArea = document.querySelector(`[data-level="${levelId}"]`);
    const selectedCard = document.querySelector(`[data-level-card="${levelId}"]`);
    
    if (selectedArea) selectedArea.classList.add('active');
    if (selectedCard) selectedCard.classList.add('active');
}

// Map area click handlers
mapAreas.forEach(area => {
    area.addEventListener('click', () => {
        const levelId = area.dataset.level;
        setActiveLevel(levelId);
    });
});

// Level card click handlers
levelCards.forEach(card => {
    card.addEventListener('click', () => {
        const levelId = card.dataset.levelCard;
        setActiveLevel(levelId);
    });
});

// Faction Table Row Click
const factionTableRows = document.querySelectorAll('.faction-table tbody tr');
const factionCards = document.querySelectorAll('.faction-card');

function toggleFaction(factionId) {
    const factionCard = document.querySelector(`[data-faction-card="${factionId}"]`);
    
    if (factionCard) {
        const isActive = factionCard.classList.contains('active');
        
        // Close all factions
        factionCards.forEach(card => {
            card.classList.remove('active');
            const toggle = card.querySelector('.faction-toggle');
            if (toggle) toggle.textContent = 'Mehr';
        });
        
        // Toggle selected faction
        if (!isActive) {
            factionCard.classList.add('active');
            const toggle = factionCard.querySelector('.faction-toggle');
            if (toggle) toggle.textContent = 'Weniger';
            
            // Scroll to faction card
            setTimeout(() => {
                const offsetTop = factionCard.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
}

// Table row click handlers
factionTableRows.forEach(row => {
    row.addEventListener('click', () => {
        const factionId = row.dataset.faction;
        toggleFaction(factionId);
    });
});

// Faction card header click handlers
factionCards.forEach(card => {
    const header = card.querySelector('.faction-header');
    header.addEventListener('click', () => {
        const factionId = card.dataset.factionCard;
        toggleFaction(factionId);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to cards and sections
document.querySelectorAll('.card, .level-card, .faction-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Escape key closes expanded factions
    if (e.key === 'Escape') {
        factionCards.forEach(card => {
            card.classList.remove('active');
            const toggle = card.querySelector('.faction-toggle');
            if (toggle) toggle.textContent = 'Mehr';
        });
        
        // Also deactivate level cards
        levelCards.forEach(card => card.classList.remove('active'));
        mapAreas.forEach(area => area.classList.remove('active'));
    }
});

// Initialize - set first level as active
if (levelCards.length > 0) {
    setActiveLevel('krone');
}

console.log('Wurzelreich Website loaded successfully!');
