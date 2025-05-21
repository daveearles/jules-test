import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    name: 'Eduardo'
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    nameUpperCase: (state) => state.name.toUpperCase()
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
