import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage from '@/components/pages/PokemonPage'
import { pokemons } from "../mocks/pokemons.mock";

describe('Pruebas sobre Pokemon Page', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })


    test('Snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Se debe llamar el mixedPokemons', () => {

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemon')
        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled()

    })

    test('Debe hacer el snapshot cuando cargan los componentes', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemonAnswer: pokemons[0],
                    showPokemon: false,
                    message: "",
                    showAnswer: false
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemonAnswer: pokemons[0],
                    showPokemon: false,
                    message: "",
                    showAnswer: false
                }
            }
        })

        const picture = wrapper.find('pokemon-pictures-stub')
        const options = wrapper.find('pokemon-options-stub')

        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()


        expect(picture.attributes('pokemonid')).toBe('5')
        expect(options.attributes('options')).toBeTruthy()


    })

    test('pruebas con checkAnswer', async () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemonAnswer: pokemons[0],
                    showPokemon: false,
                    message: "",
                    showAnswer: false
                }
            }
        })

        await wrapper.vm.checkAnswer(5)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correcto, el pokemon es ${pokemons[0].name}`)
        

        await wrapper.vm.checkAnswer(10)

        expect(wrapper.vm.message).toBe(`Opss, el pokemon era ${pokemons[0].name}`)


    })


})
