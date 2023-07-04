class Wine extends Beverage {
    constructor(name, maker, dop, vol, type, region, vine) {
        super(name, maker, dop, vol, type);
        this.region = region;
        this.vine = vine;
    }

    toString() {
        const beverage = super.toString() + 'Regione: ' + this.region + '\n' + 'Vino: ' + this.vine + '\n';

        return beverage;
    }
}