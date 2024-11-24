<template>
  <div
    class="box-content h-32 mb-8 border-4 place-content-center text-center bg-blue-200 rounded-md"
  >
    <p class="text-2xl font-extrabold">{{ currentMonth }}</p>
  </div>
  <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 place-items-center">
    <div
      v-for="day in numberOfDays"
      :key="day"
      class="box-content md:h-32 md:w-32 h-64 w-64 p-4 m-2 border-4"
    >
      {{ day }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
export default {
  setup() {
    const currentMonth = computed(() =>
      new Date().toLocaleString('default', { year: 'numeric', month: 'long' }),
    )
    const numberOfDays = computed(() => {
      const date = new Date()
      const currentMonth = date.getMonth()
      const currentYear = date.getFullYear()
      const nextMonth = new Date(currentYear, currentMonth + 1, 0)
      return nextMonth.getDate()
    })
    return { currentMonth, numberOfDays }
  },
}
</script>
