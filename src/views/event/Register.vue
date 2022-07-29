<template>
  <p>Register for the event here.?</p>
  <button @click="register">Register me</button>
</template>

<script lang="ts">
import { tsMethodSignature } from '@babel/types'
import { defineComponent, PropType } from 'vue'
import { EventItem } from '../../types'
import { useRouter } from 'vue-router'
const router = useRouter()

export default defineComponent({
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  inject: ['GStore'],
  methods: {
    register() {
      /* TO DO : Adapt to TS 
      this.GStore.flashMessage =
        'You are successfully registered for ' + this.event.title
      setTimeout(() => {
        // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 3000)
      */

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
})
</script>
