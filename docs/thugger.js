const keys = document.querySelectorAll('.content__keys-item');

const handleKeyCode = function (e) {
    let keyCode; // Variable to store keyCode, depending on click or keydown
    if (e.type === 'click') {
        keyCode = e.currentTarget.dataset.key;
    } else {
        keyCode = e.keyCode;
    }
    handleAudio(keyCode);
};

const handleAudio = function (keyCode) {
    const currentKeyClicked = document.querySelector(`.content__keys-item[data-key="${keyCode}"]`);
    const currentAudio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const currentAudioDuration = document.querySelector(`audio[data-key="${keyCode}"]`).duration;

    if (!currentKeyClicked) return;
    playAdlib(currentAudio);
    updateVariableDuration(currentAudioDuration);
    addRemoveActiveClass(currentKeyClicked);
};

const updateVariableDuration = function (audioDuration) {
    const root = document.documentElement;
    root.style.setProperty('--transition-time', `${audioDuration / 1.65}s`);
};

const playAdlib = function (currentAudio) {
    if (!currentAudio) return;
    currentAudio.currentTime = 0;
    currentAudio.play();
};

const addRemoveActiveClass = function (keyClicked) {
    keyClicked.classList.toggle('adlib__playing--active');
    keys.forEach((key) =>
        key.addEventListener('transitionend', function (e) {
            if (e.propertyName !== 'transform') return;
            key.classList.remove('adlib__playing--active');
        })
    );
};

window.addEventListener('keydown', handleKeyCode);
keys.forEach((key) => key.addEventListener('click', handleKeyCode));
