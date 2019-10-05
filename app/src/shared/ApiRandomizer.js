const apis = require('../apis.json');
const keys = require('../api_keys.json');

export default class ApiRandomizer {
    constructor() {
        this.apiKeys = keys;
        this.apiUrls = apis;
        this.apiNames = new Array();
    }

    // Pull a random api
    pullRandomApi() {
        // Build API name array
        for (let i in apis.url) {
            this.apiNames.push(i);
        }

        let api = this.apiNames[Math.floor(Math.random() * Math.floor(this.apiNames.length))];

        console.log(api);

        // Pull api key based on name generated
        switch (api) {
            case "chuck_norris_jokes":
                let chuckKey = this.apiKeys.keys[api];
                let chuckUrl = this.apiNames.url[api];

                console.log("API Key:", chuckKey);
                console.log("API URL:", chuckUrl);
                break;
            case 'jokes':
                let jokesKey = this.apiKeys.keys[api];
                let jokesUrl = this.apiUrls.url[api];

                console.log("API Key:", jokesKey);
                console.log("API URL:", jokesUrl);
                break;
            case 'cats':
                let catsKey = this.apiKeys.keys[api];
                let catsUrl = this.apiUrls.url[api];

                console.log("API Key:", catsKey);
                console.log("API URL:", catsUrl);
                break;
            case 'dogs':
                let dogsKey = this.apiKeys.keys[api];
                let dogsUrl = this.apiUrls.url[api];

                console.log("API Key:", dogsKey);
                console.log("DOG URL:", dogsUrl);
                break;
            case 'nasa':
                let nasaKey = this.apiKeys.keys[api];
                let nasaUrl = this.apiUrls.url[api];

                console.log("API Key:", nasaKey);
                console.log("NASA URL:", nasaUrl);
                break;
            default:
                throw new Error("Something went wrong with the api randomizer.");
        }
    }

    concatKeysAndNames(name, key) {
        let apiKey = this.apiKeys.key;
        let apiName = this.apiNames.name;

        return
    }
}