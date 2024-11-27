<template>
  <div
    class="box-content h-32 mb-8 border-4 place-content-center text-center bg-blue-200 rounded-md"
  >
    <h1>{{ currentEvent }}</h1>
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
