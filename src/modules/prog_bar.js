class ProgressBar {
    constructor() {
        this.progression = document.querySelector('.progression');
        this.event();
    }

    event() {
        window.onscroll = () => this.changeProgression();
    }
    
    changeProgression() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll/height) * 100;
        this.progression.style.width = scrolled + "%";
    }

}

export default ProgressBar;