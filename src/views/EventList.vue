<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >Prev Page</router-link
    >

    <router-link
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page</router-link
    >
  </div>
</template>

<script lang="ts">
import { watchEffect } from 'vue'
import { defineComponent, PropType } from 'vue'
import { EventItem } from '../types'

import EventCard from '../components/EventCard.vue'
import EventService from '../services/EventService'

export default defineComponent({
  name: 'EventList',
  props: {
    page: {
      type: Number as PropType<number>,
      required: true
    }
  }, // <---- receive the param as a prop, the current page
  components: {
    EventCard
  },
  data() {
    return {
      events: [] as EventItem[],
      totalEvents: 0 //
    }
  },
  created() {
    watchEffect(() => {
      EventService.getEvents(2, this.page) // <---- 2 events per page, and current page
        .then(response => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage(): Boolean {
      // First, calculate total pages
      var totalPages = Math.ceil(this.totalEvents / 2) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    }
  }
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
