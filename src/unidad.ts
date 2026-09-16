import abstract class Unidad {
    protected vida: number;

    constructor(vida: number) {
    this.setVida(1);
    }

    public estaVivo(): boolean {
    return this.vida > 0;
    }
}

