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
      state.processing = true
    },

    [globalTypes.mutations.setLanguage](state, lang) {
      state.language = lang
    }
  },
  modules: {
    authModule
  }
})
