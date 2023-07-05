class Cellar {
    constructor(beveragesArray = []) {
        this.beveragesArray = beveragesArray;
    }

    get beverageCount() {
        const count = this.beveragesArray.length;

        return count;
    }

    addBeverage(beverage) {
        this.beveragesArray.push(beverage);
    }

    removeBeverage(index) {
        this.beveragesArray.splice(index, 1);
    }

    getAllBeverageCards() {
        let allCards = '';

        for (let i = 0; i < this.beveragesArray.length; i++) {
            const element = this.beveragesArray[i];
            const humanIndex = i + 1;

            allCards += humanIndex + ') ' + element.toString();
            allCards += '------------------------------\n';
        }
        return allCards;
    }

    static fromDbObject(data) {
        const tempArray = [];

        for (const genericObject of data) {
            if (genericObject.region) {
                const wine = new Wine(genericObject.name, genericObject.maker, genericObject.vol, genericObject.type, genericObject.dop, genericObject.region, genericObject.vine);
                tempArray.push(wine);
            } else {
                const beer = new Beer(genericObject.name, genericObject.maker, genericObject.vol, genericObject.type, genericObject.dop, genericObject.malt);
                tempArray.push(beer);
            }
        }
        const newCellar = new Cellar(tempArray);

        return newCellar;
    }
}