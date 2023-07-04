class Cellar {
    constructor(beveragesArray = []) {
        this.beveragesArray = beveragesArray;
    }

    addBeverage(bev) {
        this.beveragesArray.push(bev);
    }

    deleteBeverage(index) {
        this.beveragesArray.splice(index, 1);
    }

    getAllBeverageCards() {
        let allCards = '';

        for (let i = 0; i < this.beveragesArray.length; i++) {
            const bev = this.beveragesArray[i];
            const humanIndex = i + 1;

            allCards += humanIndex + ') ' + bev.toString();
            allCards += '------------------------------\n';
        }
        return allCards;
    }

    fromDbObjects(data) {
        for (const genericObject of data) {
            const beverage = new Beverage(genericObject.name, genericObject.maker, genericObject.dop, genericObject.vol, genericObject.type);
            this.beveragesArray.push(beverage);
        }
    }
}