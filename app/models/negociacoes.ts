import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];            // Array<tipo> é o msm que [](vazio)

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {               //ReadonlyArray<tipo> é o msm que readonly tipo[]
        return this.negociacoes;
    }
}