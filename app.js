class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.convas);

        window.addEventListener('resize', this.resize.bind(this). false);
        this.resize();

        
    }

    resize() {

    }

    animate(t) {

    }
}