import PokemonPictures from '@/components/PokemonPictures'
import { shallowMount } from '@vue/test-utils'


describe('PokemonPictures component', ()=>{

   test('Debe hacer match con el snapshot', ()=>{
      const wrapper = shallowMount(PokemonPictures, {
        props:{
            pokemonId: 1,
            showPokemon: false
        }
      })
             
      expect(wrapper.html()).toMatchSnapshot()
   })

   test('Debe mostrar la imagen oculta y el pokemon 100', ()=>{
      
    const wrapper = shallowMount(PokemonPictures, {
        props:{
            pokemonId: 100,
            showPokemon: false
        }
      })

      const [img1, img2] = wrapper.findAll('img')
      
      expect(img1.exists()).toBeTruthy()
      expect(img1.attributes().src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
      expect(img2).toBe(undefined)
      expect(img1.classes('hidden-pokemon')).toBeTruthy()
       
       //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg
    })
   
   test('Debe mostrar el pokemon si showPokemon:true', ()=>{
   
    const wrapper = shallowMount(PokemonPictures, {
        props:{
            pokemonId: 100,
            showPokemon: true
        }
      })

      const img = wrapper.find('img')
      
      expect(img.exists()).toBe(true)
      
      expect(img.classes('hidden-pokemon')).toBeFalsy()
      expect(img.classes('fade-in')).toBeTruthy()

   })

})