<template>
  <div class="pt-6 pl-10 pr-10 pb-8">
    <div class="row-span-1 grid grid-cols-2 text-2xl bg-blue-200">
      <h1 class="text-right pr-3">{{ currentEvent.matchDate }}</h1>
      <h2 class="text-left">{{ currentEvent.startTime }}</h2>
    </div>
    <div class="row-span-1 grid grid-cols-5 text-2xl bg-gray-200">
      <p class="text-right">{{ currentEvent.countryOfHomeTeam }}</p>
      <p class="text-right">{{ currentEvent.homeTeam }}</p>
      <p class="text-center">vs</p>
      <p class="text-left">{{ currentEvent.awayTeam }}</p>
      <p class="text-left">{{ currentEvent.countryOfAwayTeam }}</p>
    </div>
    <div>
      <p>{{ currentEvent.nameOfCompetetion }}</p>
      <p>{{ currentEvent.stageOfCompetetion }}</p>
      <p>{{ currentEvent.stadium }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import sportData from '../sportData.json'
import { useRoute } from 'vue-router'
import EventDetails from '../components/EventDetails.js'

export default {
  setup() {
    const router = useRoute()
    const data = reactive(sportData)
    const eventId = computed(() => router.params.id)
    const currentEvent = ref(null)

    onMounted(() => {
      console.log(data.data)
      currentEvent.value = data.data.find((e) => parseInt(e.id) === parseInt(eventId.value))

      console.log(currentEvent.value.season)
    })

    return { currentEvent }
  },
}
</script>
