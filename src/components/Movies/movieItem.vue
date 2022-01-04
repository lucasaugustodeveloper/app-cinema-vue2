<template>
  <div class="col-xs-12 MovieItem__Wrapper">
    <div class="col-md-5 col-xs-12">
      <img :src="movie.movie.movie_screenshot" class="img-responsive" alt="">
      <br>

      <button
        v-if="canBooking && booking"
        @click="$emit('startReservation', movie.movie.id)"
        class="btn btn-warning btn-block btn-lg"
        type="button"
      >
        {{ $t('movie.reservation') }}
      </button>
    </div>

    <div class="col-xs-7 col-xs-12">
      <h2>
        {{ $t('movie.name') }}: {{ movie.movie.movie_name }}
      </h2>
      <h3>
        {{ $t('movie.director') }}: {{ movie.movie.movie_director }}
      </h3>
      <p>
        {{ $t('movie.synopsis') }}: {{ movie.movie.movie_synopsis }}
      </p>
      <p>
        {{ $t('movie.room_number') }}: {{ movie.room.room_number }}
      </p>
      <p>
        {{ $t('movie.room_rows') }}: {{ movie.room.room_rows }}
      </p>
      <p>
        {{ $t('movie.room_seats') }}: {{ movie.room.room_seats }}
      </p>

      <div class="col-md-6">
        Show genres this movie
      </div>
      <div class="col-md-6">
        Show hours available
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-item',
  props: {
    movie: {
      type: Object,
      required: true
    },
    booking: {
      type: Boolean,
      required: true
    },
  },
  computed: {
    canBooking () {
      return this.movie.movie_showing_times.length > 0
    }
  }
}
</script>

<style scoped>
  .MovieItem__Wrapper {
    background: #181D23 !important;
    padding: 10px;
  }

  .MovieItem__Wrapper img {
    max-width: 100%;
  }

  .MovieItem__Wrapper h2 {
    margin-top: 0;
  }
</style>

