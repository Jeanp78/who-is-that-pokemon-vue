<template>
  <div class="pokemon-container">
    <img v-if="!showPokemon"
      class="hidden-pokemon"
      :src="imgSrc"
      alt="PokemonPics"
    />
    <img
      v-else
      class="fade-in"
      :src="imgSrc"
      alt="PokemonPics"
    /> 
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon:{
      type: Boolean,
      default: false,
      required: true
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>