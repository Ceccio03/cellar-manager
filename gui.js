class GUI {
    constructor() {
        this.cellar = new Cellar();
        this.beverage = new Beverage();

        const data = this.cellar.loadData();

        if (data) {
            this.beverage.fromDbObject(data);
        }
    }

    start() {
        while (true) {
            const firstChoice = prompt('Hai 4 opzioni: \n' + '1) Guarda la lista delle bevande\n' + '2) Aggiungi una bevanda\n' + '3) Rimuovi una bevanda\n' + '4) Esci dal programma');

            if (firstChoice === '1') {
                this.showBeverages();
            } else if (firstChoice === '2') {
                this.insertBeverage();
            } else if (firstChoice === '3') {
                this.deleteBeverage();
            } else if (firstChoice === '4') {
                break;
            } else {
                alert('Hai scelto l\'opzione sbalgiata');
            }
        }
    }

    showBeverages() {
        const allBeverages = this.cellar.getAllBeverageCards();

        alert(allBeverages);
    }

    insertBeverage() {
        const name = prompt('Inserisci nome');
        const maker = prompt('Inserisci il produttore');
        const dop = prompt('Inserisci l\'anno di produzione');
        const vol = prompt('Inserisci gradazione alcolica');
        const type = prompt('Inserisci la tipologia');
        const beverage = new Beverage(name, maker, dop, vol, type);

        this.beverage.addBeverage
    }

    deleteBeverage() {
        const humanIndex = prompt('Inserisci il numero della bevanda da eliminare');
        const index = humanIndex - 1;
        this.cellar.removeBeverage(index);

        this.storage.saveData(this.beverage.beveragesArray);

    }
}