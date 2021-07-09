const axios = require('axios').default

const API_KEY = '46a7f5b16b69de84be5d11174874d9ee'
const UNITS_METRIC = 'metric'

const client = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: API_KEY,
        units: UNITS_METRIC
    }
})

module.exports.obterTemperatura = async (cidade) => {
    try {
        const response = await client.get('weather', {
            params: { q: cidade }
        })

        return response.data.main.temp
    } catch (error) {
        console.error(error)
        // Empty
    }
}