import PokemonOptions from '@/components/PokemonOptions'
import { shallowMount } from '@vue/test-utils'
import { pokemons } from '../mocks/pokemons.mock'

describe('Testing PokemonOptions', () => {

    let wrapper
    beforeEach(()=>{
       wrapper = shallowMount(PokemonOptions, {
        props:{
            options: pokemons
        }
       }) 
    })


    test('Debe hacer match con el snapshot', () => {
        
         expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de mostrar las cuatro opciones correctamente', ()=>{
         
       const [pikachu,bulbasaur,charmander,mew] = wrapper.findAll('li')
       expect([pikachu,bulbasaur,charmander,mew].length).toBe(4)
       expect(pikachu.text()).toBe('pikachu')
       expect(bulbasaur.text()).toBe('bulbasaur')
       expect(charmander.text()).toBe('charmander')
       expect(mew.text()).toBe('mew')

    })

    test('debe emitir la seleccion con sus respectivos parametros', ()=>{
    
        const li = wrapper.findAll('li')
        li[0].trigger('click')
        li[1].trigger('click')
        li[2].trigger('click')
        li[3].trigger('click')
     
        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toStrictEqual([5])
        expect(wrapper.emitted('selection')[1]).toStrictEqual([10])
        expect(wrapper.emitted('selection')[2]).toStrictEqual([12])
        expect(wrapper.emitted('selection')[3]).toStrictEqual([7])
        
    })

})
