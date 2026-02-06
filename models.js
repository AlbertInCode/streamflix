class Multimedia {
    #views;

    constructor(titol, durada) {
        this.titol = titol;
        this.durada = durada;
        this.#views = 0;
    }

    play() {
        this.#views++;

        return `Reproduint "${this.titol}" - Durada: ${this.durada} minuts. Views: ${this.#views}`;
    }

    getViews() {
        return this.#views;
    }

    #calcularCostServer() {
        return this.durada * 0.01 * this.#views;
    }
}