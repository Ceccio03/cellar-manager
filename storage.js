class Storage {
    constructor() {

    }

    saveData(data) {
        const dataString = JSON.stringify(data);

        localStorage.setItem('beverages', dataString);
    }

    loadData() {
        const dataString = localStorage.getItem('beverages');

        if (dataString) {
            const data = JSON.parse(dataString);

            return data;
        }
        return null;
    }
}