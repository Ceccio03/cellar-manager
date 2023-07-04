class Storage {
    constructor() {

    }

    saveData(data) {
        const dataString = JSON.stringify(data);

        localStorage.setItem('beveragesArray', dataString);
    }

    loadData() {
        const dataString = localStorage.getItem('beveragesArray');

        if (dataString) {
            const data = JSON.parse(dataString);

            return data;
        }
        return null;
    }
}