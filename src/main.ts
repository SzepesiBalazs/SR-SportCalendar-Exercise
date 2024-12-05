import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

const app = createApp(App)

const store = createStore({
  state: {
    sportData: [
    ]
  },
  mutations: {
    storeSportData(state, eventDetails) {
        console.log("test", state, eventDetails)
        state.sportData = eventDetails
    },
  },
})

app.use(router)

app.use(store)

app.mount('#app')
