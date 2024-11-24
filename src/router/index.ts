import { createRouter, createWebHistory } from 'vue-router'
import EventCalendar from '../views/EventCalendar.vue'
import AddEvent from '../views/AddEvent.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventCalendar,
    },
    {
      path: '/add-event',
      name: 'add-event',
      component: AddEvent,
    },
  ],
})

export default router
