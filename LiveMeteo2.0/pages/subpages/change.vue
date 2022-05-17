<template>
  <Change />
</template>

<script>
import Change from '@/components/Change-fix.vue';

export default {
  name: 'Edytuj',
  components: {
    Change
  },
  data () {
    return {
        title: "Edytuj dane"
      }
  }
}

</script>
