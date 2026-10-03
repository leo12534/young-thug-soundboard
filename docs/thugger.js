const ACTIVE_CLASS = 'adlib__playing--active';
const ANIMATION_SPEED = 1.65; // Animation lasts (clip duration / ANIMATION_SPEED)
const FALLBACK_DURATION = 0.5; // Seconds, used if a clip's metadata hasn't loaded yet

// Lookup of key -> { button, audio }, built once so key presses don't query the DOM
const adlibs = new Map();

const getAnimationTime = function (audio) {
    const { duration } = audio;
    return Number.isFinite(duration) ? duration / ANIMATION_SPEED : FALLBACK_DURATION;
};

const animateKey = function (button, audio) {
    // Scope the transition time to this key so other keys mid-animation aren't affected
    button.style.setProperty('--transition-time', `${getAnimationTime(audio)}s`);
    // Restart the animation if the key is pressed again before it finishes
    button.classList.remove(ACTIVE_CLASS);
    // eslint-disable-next-line no-void
    void button.offsetWidth; // Force a reflow so the class re-add starts a fresh transition
    button.classList.add(ACTIVE_CLASS);
};

const playAdlib = function (key) {
    const adlib = adlibs.get(key);
    if (!adlib) return;
    const { button, audio } = adlib;
    audio.currentTime = 0;
    audio.play().catch(() => {}); // Ignore play() being interrupted by a rapid re-press
    animateKey(button, audio);
};

const handleKeydown = function (e) {
    // Ignore held-down keys and shortcuts like Cmd+R
    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
    playAdlib(e.key.toUpperCase());
};

document.querySelectorAll('.content__keys-item').forEach((button) => {
    const { key } = button.dataset;
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    adlibs.set(key, { button, audio });

    button.addEventListener('click', () => playAdlib(key));
    button.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        button.classList.remove(ACTIVE_CLASS);
    });
});

window.addEventListener('keydown', handleKeydown);
