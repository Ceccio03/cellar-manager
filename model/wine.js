class Wine extends Beverage {
    constructor(name, maker, vol, type, region, vine) {
        super(name, maker, vol, type);
        this.region = region;
        this.vine = vine;
    }

    toString() {
        const beverage = super.toString() + 'Regione: ' + this.region + '\n' + 'Vino: ' + this.vine + '\n';

        return beverage;
    }
}