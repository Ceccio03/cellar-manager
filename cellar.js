class Cantina {
    constructor() {

    }

    beveragesArray(beverage) {
        const beverages = JSON.stringify(beverage);

        localStorage.setItem('beverage', beverages);
    }
}