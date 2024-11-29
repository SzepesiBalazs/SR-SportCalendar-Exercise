<template>
  <div class="pt-6 pl-10 pr-10 pb-8 text-center">
    <div class="row-span-1 grid grid-cols-2 text-2xl pb-20">
      <h1 class="lg:text-right pr-3 font-bold">{{ currentEvent.matchDate }}</h1>
      <h2 class="lg:text-left pl-3 font-bold">{{ currentEvent.startTime }}</h2>
    </div>
    <div class="row-span-1 grid grid-cols-5 text-2xl pb-20">
      <p class="lg:text-right font-bold uppercase">({{ currentEvent.countryOfHomeTeam }})</p>
      <p class="lg:text-right font-bold uppercase">{{ currentEvent.homeTeam }}</p>
      <p class="lg:text-center font-semibold uppercase">vs</p>
      <p class="lg:text-left font-bold uppercase">{{ currentEvent.awayTeam }}</p>
      <p class="lg:text-left font-bold uppercase">({{ currentEvent.countryOfAwayTeam }})</p>
    </div>
    <div>
      <p class="lg:text-center font-extrabold pb-1">{{ currentEvent.nameOfCompetetion }}</p>
      <p class="lg:text-center font-semibold">{{ currentEvent.stageOfCompetetion }}</p>
      <p class="lg:text-center font-semibold">{{ currentEvent.stadium }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, onBeforeMount } from 'vue'
import sportData from '../sportData.json'
import { useRoute } from 'vue-router'
import EventDetails from './EventDetails'

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const router = useRoute()
    const data = computed(() => props.data)
    const eventId = computed(() => router.params.id)
    const currentEvent = ref(new EventDetails())

    onBeforeMount(() => {
      currentEvent.value = data.value.find((e) => parseInt(e.id) === parseInt(eventId.value))
    })

    return { currentEvent }
  },
}
</script>
