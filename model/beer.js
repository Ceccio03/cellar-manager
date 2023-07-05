class Beer extends Beverage {
    constructor(name, maker, vol, type, malt) {
        super(name, maker, vol, type);
        this.malt = malt;
    }

    toString() {
        const beverage = super.toString() + 'Malt: ' + this.malt + '\n';

        return beverage;
    }
}