import pokemonAPI from '@/api/PokemonApi'



describe('PRUEBAS SOBRE EL API', ()=>{

  test('El axios debe estar configurado con el API de pokemon', ()=>{

     expect(pokemonAPI.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')

  })


})