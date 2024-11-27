<template>
  <div class="pt-6 pl-10 pr-10 pb-8">
    <div class="row-span-1 grid grid-cols-2">
      <h1>{{ currentEvent.dateVenue }}</h1>
      <h2>{{ currentEvent.timeVenueUTC }}</h2>
    </div>
    <div class="row-span-1 grid grid-cols-3">
      <p>{{ currentEvent.homeTeam.officialName }}</p>
      <p>vs</p>
      <p>{{ currentEvent.awayTeam.officialName }}</p>
    </div>
    <div>
      <p>{{ currentEvent.originCompetitionName }}</p>
      <p>{{ currentEvent.stage.id }}</p>
      <p>{{ currentEvent.stadium }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue'
import sportData from '../sportData.json'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRoute()
    const data = ref(sportData)
    const eventId = computed(() => router.params.id)
    const currentEvent = ref(null)

    onMounted(() => {
      currentEvent.value = data.value.data.find((e) => parseInt(e.id) === parseInt(eventId.value))
    })

    return { currentEvent }
  },
}
</script>
