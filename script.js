// Array of affirmations for mom
const affirmations = [
    "You are an incredible mother and an amazing person.",
    "Your love makes the world a better place.",
    "Every day, you inspire me with your strength and grace.",
    "You deserve all the happiness in the world.",
    "Your kindness and compassion change lives every day.",
    "You are stronger than you think and braver than you know.",
    "The world is a better place because you're in it.",
    "Your love is the greatest gift I could ever receive.",
    "You make everything better just by being you.",
    "Thank you for being the most wonderful mom.",
    "You are my hero and my inspiration.",
    "Your smile brightens everyone's day.",
    "I am so proud to be your child.",
    "You have the biggest heart I know.",
    "Every moment with you is a blessing."
];

// Function to get a random affirmation
function getAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    document.getElementById('affirmation-text').textContent = affirmation;
    
    // Add animation
    const element = document.getElementById('affirmation-text');
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'fadeIn 0.8s ease-in';
    }, 10);
}

// Counter functionality with localStorage
function increment() {
    let count = localStorage.getItem('loveCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('loveCount', count);
    document.getElementById('counter').textContent = count;
}

// Load counter on page load
window.addEventListener('load', () => {
    const savedCount = localStorage.getItem('loveCount') || 0;
    document.getElementById('counter').textContent = savedCount;
});