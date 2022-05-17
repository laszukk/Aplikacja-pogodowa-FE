<template>
  <Map />
</template>

<script>
import Map from '@/components/Map-main.vue';

export default {
  name: 'Mapa',
  components: {
    Map
  },
  data () {
    return {
        title: "Mapa"
      }
  },

    async asyncData({ $axios }) {
    const kappa = await $axios.$get('http://localhost:8080/api/campaign')
    console.log(kappa)
    return { kappa }
}

}


</script>
