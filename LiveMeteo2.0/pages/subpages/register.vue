<template>
  <Register />
</template>

<script>
import Register from '@/components/Register-form.vue';

export default {
  name: 'Rejestracja',
  components: {
    Register
  },
  data () {
    return {
        title: "Rejestracja"
      }
  }
}

</script>

