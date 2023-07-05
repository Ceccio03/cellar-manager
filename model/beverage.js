class Beverage {
    constructor(name, maker, vol, type) {
        this.name = name;
        this.maker = maker;
        this.vol = vol;
        this.type = type;
    }

    toString() {
        const beverage = 'Nome: ' + this.name + '\n' + 'Produttore: ' + this.maker + '\n' + 'Quantità: ' + this.vol + '\n' + 'Tipo bevanda: ' + this.type + '\n';

        return beverage;
    }
}