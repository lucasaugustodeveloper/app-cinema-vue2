<template>
  <div class="container-fluid" id="app">
    <navigation />

    <div v-if="processing">
      <BlockUI :message="$t('messages.processing')"></BlockUI>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import globalTypes from '@/types/global'
  import { mapGetters } from 'vuex'
  import Navigation from '@/components/navigation.vue'

  export default {
    components: {
      Navigation
    },
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters({
        processing: globalTypes.getters.processing
      })
    },
  }
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    background-color: #36383a !important;
  }

  .well {
    background-color: #fff !important;
  }

  #app {
    font-family: 'Avenir', Helvetica, sans-serif;
    -webkit-font-smoothing: antiliased;
    color: #2c3e50;
  }

  h1,
  h2,
  h4,
  p {
    color: #fff !important;
  }

  h2,
  a {
    color: #E33A2D !important;
  }

  th,
  td {
    color: #e33a2d !important;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  td {
    background-color: #fff;
  }

  hr {
    border: 1px solid #e33a2d !important;
    width: 100%;
  }

  .page-link.active {
    background-color: #d24839 !important;
    color: #fff !important;
    border: 1px solid #fff !important;
  }
</style>
