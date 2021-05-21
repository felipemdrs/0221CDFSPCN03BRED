function sleep(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            throw Error('Horario indisponivel')
        }, tempo)
    })
}

async function codigoAssincrono() {
    try {
        await sleep(1 * 400)
    } catch (error) {
        console.log(error)
    }
}

codigoAssincrono()
