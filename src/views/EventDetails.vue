<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EventService from '@/services/EventService'
import { EventDetail } from '@/domains/types'

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      event: {} as EventDetail,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
})
</script>

<style scoped></style>
