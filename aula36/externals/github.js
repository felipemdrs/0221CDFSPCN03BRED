const axios = require('axios').default

module.exports.obterRepositorios = async () => {
    const response = await axios.get('https://api.github.com/users/octocat/repos')

    if (response.status === 200) {
        const { data } = response
        const repositorios = data.map(d => d.name)
        console.log(repositorios)
    }
}
