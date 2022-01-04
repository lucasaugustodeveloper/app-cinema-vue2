import namespace from '@/utils/namespace'

export default namespace('cinema', {
  getters: [
    'cinemas',
    'search',
    'rooms',
    'seats'
  ],
  actions: [
    'fetchCinemas',
  ],
  mutations: [
    'clearFilters',
    'receivedCinemas',
    'setSearch',
    'setSeats',
    'setRooms',
  ],
})
