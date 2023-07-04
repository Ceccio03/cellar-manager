class Beer extends Beverage {
    constructor(name, maker, dop, vol, type, malt) {
        super(name, maker, dop, vol, type);
        this.malt = malt;
    }

    toString() {
        const drink = super.toString() + 'Malt: ' + this.malt + '\n';

        return drink;
    }
}