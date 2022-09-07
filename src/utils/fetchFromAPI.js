import axios from 'axios'
// const axios = require("axios");
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    return new Promise((resolve,reject)=>{
        axios.get(`${BASE_URL}/${url}`, options)
            .then(data => {
                if (data.status===200){
                    resolve(data.data)
                }else if (data.status===404){
                    reject('Unable to find API request')
                }
            }).catch(e => {reject(e.error)})
    })


}

