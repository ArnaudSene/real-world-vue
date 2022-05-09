<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="myEvent in events" :key="myEvent.id" :event="myEvent" />
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
