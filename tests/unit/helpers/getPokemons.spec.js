import { getPokemons, pokemonOptions } from '@/helpers/getPokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

describe('TEST SOBRE EL GETPOKEMON.JS', () => {

   test('Debe regresar un array de numeros', () => {

      const array = getPokemons()

      const areNumbers = array.map((value, index) => typeof (array[index]) == "number")

      expect(array.length).toBe(650)
      expect(areNumbers).toBeTruthy()

   })

   test('debe retornar un arreglo de 4 elementos con nombres de pokemons', async () => {
      const pokemonNames = await pokemonOptions([1, 2, 3, 4])
      console.log(pokemonNames)
      expect(pokemonNames).toStrictEqual([
         { name: 'bulbasaur', id: 1 },
         { name: 'ivysaur', id: 2 },
         { name: 'venusaur', id: 3 },
         { name: 'charmander', id: 4 }
       ])

   })

   test('getPokemonOptions debe retornar un arreglo mezclado', async () => {

      const pokemon = await getPokemonOptions()
      expect(pokemon).toEqual([
         {
            name: expect.any(String),
            id: expect.any(Number)
         },
         {
            name: expect.any(String),
            id: expect.any(Number)
         }
         ,
         {
            name: expect.any(String),
            id: expect.any(Number)
         },
         {
            name: expect.any(String),
            id: expect.any(Number)
         }
      ])

   })


})