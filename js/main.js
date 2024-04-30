class Main {
    constructor() {
        this.DOM = {
            audios: document.querySelectorAll('.audio'),
            player: document.querySelector('#player')
        }
        this.init();
    }
    init() {
        this.events();
    }
    events() {
        this.DOM.audios.forEach(audio => {
            audio.addEventListener('click', this.playAudio.bind(this));
        })
    }
    playAudio(e) {
        const path = e.target.getAttribute('data-audio');
        
        this.DOM.player.pause();
        this.DOM.player.currentTime = 0;

        this.DOM.player.src = path;
        this.DOM.player.play();
    }
}

new Main();