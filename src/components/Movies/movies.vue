<template>
  <div class="Movies__Wrapper">
    <div class="col-md-3 col-xs-12" id="filters">
      filters
    </div>

    <div class="col-md-9 col-xs-12" id="movies">
      movies
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import moviesTypes from '@/types/movie'

  export default {
    name: 'movie-list',
    mounted () {
      const cinemaId = this.$route.params.id

      this.fetchMovies(cinemaId)
    },
    methods: {
      ...mapActions({
        fetchMovies: moviesTypes.actions.fetchMovies
      })
    },
    computed: {
      ...mapGetters({
        movies: moviesTypes.getters.movies
      })
    }
  }
</script>

<style scoped>
  .Movies__Wrapper {
    margin: 0;
  }
</style>

