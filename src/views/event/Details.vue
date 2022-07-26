<template>
  <p>{{ event.time }} on ?{{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { EventItem } from '../../types'

export default defineComponent({
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.event)
  }
})
</script>
