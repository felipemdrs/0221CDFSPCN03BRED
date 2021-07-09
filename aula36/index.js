const operWeatherApi = require('./externals/openweather')

async function executa(cidade) {
    const temperatura = await operWeatherApi.obterTemperatura(cidade)

    if (typeof temperatura === 'number') {
        console.log(`A temperatura em ${cidade} é de ${temperatura}°`)
    } else {
        console.log('Cidade não encontrada')
    }
}

executa('Buenos Aires')