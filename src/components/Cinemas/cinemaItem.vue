<template>
  <div class="CinemaItem__Wrapper col-md-12 col-xs-12">
    <div class="col-md-5 col-xs-12">
      <img :src="cinema.cinema_screenshot" class="img-resposive" />
    </div>

    <div class="col-md-7 col-xs-12">
      <h2>
        <router-link :to="{ name: 'cinema', params: { id: cinema.id } }">
          {{ cinema.cinema_name }}
        </router-link>
      </h2>
      <h3>
        <strong>{{ $t('cinema.address') }}:</strong> {{ cinema.cinema_address }}
      </h3>
      <p>
        <strong>{{ $t('cinema.details') }}:</strong> {{ cinema.cinema_details }}
      </p>
      <p>
        <strong>{{ $t('cinema.telephone') }}:</strong> {{ cinema.cinema_phone }}
      </p>
      <p>
        <strong>{{ $t('cinema.seats') }}:</strong> {{ cinema.cinema_seat_capacity }}
      </p>
      <p>
        <strong>{{ $t('cinema.rooms') }}:</strong> {{ cinema.__meta__.number_of_rooms }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cinema-item',
  props: {
    cinema: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>
  .CinemaItem__Wrapper {
    background: #181D23 !important;
    padding: 10px;
    margin-bottom: 1.5rem;
  }

  .CinemaItem__Wrapper h2 {
    margin-top: 1.5rem;
  }

  .CinemaItem__Wrapper img {
    max-width: 100%;
  }
</style>
