class GUI {
    constructor() {
        const data = Storage.loadData();

        if (data !== null) {
            this.cellar = Cellar.fromDbObject(data);
        } else {
            this.cellar = new Cellar();
        }
    }

    start() {
        while (true) {
            const firstChoice = prompt("Ciao utente la nostra cantina ha a disposizione " + this.cellar.beveragesArray.length + "Hai 4 opzioni: \n" + "1) Guarda la lista delle bevande\n" + "2) Aggiungi una bevanda\n" + "3) Rimuovi una bevanda\n" + "4) Esci dal programma");

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
        const insertChoice = prompt('Vuoi inserire una birra  o un vino?');

        if (insertChoice !== 'birra' || insertChoice !== 'vino') {
            alert('Non puoi inserire altri tipi di bevande');
            return;
        }

        const name = prompt('Inserisci nome');
        const maker = prompt('Inserisci il produttore');
        const vol = parseInt(prompt('Inserisci gradazione alcolica'));
        const type = prompt('Inserisci la tipologia');
        const dop = prompt('Inserisci la data');

        if (insertChoice === 'birra') {
            const malt = prompt('Inserisci il tipo di malto');
            const beer = new Beer(name, maker, vol, type, dop, malt);

            this.cellar.addBeverage(beer);
        } else {
            const region = prompt('Inseriesci la regione');
            const vine = prompt('Inserisci il vitigno');
            const wine = new Wine(name, maker, vol, type, dop, region, vine);

            this.cellar.addBeverage(wine);
        }
    }

    deleteBeverage() {
        const humanIndex = prompt('Inserisci il numero della bevanda da eliminare');
        const index = humanIndex - 1;

        this.cellar.removeBeverage(index);
        this.storage.saveData(this.beverage.beveragesArray);

    }
}