<template>
  <div class="Filter__Wrapper">
    <div class="well">
      <h2 class="text-center" v-html="$t('filter.cinema')"></h2>
      <label
        class="control-label"
        v-html="$t('filter.search')"
      />
      <input
        type="text"
        v-model="search"
        class="form-control"
        :placeholder="$t('filter.search')"
      >

      <hr />

      <label
        class="control-label"
        v-html="$t('filter.rooms')"
      />
      <select v-model="rooms" class="form-control">
        <option v-for="room in arrRooms" :value="room" :key="room">
          {{ room }}
        </option>
      </select>

      <hr />

      <label class="control-label" v-html="$t('filter.seats')" />
      <select v-model="seats" class="form-control">
        <option
          v-for="seat in arrSeats"
          :key="seat"
          :value="seat"
        >
          {{ seat }}
        </option>
      </select>

      <hr />

      <button
        type="button"
        class="btn btn-block btn-lg btn-warning"
        @click="clearFilters"
      >
        {{ $t('filter.clear') }}
      </button>

    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import cinemaTypes from '@/types/cinema'

  export default {
    name: 'cinema-filter',
    data () {
      return {
        arrRooms: [0,5,10,15,20,25,30],
        arrSeats: [100,200,300,400,500,600,700,800,900,1000],
      }
    },
    methods: {
      ...mapMutations({
        setSeats: cinemaTypes.mutations.setSeats,
        setRooms: cinemaTypes.mutations.setRooms,
        setSearch: cinemaTypes.mutations.setSearch,
        clearFilters: cinemaTypes.mutations.clearFilters,
      })
    },
    computed: {
      ...mapGetters({
        query: cinemaTypes.getters.search,
        numberOfRooms: cinemaTypes.getters.rooms,
        numberOfSeats: cinemaTypes.getters.seats,
      }),

      search: {
        get () {
          return this.query
        },
        set (value) {
          this.setSearch(value)
        },
      },

      rooms: {
        get () {
          return this.numberOfRooms
        },
        set (value) {
          this.setRooms(value)
        },
      },

      seats: {
        get () {
          return this.numberOfSeats
        },
        set (value) {
          this.setSeats(value)
        },
      },
    },
  }
</script>

<style scoped>
  .Filter__Wrapper {
    height: 100vh;
  }

  .Filter__Wrapper h2 {
    margin-top: 0 !important;
  }

  .Filter__Wrapper .well {
    height: 100%;
  }
</style>
