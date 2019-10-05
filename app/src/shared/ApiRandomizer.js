const apis = require('../apis.json');
const keys = require('../api_keys.json');
const axios = require('axios');

/**
 * This class gets the list of our APIs and pulls a random name; it then pulls the correspnding key
 * and gives access to both.
 */
export default class ApiRandomizer {
    constructor() {
        this.apiKeys = keys;
        this.apiUrls = apis;
        this.apiNames = new Array();

        // Set api variables
        this.api = null;
        this.key = null;

        // Set poll candidate
        this.candidate = null;

        // Run main functions of class
        this.pullRandomApi();
        this.getData('https://api.chucknorris.io/jokes/random', this.key);
    }

    // Pull a random api
    pullRandomApi() {
        // Build API name array
        for (let i in apis.url) {
            this.apiNames.push(i);
        }

        // Pick random API name
        let api = this.apiNames[Math.floor(Math.random() * Math.floor(this.apiNames.length))];

        // Pull api key based on name generated
        switch (api) {
            case 'chuck_norris_jokes':
                let chuckUrl = this.apiUrls.url[api];
                let chuckKey = this.apiKeys.keys[api];

                this.setApi(chuckUrl, chuckKey);

                /*
                console.log("API Key:", chuckKey);
                console.log("API URL:", chuckUrl);
                */
                break;
            case 'numbers':
                let ronSwansonQuotesUrl = this.apiUrls.url[api];
                let ronSwansonQuotesKey = this.apiKeys.keys[api];

                this.setApi(ronSwansonQuotesUrl, ronSwansonQuotesKey);
                break;
            case 'cats':
                let catsUrl = this.apiUrls.url[api];
                let catsKey = this.apiKeys.keys[api];

                this.setApi(catsUrl, catsKey);

                /*
                console.log("API Key:", catsKey);
                console.log("API URL:", catsUrl);
                */
                break;
            case 'dogs':
                // Dog api doesn't require a key.
                let dogsUrl = this.apiUrls.url[api];

                this.setApi(dogsUrl);

                /*
                console.log("API Key:", dogsKey);
                console.log("DOG URL:", dogsUrl);
                */
                break;
            case 'nasa':
                let nasaUrl = this.apiUrls.url[api];
                let nasaKey = this.apiKeys.keys[api];

                this.setApi(nasaUrl, nasaKey);

                /*
                console.log("API Key:", nasaKey);
                console.log("NASA URL:", nasaUrl);
                */
                break;
            default:
                throw new Error("Something went wrong with the api randomizer.");
        }
    }

    /**
     * This function sets the current API that the class generated
     * 
     * @param {string} api 
     * @param {string} key 
     */
    setApi(api, key) {
        this.api = api;
        this.key = key;
    }

    /**
     * This funtion gets the api data and returns it as an object.
     */
    getApi() {
        let api = {
            "url": this.api,
            "key": this.key
        }

        return api;
    }

    /**
     * This function gets the comparable data out of the given api and builds a JSON object out of it.
     * 
     * @param {string} api 
     * @param {string} key 
     */
    getData(api, key) {
        const API_HEADERS = {
            chuck_norris_jokes: {
                url: "https://api.chucknorris.io/jokes/random"
            },

            numbers: {
                url: "https://http://ron-swanson-quotes.herokuapp.com/v2/quotes"
            },

            cats: {
                "x-api-key": this.key
            },

            nasa: {
                key: "/search?keywords={mars}"
            }
        }

        // Create a request
        let request = axios.create({
            url: api,
            timeout: 1000,
            headers: {}
        });

        // Create axios request
        switch (api) {
            case 'https://api.chucknorris.io/jokes/random':
                request.headers = API_HEADERS.chuck_norris_jokes;
                axios.get(api, request).then((response) => {
                    this.candidate = response ? response.data.value : "";
                    console.log("Chuck Norris:" + this.candidate);
                });
                break;
            case 'http://numbersapi.com/random':
                request.headers = API_HEADERS.numbers;
                axios.get(api, request).then((response) => {
                    this.candidate = response.data;
                });
                break;
            case 'https://api.thecatapi.com/v1/images/search':
                request.headers = API_HEADERS.cats;
                axios.get(api, request).then((response) => {
                    this.candidate = response.data[0].url;
                });
                break;
            case 'https://dog.ceo/api/breeds/image/random':
                axios.get(api, request).then((response) => {
                    this.candidate = response.data.message;
                });
                break;
            case 'https://images-api.nasa.gov':
                axios.get(api + API_HEADERS.nasa.key).then(function (response) {
                    // Choose random object from get response
                    let nasaObj = response.data.collection.items[Math.floor(Math.random() * Math.floor(response.data.collection.items.length))]
                    this.candidate = nasaObj.links[0].href;
                });
                break;
            default:
                throw new Error("Ooops something went wrong with your axios switch.");
        }
    }

    setCandidate = (candidate) => {
        this.candidate = candidate;
    }

    getCandidate() {
        return this.candidate;
    }
}