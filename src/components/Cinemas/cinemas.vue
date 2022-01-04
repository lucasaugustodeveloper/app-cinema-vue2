<template>
  <div class="row">
    <div class="col-md-3 col-xs-12" id="filters">
      <cinema-filter />
    </div>

    <div class="col-md-9 col-xs-12">
      <div v-if="cinemas.length > 0">
        <cinema-item

          v-for="cinema in cinemas"
          :key="cinema.cinema_name"
          :cinema="cinema"
        />
      </div>

      <div v-else>
        <div class="alert alert-danger text-center">
          {{ $t('cinema.empty') }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import cinemaTypes from '@/types/cinema'
  import { mapGetters } from 'vuex'

  import cinemaItem from './cinemaItem'
  import cinemaFilter from './cinemaFilter'

  export default {
    components: { cinemaItem, cinemaFilter },
    name: 'cinemas-list',
    mounted () {
      this.$store.dispatch(cinemaTypes.actions.fetchCinemas)
    },
    computed: {
      ...mapGetters({
        cinemas: cinemaTypes.getters.cinemas
      })
    }
  }
</script>

<style scoped>
  .alert {
    font-size: 2.4rem;
  }
</style>
