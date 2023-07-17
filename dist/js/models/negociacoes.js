export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Array<tipo> é o msm que [](vazio)
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
