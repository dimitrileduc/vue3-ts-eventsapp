<template>
  <p>Edit the event here</p>
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
  data: function() {
    return {
      unsavedChanges: true // <-- Flag gets set to true if anything
      //          is changed on the form
    }
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false // <-- Cancels the navigation
      }
    }
  }
})
</script>
