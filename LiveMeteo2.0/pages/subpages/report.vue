<template>
  <Map />
</template>

<script>
import Map from '@/components/Report-form.vue';

export default {
  name: 'Raport',
  components: {
    Map
  },
  data () {
    return {
        title: "Raport"
      }
  }
}

</script>
