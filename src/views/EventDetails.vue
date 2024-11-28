<template>
  <div class="pt-6 pl-10 pr-10 pb-8">
    <div class="row-span-1 grid grid-cols-2 text-2xl bg-blue-200">
      <h1 class="text-right pr-3">{{ currentEvent.matchDate }}</h1>
      <h2 class="text-left">{{ currentEvent.startTime }}</h2>
    </div>
    <div class="row-span-1 grid grid-cols-5 text-2xl bg-gray-200">
      <p class="text-right font-bold">({{ currentEvent.countryOfHomeTeam }})</p>
      <p class="text-right font-semibold">{{ currentEvent.homeTeam }}</p>
      <p class="text-center font-bold">vs</p>
      <p class="text-left font-semibold">{{ currentEvent.awayTeam }}</p>
      <p class="text-left font-bold">({{ currentEvent.countryOfAwayTeam }})</p>
    </div>
    <div>
      <p class="text-center bg-blue-200 font-extrabold">{{ currentEvent.nameOfCompetetion }}</p>
      <p class="text-center bg-blue-200 font-semibold">{{ currentEvent.stageOfCompetetion }}</p>
      <p class="text-center bg-blue-200 font-semibold">{{ currentEvent.stadium }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, onBeforeMount } from 'vue'
import sportData from '../sportData.json'
import { useRoute } from 'vue-router'
import EventDetails from './EventDetails'

export default {
  setup() {
    const router = useRoute()
    const data = reactive(sportData)
    const eventId = computed(() => router.params.id)
    const currentEvent = ref(new EventDetails())

    onBeforeMount(() => {
      const localEvent = data.data.find((e) => parseInt(e.id) === parseInt(eventId.value))

      currentEvent.value = new EventDetails(
        localEvent?.dateVenue,
        localEvent?.timeVenueUTC,
        localEvent?.stadium,
        localEvent?.homeTeam?.officialName,
        localEvent?.awayTeam?.officialName,
        localEvent?.stage?.name,
        localEvent?.originCompetitionName,
        localEvent?.homeTeam?.teamCountryCode,
        localEvent?.awayTeam?.teamCountryCode,
      )
    })

    return { currentEvent }
  },
}
</script>
