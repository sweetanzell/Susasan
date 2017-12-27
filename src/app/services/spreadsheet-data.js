import Tabletop from "tabletop";


const apiLinks = {
    test: 'https://docs.google.com/spreadsheets/d/1UKHy7t3R5yIkQ7vk-1ceJr5X7fcuP-jsenFMx0M6WcM/edit?usp=sharing'
}

export class DataService {


    fetchData(apiKey, callback) {
        Tabletop.init({
            key: apiKey,
            callback: function (data, tabletop) {
                callback(null, data);
            }
        })

    }


    getTests(cb) {
        this.fetchData(apiLinks.test, function (err, data) {

            console.log(data);

            cb(null, data);
        });
    }

}