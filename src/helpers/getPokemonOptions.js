import pokemonAPI from "@/api/PokemonApi"

export const getPokemons = () => {

    const array = Array.from(Array(650))

    return array.map((value, index) => index + 1)

}

const getPokemonOptions = async () => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const resp = await pokemonOptions(mixedPokemons.splice(0, 4))
    return resp
}

export const pokemonOptions = async ([a, b, c, d] = arreglo) => {

    // const {data} = await pokemonAPI.get(`/1`)
    // console.log(data.name) 
    const arrPromises = [
        pokemonAPI.get(`${a}`),
        pokemonAPI.get(`${b}`),
        pokemonAPI.get(`${c}`),
        pokemonAPI.get(`${d}`)
    ]

    const [pokA, pokB, pokC, pokD] = await Promise.all(arrPromises)

    return [
        { name: pokA.data.name, id: pokA.data.id },
        { name: pokB.data.name, id: pokB.data.id },
        { name: pokC.data.name, id: pokC.data.id },
        { name: pokD.data.name, id: pokD.data.id }
    ]

}


export default getPokemonOptions




