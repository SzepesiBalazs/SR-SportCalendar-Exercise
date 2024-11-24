import { createRouter, createWebHistory } from 'vue-router'
import EventCalendar from '../views/EventCalendar.vue'
import AddEvent from '../views/AddEvent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventCalendar,
    },
    {
      path: '/about',
      name: 'about',
      component: AddEvent,
    },
  ],
})

export default router
