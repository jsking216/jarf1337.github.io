<template>
  <div>
    <strong v-if="cookies.get('visited') !== true">Welcome first-timer!</strong>
    <strong v-else>Welcome back!</strong>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { useCookies } from '@vueuse/integrations'

  export default defineComponent({
    setup() {
      const cookies = useCookies(['locale']);
      return {
        cookies,
      }
    },
    mounted() {
      const cookies = useCookies(['visited']);
      cookies.set('visited', 'true');
    }
  })
</script>