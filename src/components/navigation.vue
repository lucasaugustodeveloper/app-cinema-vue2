<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#nav-collapse"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">Vue.js 2</a>
          </div>
        </div> <!-- end first column -->

        <div class="col-md-10">
          <div class="collapse navbar-collapse" id="nav-collapse">
            <ul class="nav navbar-nav">
              <li>
                <router-link to="/">{{ $t('navigation.cinema') }}</router-link>
              </li>
              <li v-if="isLogged">
                <router-link to="/profile">{{ $t('navigation.my_account') }}</router-link>
              </li>
              <li v-if="isLogged">
                <router-link to="/bookings">{{ $t('navigation.bookings') }}</router-link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li v-if="!isLogged">
                <router-link to="/login">{{ $t('navigation.login') }}</router-link>
              </li>
              <li v-if="!isLogged">
                <router-link to="/register">{{ $t('navigation.register') }}</router-link>
              </li>
              <li v-if="isLogged">
                <a href="#" @click.prevent="logout()">{{ $t('navigation.logout') }}</a>
              </li>
            </ul>
          </div>
        </div>

      </div> <!-- end row -->
    </div> <!--  end container -->
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import authTypes from '@/types/auth'

  export default {
    name: 'navigation',
    methods: {
      ...mapActions({
        _logout: authTypes.actions.logout
      }),

      logout() {
        this._logout()
        this.$router.push({ name: 'login' })
      },
    },
    computed: {
      ...mapGetters({
        isLogged: authTypes.getters.logged
      })
    }
  }
</script>
