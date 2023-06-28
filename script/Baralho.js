class Baralho{
    constructor(simbolos,nipes){
        this.simbolos = simbolos;
        this.nipes = nipes;
        this.cartas = [];
        this.montaBaralho();
    }

    montaBaralho(){
        this.cartas = [];

        for(let i = 0; i < this.simbolos.length; i++){
            for(let j = 0; j < this.nipes.length; j++){
                let carta = new Carta(this.simbolos[i], this.nipes[j], (i > 9) ? (10):(i+1) );
                this.cartas.push(carta);
            }
        }
    }

    embaralha(){
        for(let i = 0; i < this.cartas.length * 3; i++){
            let indice = Math.floor(Math.random() * this.cartas.length); // Sorteia uma carta aleatoria
            let carta = this.cartas.splice(indice,1); // Retira do baralho 1 lista contendo 1 carta
            this.cartas.push(carta[0]); // insere no fim do baralho a unica carta da lista
        }
    }

    /**
     * O método distribui cartas serve para que o baralho escolha aleatóriamente 3 cartas para o jogador.
     * @param {Number} quantidade
     * @returns {Array<Carta>} Cartas
     */
    distribuiCartas(quantidade){
        let cartas = [];

        for(let i = 0; i < quantidade; i++){
            let indice = Math.floor(Math.random() * this.cartas.length);
            let carta = this.cartas.splice(indice,1);
            cartas.push(carta[0]);
        }

        return cartas;
    }
}