<template>
  <div
    class="box-content h-24 mb-8 place-content-center text-center rounded" >
    <p class="text-5xl font-extrabold">{{ currentMonth }}</p>
  </div>
  <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 place-items-center">
    <div
      v-for="dayObject in daysArray"
      :key="dayObject.day"
      class="box-content md:h-48 md:w-48 lg:h-64 lg:w-64 sm:h-64 sm:w-64 m-2 border-4 border-indigo-600 grid grid-rows-3 hover:scale-105 rounded-2xl"
      :class="[dayObject.events.length ? 'bg-white' : 'bg-gray-200']"
    >
      <div class="row-span-1 bg-indigo-600 rounded-t grid grid-cols-2">
        <p class="text-5xl col-span-1 text-left m-2">{{ dayObject.nameOfDay }}</p>
        <p class="text-5xl col-span-1 text-right m-2">{{ dayObject.day }}</p>
      </div>
      <div class="row-span-2 place-content-center">
        <div v-for="(event, index) in dayObject.events" :key="index">
          <RouterLink
            class="grid grid-cols-5"
            :to="{ name: 'event-details', params: { id: event.id } }"
          >
            <p class="cols-span-1 font-bold place-content-center pl-1">
              {{ formatingUTCTime(event.startTime) }}
            </p>
            <p class="col-span-4 text-xs font-bold uppercase pt-1">
              {{ validateCompetitor(event.homeTeam) }} vs {{ validateCompetitor(event.awayTeam) }}
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue'
import dayjs from 'dayjs'

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const data = computed(() => props.data)
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
        const events = data.value.filter((data) => data.matchDate === date)

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
      return team ?? 'Unknown'
    }

    const formatingUTCTime = (time) => {
      return time.slice(0, 5)
    }

    return { data, currentMonth, daysArray, validateCompetitor, formatingUTCTime }
  },
}
</script>
