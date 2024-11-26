<template>
  <div
    class="box-content h-32 mb-8 border-4 place-content-center text-center bg-blue-200 rounded-md"
  >
    <p class="text-2xl font-extrabold">{{ currentMonth }}</p>
  </div>
  <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 place-items-center">
    <div
      v-for="dayObject in daysArray"
      :key="dayObject.day"
      class="box-content md:h-48 md:w-48 lg:h-64 lg:w-64 sm:h-64 sm:w-64 m-2 border-4 grid grid-rows-3 hover:scale-105 rounded-2xl"
      :class="[dayObject.events.length ? 'bg-sky-100' : 'bg-gray-400']"
    >
      <div class="row-span-1 bg-blue-200 grid grid-cols-2">
        <p class="text-5xl col-span-1 text-left m-2">{{ dayObject.nameOfDay }}</p>
        <p class="text-5xl col-span-1 text-right m-2">{{ dayObject.day }}</p>
      </div>

      <div class="row-span-2 place-content-center">
        <div class="grid grid-cols-5" v-for="(event, index) in dayObject.events" :key="index">
          <p class="cols-span-1 font-bold place-content-center">
            {{ formatingUTCTime(event.timeVenueUTC) }}
          </p>
          <p class="col-span-4">
            {{ validateCompetitor(event.homeTeam) }} vs {{ validateCompetitor(event.awayTeam) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue'
import sportData from '../sportData.json'
import dayjs from 'dayjs'
export default {
  setup() {
    const calendarData = ref(sportData)
    const daysArray = ref([])
    const currentMonth = computed(() =>
      new Date().toLocaleString('default', { year: 'numeric', month: 'long' }),
    )

    const generateDaysOfMonths = () => {
      const currentDate = dayjs()

      const daysInMonth = currentDate.daysInMonth()

      for (let day = 1; day <= daysInMonth; day++) {
        const date = dayjs().date(day).format('YYYY-MM-DD')
        const test = dayjs(date)
        const events = calendarData.value.data.filter((data) => data.dateVenue === date)

        daysArray.value.push({
          day: day.toString().padStart(2, '0'),
          date: date,
          events: events,
          nameOfDay: test.format('ddd').toUpperCase(),
        })
      }
    }

    onMounted(() => {
      generateDaysOfMonths()
    })

    const validateCompetitor = (team) => {
      return team?.officialName ?? 'Unknown'
    }

    const formatingUTCTime = (time) => {
      return time.slice(0, -3)
    }

    return { currentMonth, daysArray, validateCompetitor, formatingUTCTime }
  },
}
</script>
