import Vue from 'vue'
import App from '@/App.vue'

import router from '@/router'

import Vuex from 'vuex'
import VueResource from 'vue-resource'
import BlockUI from 'vue-blockui'

import globalTypes from '@/types/global'
import authModule from '@/modules/auth'
import cinemaModule from '@/modules/cinema'
import movieModule from '@/modules/movie'

import VeeValidade, { Validator } from 'vee-validate'
import { ClientTable } from 'vue-tables-2'
import VueI18n from 'vue-i18n'

import validatorEs from '@/validator/es';
import validatorEn from '@/validator/en';
import messages from '@/translations'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(BlockUI)
Vue.use(VueI18n)

Vue.http.options.root = 'http://apicinema.lucasaugusto.dev.br/api/v1'
Vue.http.interceptors.push((req, next) => {
  req.headers.set('Authorization', `Bearer ${window.localStorage.getItem('_token')}`)
  next()
})

Validator.localize('en', validatorEn)
Vue.use(VeeValidade)
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default')

export const store = new Vuex.Store({
  state: {
    processing: false,
    language: 'en'
  },
  actions: {
    [globalTypes.actions.changeLanguage]: ({ commit }, lang) => {
      commit(globalTypes.mutations.setLanguage, lang)


      switch (lang) {
        case 'es': {
          Validator.localize('es', validatorEs)
          break
        }

        case 'en': {
          Validator.localize('en', validatorEn)
          break
        }

        default: {
          Validator.localize('en', validatorEn)
        }
      }
    }
  },
  getters: {
    [globalTypes.getters.processing]: state => state.processing,
    [globalTypes.getters.language]: state => state.language,
  },
  mutations: {
    [globalTypes.mutations.startProcessing](state) {
      state.processing = true
    },
    [globalTypes.mutations.stopProcessing](state) {
      state.processing = false
    },

    [globalTypes.mutations.setLanguage](state, lang) {
      state.language = lang
    }
  },
  modules: {
    authModule,
    cinemaModule,
    movieModule,
  }
})

const i18n = new VueI18n({
  locale: store.state.language,
  messages
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  i18n,
  router
})
