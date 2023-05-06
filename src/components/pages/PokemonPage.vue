<template>
  <div v-if="!pokemonAnswer">
    <h1>ESPERE UN MOMENTO</h1>
    <img src="@/assets/loading.jpeg" alt="" width="500" />
  </div>

  <div v-else class="fade-in">
    <h1>¿Quién es ese pokemon?</h1>

    <!--IMAGEN-->
    <PokemonPictures :pokemonId="pokemonAnswer.id" :showPokemon="showPokemon" />
    <!--OPCIONES-->
    <PokemonOptions :options="pokemonArr" @selection="checkAnswer($event)" />
    <div v-if="showAnswer">
    <h2>{{ message }}</h2>
    <button @click="newGame">Jugar de nuevo</button>
    </div>
  </div>
</template>

<script>
import PokemonPictures from "../PokemonPictures.vue";
import PokemonOptions from "../PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

// getPokemonOptions().then(console.log)

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonAnswer: null,
      showPokemon: false,
      message: "",
      showAnswer : false
    };
  },
  methods: {
    async mixPokemon() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemonAnswer = this.pokemonArr[rndInt];

      //  console.log(this.pokemonImg)
      //  console.log(this.pokemonArr)
    },
    checkAnswer(id) {
      this.showPokemon = true;
        this.showAnswer = true
      if (id === this.pokemonAnswer.id) {
        this.message = `Correcto, el pokemon es ${this.pokemonAnswer.name}`;
      } else {
        this.message = `Opss, el pokemon era ${this.pokemonAnswer.name}`;
      }
      console.log(`boton clickeado y el id ${id}`);
    },
    newGame() {
      this.mixPokemon();
      this.showPokemon = false;
      this.message = "";
      this.pokemonArr=[]
      this.pokemonAnswer = null
      this.showAnswer = false 
    },
  },
  mounted() {
    this.mixPokemon();
  },
  components: {
    PokemonPictures,
    PokemonOptions,
  },
};
</script>

