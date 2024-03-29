import React from 'react';
import { Row, Col } from 'react-bootstrap';
import uuid from 'uuid';
import Results from '../components/Results';

const apis = require('../apis.json');
const keys = require('../api_keys.json');
const axios = require('axios');

// TODO: Get a click event to fire when clicking on a candidate.

/**
 * This class gets the list of our APIs and pulls a random name; it then pulls the correspnding key
 * and gives access to both.
 */
export default class ApiRandomizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidate: '',
            winner: '',
            winnerId: '',
            isMounted: true
        }

        this.apiKeys = keys;
        this.apiUrls = apis;
        this.apiNames = new Array();

        // Set api variables
        this.api = null;
        this.key = null;

        // Bind this keyword in handClick()
        this.setWinner = this.setWinner.bind(this);

        // Run main functions of class
        this.pullRandomApi();
        this.getData(this.api, this.key);
    }

    componentDidMount() {
        // Pull api stuff and set candidate state.
        this.pullRandomApi();
    }

    // Pull a random api
    pullRandomApi() {
        // Build API name array
        for (let i in apis.url) {
            this.apiNames.push(i);
        }

        // Pick random API name
        let api = this.apiNames[Math.floor(Math.random() * Math.floor(this.apiNames.length))];
        this.state = {
            candidate: ''
        }
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
                break;
            case 'dogs':
                // Dog api doesn't require a key.
                let dogsUrl = this.apiUrls.url[api];

                this.setApi(dogsUrl);
                break;
            case 'nasa':
                let nasaUrl = this.apiUrls.url[api];
                let nasaKey = this.apiKeys.keys[api];

                this.setApi(nasaUrl, nasaKey);
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
                    const chuckQuote = response.data.value;
                    this.setState({ candidate: chuckQuote });
                });
                break;
            case 'http://numbersapi.com/random':
                request.headers = API_HEADERS.numbers;
                axios.get(api, request).then((response) => {
                    const numFact = response.data;
                    this.setState({ candidate: numFact });
                });
                break;
            case 'https://api.thecatapi.com/v1/images/search':
                request.headers = API_HEADERS.cats;
                axios.get(api, request).then((response) => {
                    const catPic = response.data[0].url;
                    this.setState({ candidate: catPic })
                });
                break;
            case 'https://dog.ceo/api/breeds/image/random':
                axios.get(api, request).then((response) => {
                    const dogPic = response.data.message;
                    this.setState({ candidate: dogPic })
                });
                break;
            case 'https://images-api.nasa.gov':
                axios.get(api + API_HEADERS.nasa.key).then((response) => {
                    // Choose random object from get response
                    let nasaObj = response.data.collection.items[Math.floor(Math.random() * Math.floor(response.data.collection.items.length))]
                    const nasaPic = nasaObj.links[0].href;

                    this.setState({ candidate: nasaPic });
                });
                break;
            default:
                throw new Error("Ooops something went wrong with your axios switch.");
        }
    }

    getCandidate() {
        let candidateString = this.state.candidate;
        return candidateString;
    }

    getPoll() {
        let poll = {
            candidateOne: this.getCandidate(),
            candidateTwo: this.getCandidate(),
            winner: this.getWinner()
        }

        return poll;
    }

    setWinner = () => {
        console.log("WINNER");
        this.setState(state => ({
            winner: this.getCandidate(),
            winnerId: uuid()
        }));

        setTimeout(() => {
            alert("You chose: " + this.getWinner());
            window.location.href = '/this_or_that';
        }, 3000);
    }

    getWinner() {
        return this.state.winner;
    }

    getWinnerId() {
        return this.state.winnerId;
    }

    render() {
        if (this.getCandidate().endsWith('.png') || this.getCandidate().endsWith('.jpg') || this.getCandidate().endsWith('.jpeg') || this.getCandidate().endsWith('.gif')) {
            return (
                <div>
                    <img className="voters-booth" id="pic-box" src={this.getCandidate()} alt="Some Random Image" onClick={this.setWinner} />
                </div>
            );

        } else {
            return (
                <div id="text-box" onClick={this.setWinner}>
                    <p id="text-box-text">{this.getCandidate()}</p>
                </div>
            );
        }
    }
}