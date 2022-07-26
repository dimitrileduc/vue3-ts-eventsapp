<template>
  <p>Register for the event here.?</p>
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
  }
})
</script>
