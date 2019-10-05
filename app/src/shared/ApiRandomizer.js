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

        // Set state variables
        this.api = null;
        this.key = null;
    }

    // Pull a random api
    pullRandomApi() {
        // Build API name array
        for (let i in apis.url) {
            this.apiNames.push(i);
        }

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
            case 'jokes':
                let jokesUrl = this.apiUrls.url[api];
                let jokesKey = this.apiKeys.keys[api];

                this.setApi(jokesUrl, jokesKey);

                /*
                console.log("API Key:", jokesKey);
                console.log("API URL:", jokesUrl);
                */
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

                this.setApi(dogsUrl, dogsKey);

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
                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                "x-rapidapi-key": this.key,
                "accept": "application/json"
            },

            jokes: {
                "x-rapidapi-host": "webknox-jokes.p.rapidapi.com",
                "x-rapidapi-key": this.key,
            },

            cats: {
                "x-api-key": this.key
            }
        }

        // Create a request
        let request = {
            url: api,
            headers: {
                "x-api-key": this.key,
                "x-rapidapi-host":
                
            }
        }
    }
}